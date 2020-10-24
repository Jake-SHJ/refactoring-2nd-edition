// 배송 추적 정보를 표현
class TrackingInformation {
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this._shippingCompany}: ${this._trackingNumber}`;
  }
}

// 이 클래스는 배송 클래스의 일부처럼 사용
class Shipment {
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

/**
 * TrackingInformation을 호출하는 코드 찾기
 */
// 클라이언트
aShipment.trackingInformation.shippingCompany = request.vendor;

/**
 * Shipment에 위임 함수를 만들고 클라이언트가 이를 호출하도록 수정
 */
class Shipment {
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
  set shippingCompany(arg) {
    this._trackingInformation._shippingCompany = arg;
  }
}
// 클라이언트
aShipment.shippingCompany = request.vendor;
// 클라이언트에서 사용하는 TrackingInformation의 모든 요소를 이런 식으로 처리한다

/**
 * TrackingInformation의 모든 요소를 Shipment로 옮기기
 */
class Shipment {
  get trackingInfo() {
    return `${this._shippingCompany}: ${this._trackingNumber}`;
  }
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}
