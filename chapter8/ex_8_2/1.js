class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    this._discountRate += 0.03;
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}

// 할인율을 뜻하는 discountRate 필드를 Customer에서 CustomerContract로 옮기기

/**
 * 필드 캡슐화 하기
 */
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this._discountRate;
  }
  _setDiscountRate(aNumber) {
    this._discountRate = aNumber;
  }
  becomePreferred() {
    this._discountRate += 0.03;
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

/**
 * CustomerContract 클래스에 필드 하나와 접근자들을 추가
 */

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

/**
 * Customer의 접근자들이 새로운 필드를 사용하도록 수정
 */
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._discountRate;
  }
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }
  becomePreferred() {
    this._discountRate += 0.03;
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}
// 자바스크립트를 사용하고 있으므로 소스 필드를 미리 선언할 필요는 없어서, 제거해야 할 것도 없다
