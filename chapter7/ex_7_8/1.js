// 클라이언트
manager = aPerson.manager;

class Person {
  get manager() {
    return this._department.manager;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
}

/**
 * 위임 객체를 얻는 게터 생성
 */
class Person {
  get department() {
    return this._department;
  }
  get manager() {
    return this._department.manager;
  }
}

/**
 * 각 클라이언트가 부서 객체를 직접 사용하도록 수정
 */
manager = aPerson.department.manager;

/**
 * Person 클래스의 Manager 메서드 삭제
 */
class Person {
  get department() {
    return this._department;
  }
}
