// 자동차 계량기를 읽어서 reading을 기록
reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 기본 요금 계산 - 클라이언트 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 세금 계산 - 클라이언트 2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 기본 요금 계산이 중복으로 등장, 추출된 함수 - 클라이언트 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

/**
 * 입력 객체를 그대로 복사해 반환하는 변환 함수 만들기
 */
function enrichReading(original) {
  const result = _.cloneDeep(original); // cloneDeep 함수는 lodash 라이브러리의 함수이다
  return result;
}

/**
 * 클라이언트 3 수정
 */
const rawReading = acquireReading(); // 미가공 측정값
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// 변환 함수로 기본 요금 계산을 옮기기
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

// 변환 함수로 옮긴 필드 사용
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

/**
 * 클라이언트 1 수정
 */
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

/**
 * 클라이언트 2 수정
 */
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 필드 교체
const base = aReading.baseCharge;
const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year)
);

// 변환 함수로 세금 계산 옮기기
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

// 필드 교체
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

// 측정값에 부가 정보를 추가하는 지금 방식에서 클라이언트가 데이터를 변경하면 심각한 문제가 생길 수 있다
// 여러 함수를 클래스로 묶기를 사용하는 것이 권장된다
// 불변 데이터 구조를 지원한다면 문제 없음
