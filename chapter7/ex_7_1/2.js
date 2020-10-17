// 중첩된 해시맵 (고객 정보)
// "1920": {
//     name: "마틴 파울러",
//     id: "1920",
//     usages: {
//         "2016": {
//             "1": 50,
//             "2": 55
//             // 나머지 달 생략
//         },
//         "2015": {
//             "1": 70,
//             "2": 63
//         }
//     }
// },
// "38673": {
//     name: "닐 포드",
//     id: "38673"
//     // 다른 고객 정보도 같은 형식으로 저장
// }

// 쓰기 예
customerData[customerID].usages[year][month] = amount;
// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

/**
 * 변수 캡슐화
 */
function getRawDataOfCustomers() {
  return customerData;
}
function setRawDataOfCustomers(arg) {
  customerData = arg;
}
// 쓰기 예
getRawDataOfCustomers()[customerID].usages[year][month] = amount;
// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][
    month
  ];
  return { laterAmount: later, change: later - earlier };
}

/**
 * 클래스 정의 및 반환 함수 생성
 */
class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

function getCustomerData() {
  return customerData;
}
function getRawDataOfCustomers() {
  return customerData._data;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

/**
 * 데이터 구조 안으로 들어가는 코드를 세터로 뽑아내기 (함수 추출하기)
 */

// 쓰기 예
setUsage(customerID, year, month, amount);

function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

/**
 * 클래스로 옮기기 (함수 옮기기)
 */

// 쓰기 예
getCustomerData().setUsage(customerID, year, month, amount);

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}

/**
 * 깊은 복사
 */

function getCustomerData() {
  return customerData;
}
function getRawDataOfCustomers() {
  return customerData.rawData;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data); // lodash library 사용
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}

/**
 * 읽기 처리를 세터와 같은 방법으로 처리하기
 */
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data); // lodash library 사용
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}
// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usages(customerID, laterYear, month);
  const earlier = getCustomerData().usages(customerID, laterYear - 1, month);
  return { laterAmount: later, change: later - earlier };
}

/**
 * 다른 방법
 * rawData 메서드를 사용하여 내부 데이터를 복제해서 제공
 * 문제점 > 데이터 구조가 클수록 복제 비용이 커져서 성능 저하 가능성 증가
 */

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][
    month
  ];
  return { laterAmount: later, change: later - earlier };
}
