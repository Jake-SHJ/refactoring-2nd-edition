// 온도 측정값 배열에서 정상 작동 범위를 벗어난 것이 있는지 검사하는 코드

// 측정값 데이터
const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

// 정상 범위를 벗어난 측정값을 찾는 함수
function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

// 호출
alert = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

/**
 * 범위의 개념을 묶어서 표현
 */
class NumberRange {
  constructor(min, max) {
    this._data = { min: min, max: max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
  // 주로 값 객체로 만들 가능성이 높기 때문에 세터는 만들지 않는다
}

/**
 * 매개변수를 추가하여 함수 선언 바꾸기
 */
function readingsOutsideRange(station, min, max, range) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

/**
 * 호출문 변경
 */
alert = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling,
  range
);

/**
 * 기존 매개변수를 사용하는 부분 변경
 */
function readingsOutsideRange(station, min, range) {
  return station.readings.filter((r) => r.temp < min || r.temp > range.max);
}

alert = readingsOutsideRange(station, operatingPlan.temperatureFloor, range);

/**
 * 하나씩 제거
 */
function readingsOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
}

alert = readingsOutsideRange(station, range);
