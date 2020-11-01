// 코드 조각을 슬라이드 할 때는
// 무엇을 슬라이드할지와 슬라이드할 수 있는지 여부, 두 가지를 확인해야 한다

const pricingPlan = retrievePricingPlan(); // 1
const order = retrieveOrder(); // 2
const baseCharge = pricingPlan.base; // 3
let charge; // 4
const chargePerUnit = pricingPlan.unit; // 5
const units = order.units; // 6
let discount; // 7
charge = baseCharge + units * chargePerUnit; // 8
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0); // 9
discount = discountableUnits * pricingPlan.discountFactor; // 10
if (order.isRepeat) discount += 20; // 11
charge = charge - discount; // 12
chargeOrder(charge); // 13

// 처음 일곱 줄은 선언이므로 이동하기 상대적으로 쉽다
// 할인 관련 코드를 모으고 싶다면 7번 줄을 10번 줄 바로 위까지 내리면 된다
// 2번 줄도 6번 줄 바로 위로 옮겨도 부수효과 없이 아무 문제가 없다

// 부수효과가 있는 코드를 슬라이드하거나 부수효과가 있는 코드를 건너뛰어야 한다면 훨씬 신중해야 한다
// 11번 줄을 코드 끝으로 슬라이드하고 싶다면, 12번 줄 때문에 가로막힌다. 11번 줄에서 상태를 수정한 변수 discount를 12번 줄에서 참조하기 때문
// 비슷하게 13번 줄도 12번 줄 앞으로 이동할 수 없다

// 슬라이드가 안전한 지를 판단하려면 관련된 연산이 무엇이고 어떻게 구성되는지를 완벽히 이해해야 한다

// 상태 갱신에 특히나 신경 써야 하기 때문에 상태를 갱신하는 코드 자체를 최대한 제거하는 게 좋다

// 조각을 슬라이드한 후 테스트를 수행해서 깨지는 게 없는지 살피자

// 슬라이드 후 테스트가 실패했을 때 가장 좋은 대처는 더 작게 슬라이드 해보는 것이다
