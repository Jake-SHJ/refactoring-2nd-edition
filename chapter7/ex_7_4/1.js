// 주문 클래스의 예
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    var basePrice = this._quantity * this._item.price;
    var discountFactor = 0.98;

    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

/**
 * 임시 변수를 메서드로 바꾸기
 */
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    const basePrice = this._quantity * this._item.price; // 읽기전용으로 변경 후 테스트
    var discountFactor = 0.98;

    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

// 대입문 우변을 게터로 추출
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    const basePrice = this.basePrice;
    var discountFactor = 0.98;

    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
  get basePrice() {
    return this._quantity * this._item.price;
  }
}

// 테스트 후 변수 인라인
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return this.basePrice * discountFactor;
  }
  get basePrice() {
    return this._quantity * this._item.price;
  }
}

// discountFactor 변경
// 함수 추출하기
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    const discountFactor = this.discountFactor;
    return this.basePrice * discountFactor;
  }
  get basePrice() {
    return this._quantity * this._item.price;
  }
  get discountFactor() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
}

// 원본 변수는 읽기 전용으로 변경 및 변수 인라인
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    return this.basePrice * this.discountFactor;
  }
  get basePrice() {
    return this._quantity * this._item.price;
  }
  get discountFactor() {
    const discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
}
