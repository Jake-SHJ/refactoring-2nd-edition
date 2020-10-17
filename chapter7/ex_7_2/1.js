// 수업 목록을 필드로 지니고 있는 Person 클래스
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

// 클라이언트는 Person이 제공하는 수업 컬렉션에서 수업 정보를 얻는다
numAdvancesCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

// 세터를 이용해 수업 컬렉션을 통째로 설정한 클라이언트는 누구든 이 컬렉션을 마음대로 수정할 수 있다
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map((name) => new Course(name, false));

// 클라이언트 입장에서는 수업 목록을 직접 수정하는 것이 편할 수 있다, 대신 캡슐화가 깨진다
for (const name of readBasicCourseNames(filename)) {
  aPerson.courses.push(new Course(name, false));
}

/**
 * 캡슐화를 위해 클라이언트가 수업을 하나씩 추가하고 제거하는 메서드를 Person 클래스에 추가
 */
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

/**
 * 컬렉션의 변경자를 직접 호출하던 코드를 모두 찾아서 추가한 메서드를 사용하도록 수정
 */

for (const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}

/**
 * 세터의 처리
 * setCourses()를 사용할 일이 없어졌으니 제거
 * 세터를 제공해야 할 특별한 이유가 있다면 인수로 받은 컬렉션의 복제본을 필드에 저장하게 한다
 */
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList.slice();
  }
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

/**
 * 이 메서드들을 사용하지 않고서는 아무도 목록을 변경할 수 없게 만드는 방식
 * 다음과 같이 복제본을 제공
 */
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses.slice();
  }
  set courses(aList) {
    this._courses = aList.slice();
  }
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}
