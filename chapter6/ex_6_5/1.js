// 간단한 절차
function circum(radius) {
  return 2 * Math.PI * radius;
}

/**
 * 함수 선언 수정
 */
function circumference(radius) {
  return 2 * Math.PI * radius;
}
// 호출한 곳을 모두 찾아서 circumference()로 바꾼다

// 마이그레이션 절차
function circum(radius) {
  return 2 * Math.PI * radius;
}

/**
 * 함수 본문 전체를 새로운 함수로 추출
 */
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}
// 수정한 코드 테스트 > 함수 인라인 > 하나 변경할 때마다 테스트
