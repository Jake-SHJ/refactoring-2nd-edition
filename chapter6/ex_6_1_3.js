function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("******************");
  console.log("**** 고객 채무 ****");
  console.log("******************");
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

/**
 * 선언문 이동
 */
function printOwing(invoice) {
  printBanner();

  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

/**
 * 함수 복사
 */
function printOwing(invoice) {
  printBanner();

  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding() {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding; // 변경된 변수 반환
}

/**
 * 함수 호출로 변경
 */
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding; // 변경된 변수 반환
}

/**
 * 코딩 스타일 변경
 */
function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice); // 원본 변수는 불변으로 변경
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let result = 0; // 변수 이름 변경
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
