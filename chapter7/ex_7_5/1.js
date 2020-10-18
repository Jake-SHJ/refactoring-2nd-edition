class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}

/**
 * 전화번호 관련 동작을 별도 클래스로 추출
 * 빈 전화번호를 표현하는 TelephoneNumber 클래스 정의
 */
class TelephoneNumber {}

// Person 클래스 인스턴스 수정
class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}

// 필드 옮기기
class TelephoneNumber {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this._telephoneNumber._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}

// 테스트하고 문제 없으면 다음 필드 옮기기
class TelephoneNumber {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this._telephoneNumber._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber._officeNumber;
  }
  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

// 이어서 telephoneNumber 메서드도 옮기기
class TelephoneNumber {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber;
  }
  get officeAreaCode() {
    return this._telephoneNumber._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber._officeNumber;
  }
  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

/**
 * 함수 선언 바꾸기
 * 새로 만든 클래스는 순수한 전화번호를 뜻하므로 사무실이란 단어를 쓸 이유가 없다
 */
class TelephoneNumber {
  get AreaCode() {
    return this._AreaCode;
  }
  set AreaCode(arg) {
    this._AreaCode = arg;
  }
  get Number() {
    return this._Number;
  }
  set Number(arg) {
    this._Number = arg;
  }
  get telephoneNumber() {
    return `(${this.AreaCode}) ${this.Number}`;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber;
  }
  get officeAreaCode() {
    return this._telephoneNumber.AreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.AreaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.Number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.Number = arg;
  }
}

/**
 * 포맷 출력 역할도 전화번호 클래스에 맡기기
 */
class TelephoneNumber {
  constructor(data) {
    this._areaCode = data.areaCode;
    this._number = data.number;
  }
  get AreaCode() {
    return this._areaCode;
  }
  set AreaCode(arg) {
    this._areaCode = arg;
  }
  get Number() {
    return this._number;
  }
  set Number(arg) {
    this._number = arg;
  }
  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

class Person {
  constructor(data) {
    this._name = data.name;
    this._telephoneNumber = new TelephoneNumber(data);
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}
