class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (this.daysOverdrawn - 7) * 0.85;
      }
    } else {
      return this.daysOverdrawn * 1.75;
    }
  }
}

// 계좌 종류에 따라 이자 책정 알고리즘이 달라지도록 고치기
// 마이너스 통장의 초과 인출 이자를 계산하는 overdraftCharge()를 계좌 종류 클래스인 AccountType으로 옮기는 게 자연스러울 것
// daysOverdrawn() 메서드는 Account 클래스에 남겨둔다 => 계좌 종류가 아닌 계좌별로 달라지는 메서드이기 때문

/**
 * overdraftCharge() 메서드 본문을 AccountType 클래스로 복사한 후 정리
 */

class AccountType {
  get overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}

/**
 * 원래 메서드의 본문 수정, 새 메서드 호출
 */

class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}

/**
 * 위임 메서드를 남겨둘지 인라인 할지 선택
 * 인라인한다면
 */
class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.daysOverdrawn);
    return result;
  }
}
