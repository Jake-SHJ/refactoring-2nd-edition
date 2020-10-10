// 함수 밖에서도 참조할 수 있는 변수라면 조심해야 한다

let tpHd = "untitled";

// 변수를 읽기만 하는 곳
result += `<h1>${tpHd}</h1>`;

// 값을 수정하는 곳
tpHd = obj["articleTitle"];

/**
 * 변수 캡슐화하기로 처리
 */
result += `<h1>${title()}</h1>`;

setTitle(obj["articleTitle"]);

function title() {
  return tpHd;
}

function setTitle(arg) {
  tpHd = arg;
}

/**
 * 변수 이름 변경
 */
let _title = "untitled";

function title() {
  return _title;
}

function setTitle(arg) {
  _title = arg;
}

/**
 * 상수 이름 바꾸기
 */
const cpyNm = "애크미 구스베리";

// 원본의 이름을 바꾼 후, 원본의 기존 이름과 같은 복제본을 만든다
const companyName = "애크미 구스베리";
cpyNm = companyName;
