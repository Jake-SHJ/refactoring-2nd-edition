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

/**
 * 더 가다듬기
 * Priority 객체를 제공하는 게터를 Order 클래스에 만드는 편이 낫다고 판단
 */
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() {
    return this._priority;
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
  (o) => "high" === o.priority.toString() || "rush" === o.priority.toString()
).length;

/**
 * Priority 클래스는 다른 곳에서도 유용할 수 있으니 Order의 세터가 Priority 인스턴스를 받도록 해주면 좋다
 */

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

/**
 * 우선 순위 값을 검증하고 비교하는 로직 추가
 */
class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid for Priority`);
  }
  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}
// 클라이언트
highPriorityCount = orders.filter(
  (o) => "high" === o.priority.higherThan(new Priority("normal"))
).length;
