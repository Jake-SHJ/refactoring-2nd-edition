function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}
// 호출문
const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

// 주 이름을 보고 판단하지 않고, 주 식별 코드를 매개변수로 받도록 리팩터링

/**
 * 매개변수로 사용할 코드를 변수로 추출
 */
function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

/**
 * 함수 추출하기로 새 함수 만들기
 */
function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNEWinNewEngland(stateCode);
}

function xxNEWinNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

/**
 * 기존 함수 안에 변수로 추출해둔 입력 매개변수를 인라인
 */
function inNewEngland(aCustomer) {
  return xxNEWinNewEngland(aCustomer.address.state);
}

/**
 * 함수 인라인하기로 기존 함수의 본문을 호출문들에 집어넣기
 */
const newEnglanders = someCustomers.filter((c) =>
  xxNEWinNewEngland(c.address.state)
);

/**
 * 새 함수의 이름을 기존 함수의 이름으로 변경
 */
function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
// 호출문
const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);
