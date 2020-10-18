// 레코드 구조에서 데이터를 읽어 들이는 단순한 Order 클래스
class Order {
  constructor(data) {
    this._priority = data.priority;
    // 나머지 초기화 코드 생략
  }
}

// 클라이언트에서 사용시
highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;

/**
 * 변수 캡슐화
 */
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

/**
 * Priority 클래스 생성
 */
class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
  // 게터 보다는 변환함수를 선호
}

/**
 * Order 클래스 내의 priority 접근자 수정 및 함수 선언 바꾸기
 */
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}
// 클라이언트
highPriorityCount = orders.filter(
  (o) => "high" === o.priorityString || "rush" === o.priorityString
).length;
