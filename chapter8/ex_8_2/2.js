class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}

// 이자율이 계좌 종류에 따라 정해지도록 수정

/**
 * 이자율 필드는 이미 잘 캡슐화 되어있음
 * AccountType에 이자율 필드와 필요한 접근자 메서드 생성
 */
class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

// 리팩터링 전에는 각 계좌가 자신만의 이자율을 갖고 있었고, 지금은 종류가 같은 모든 계좌가 이자율을 공유하기를 원한다
// 이자율이 계좌 종류별로 같게 설정되어 있었다면 계속 리팩터링해도 되지만, 하나라도 다른 계좌가 있었다면 더이상 리팩터링이 아니다
// 따라서 계좌 데이터를 데이터베이스에 보관한다면 먼저 데이터베이스를 확인해서 모든 계좌의 이자율이 계좌 종류에 부합하게 설정되어 있는지 확인해야 한다
// 계좌 클래스에 어서션을 추가하는 것도 도움이 된다

class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    assert(interestRate === this._type.interestRate);
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

// 시스템의 겉보기 동작이 달라지지 않는다는 확신이 서면
/**
 * 이자율을 가져오는 부분을 변경, Account에서 이자율을 직접 수정하던 코드 제거
 */
class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type._interestRate;
  }
}
