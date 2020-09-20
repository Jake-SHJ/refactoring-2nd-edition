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
});
