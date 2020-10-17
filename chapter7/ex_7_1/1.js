// 프로그램 전체에서 널리 사용되는 상수의 예
const organization = { name: "애크미 구스베리", country: "GB" };

// 사용될 때
result += `<h1>${organization.name}</h1>`; // 읽기 예
organization.name = newName; // 쓰기 예

/**
 * 상수 캡슐화
 */
function getRawDataOfOrganization() {
  return organization;
}
// 사용될 때
result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
getRawDataOfOrganization().name = newName; // 쓰기 예

/**
 * 레코드 클래스화 및 인스턴스 반환 함수 생성
 */
class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});
function getRawDataOfOrganization() {
  return organization._data;
}
function getOrganization() {
  return organization;
}

/**
 * 읽고 쓰는 코드, 게터 세터로 리팩터링
 */
class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString) {
    this._data.name = aString;
  }
}

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;
// 이후 getRawDataOfOrganization 함수는 제거한다

/**
 * _data 필드 펼쳐두기
 */
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}
