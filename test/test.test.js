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
});
