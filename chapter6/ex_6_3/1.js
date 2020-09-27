function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

/**
 * 기본 가격 변수 추출
 */
function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

/**
 * 해당 표현식을 변수로 교체
 */
function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  return (
    basePrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(basePrice * 0.1, 100)
  );
}

/**
 * 수량 할인 변수 추출 및 교체
 */
function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  return basePrice - quantityDiscount + Math.min(basePrice * 0.1, 100);
}

/**
 * 배송비 변수 추출 및 교체, 주석 제거
 */
function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}
