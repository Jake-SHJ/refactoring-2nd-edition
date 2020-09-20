const target = require("../chapter4/sample");

describe("sampleProvinceData의", () => {
  let asia;
  beforeEach(() => {
    asia = new target.Province(target.sampleProvinceData());
  });
  // 나중에 다른 테스트에서 이 공유 객체의 값을 수정하면 이 픽스처를 사용하는 또 다른 테스트가 실패할 수 있으므로
  // 각각의 테스트 바로 전에 asia를 초기화하는 방식을 사용한다 (불변임이 확실한 픽스처는 공유하기도 한다)
  test("shortfall은 5가 나와야한다", () => {
    expect(asia.shortfall).toBe(5);
  });

  test("profit은 230이 나와야한다", () => {
    expect(asia.profit).toBe(230);
  });

  test("production을 20으로 set 하면 shortfall은 -6, profit은 292가 나와야한다", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
    // 일반적으로 test 구문 하나당 검증도 하나씩만 하는 게 좋다
    // 앞쪽 검증을 통과하지 못하면 나머지 검증은 실행해보지 못하고 테스트가 실패하게 되는데,
    // 그러면 실패 원인을 파악하는 데 유용한 정보를 놓치기 쉽기 때문이다
    // 여기서는 한 테스트로 묶어도 문제되지 않을 정도로 두 속성이 밀접하다고 판단하여 이렇게 작성했다
  });

  // 숫자형이라면 0일 때를 검사한다
  test("demand가 0이라면 shortfall은 -25, profit은 0이 나와야한다", () => {
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });

  // 음수도 넣어보면 좋다
  test("demand가 -1이라면 shortfall은 -26, profit은 -10이 나와야한다", () => {
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });

  test("demand가 비어있다면 shortfall과 profit은 NaN이어야한다", () => {
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

// 컬렉션과 마주하면 그 컬렉션이 비었을 때 어떤 일이 일어나는지 확인한다
describe("producers가 없다면", () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No Producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new target.Province(data);
  });

  test("shortfall은 30이 나와야한다", () => {
    expect(noProducers.shortfall).toBe(30);
  });

  test("profit은 0이 나와야한다", () => {
    expect(noProducers.profit).toBe(0);
  });
});

describe("producers에 문자열이 들어있다면", () => {
  test("shortfall이 0?", () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new target.Province(data);
    expect(prov.shortfall).toBe(0);
  });

  // 에러가 아닌, 검증보다 앞선 과정에서 발생한 예외 상황으로 인한 테스트 실패로 판단
});
