function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}

/**
 * 호출되는 함수의 반환문을 그대로 호출하는 함수를 덮는다.
 */
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/**
 * 다른 예시 (호출할 때 전달하는 인수 이름이 함수 정의에 쓰인 이름과 다른 경우)
 */
function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

/**
 * 인라인 후 코드를 살짝 수정해야한다
 */
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/**
 * 더 복잡한 예시
 */
function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}

/**
 * 실수하지 않기 위해 한 번에 한 문장씩 옮기는 것이 좋다.
 */
function reportLines(aCustomer) {
  const lines = [];
  line.push(["name", aCustomer.name]);
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(["location", aCustomer.location]);
}

/**
 * 나머지 문장도 같은 식으로 처리한다.
 */
function reportLines(aCustomer) {
  const lines = [];
  line.push(["name", aCustomer.name]);
  line.push(["location", aCustomer.location]);
  return lines;
}
