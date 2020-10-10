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
 * 레코드를 클래스로 변환하기 위해 레코드를 캡슐화
 */
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
}

/**
 * 이미 만들어져 있는 calculateBaseCharge() 옮기기
 */
// 인스턴스 생성
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// 클래스 수정 (이때 calculateBaseCharge()는 제거)
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// 클래스에 맞춰 인스턴스 호출 수정
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

/**
 * 클라이언트 1 수정
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

/**
 * 클라이언트 2 수정
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year)
);

/**
 * 세금 계산 함수로 추출
 */
function taxableChargeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

/**
 * 클라이언트 2 재수정
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = taxableChargeFn(aReading);

/**
 * 세금 계산 함수 클래스로 옮기기
 */
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

/**
 * 클라이언트 2 세금 계산 호출 수정
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;
