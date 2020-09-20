const target = require("../chapter4/sample");

test("sampleProvinceData의 shortfall은 5가 나와야한다", () => {
  const asia = new target.Province(target.sampleProvinceData());
  expect(asia.shortfall).toBe(5);
});
