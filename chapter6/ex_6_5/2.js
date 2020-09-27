class book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

// 예약시 우선순위 큐를 지원하라는 요구 사항
/**
 * 새로운 함수로 추출
 */
class book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer);
  }
  zz_addReservation(customer) {
    this._reservations.push(customer);
  }
}

/**
 * 새 함수의 선언문과 호출문에 원하는 매개변수 추가
 */
class book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }
  zz_addReservation(customer, isPriority) {
    this._reservations.push(customer);
  }
}

/**
 * JS로 프로그래밍한다면, 호출문을 변경하기 전에 어서션을 추가하여 호출하는 곳에서
 * 새로 추가한 매개변수를 실제로 사용하는지 확인한다.
 * (어서션을 지원하는 테스트 라이브러리에서 사용이 가능한 듯)
 */
class book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }
  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
// 기존 함수를 인라인하여 호출 코드들이 새 함수를 이용하도록 수정(한번에 하나씩 변경)
// 다 고쳤다면 새 함수의 이름을 기존 함수의 이름으로 바꾼다.
