class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

// 클라이언트
manager = aPerson.department.manager;

/**
 * Person 클래스에 위임 메서드 생성
 */
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}
// 클라이언트
manager = aPerson.manager;

/**
 * 클라이언트를 다 수정했으면 Person 클래스의 department 접근자를 삭제
 */
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}
