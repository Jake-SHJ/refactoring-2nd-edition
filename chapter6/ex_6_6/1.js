// 전역 변수에 중요한 데이터가 담겨 있는 경우
let defaultOwner = { firstName: "마틴", lastName: "파울러" };
// 참조하는 코드
spaceship.owner = defaultOwner;
// 갱신하는 코드
defaultOwner = { firstName: "레베카", lastName: "파슨스" };

/**
 * 데이터를 읽고 쓰는 함수 정의
 */
function getDefaultOwner() {
  return defaultOwner;
}
function setDefaultOwner(arg) {
  defaultOwner = arg;
}

/**
 * 참조 코드와 갱신 코드 수정 (하나씩 바꿀 때마다 테스트한다)
 */
spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

/**
 * 변수의 가시 범위 제한
 * defaultOwner.js 파일로 분리
 */
let defaultOwner = { firstName: "마틴", lastName: "파울러" };
export function getDefaultOwner() {
  return defaultOwner;
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

/**
 * 저자 스타일로 수정
 */
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 위와 같이 참조를 캡슐화하면, 구조로의 접근이나 구조 자체를 다시 대입하는 행위는 제어할 수 있다.
// 하지만 필드 값을 변경하는 일은 제어할 수 없다.

const owner1 = defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");
const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "ownerw를 변경한 후"); // 성공할까?

/**
 * 행위까지 제어할 수 있게 캡슐화
 * 게터가 데이터의 복제본을 반환하도록 수정하는 식으로 처리(원본에는 영향을 주지 못한다)
 */
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

/**
 * 원본을 변경하기를 원하는 경우
 * 레코드 캡슐화하기를 사용
 */
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return new Person(defaultOwnerData);
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
// 속성을 다시 대입하는 연산은 모두 무시된다.
// 변경하는 부분을 없앨 수도 있고, 적절한 변경 함수를 제공할 수 있다.
// 적절히 다 처리하고 난 뒤 게터가 복제본을 반환하도록 수정하면 된다.
// 복제본 만들기와 클래스로 감싸는 방식은 레코드 구조에서 깊이가 1인 속성들까지만 효과가 있다.
// 데이터의 사용 범위가 넓을수록 적절히 캡슐화하는 게 좋다.
