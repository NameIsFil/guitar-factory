class NeckSupplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;
  supplyCount = null;


  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.neckDelivery();
  }

  neckDelivery() {
    const neckTimeDifference = Date.now() - this.lastSupplyTimestamp;
    if (neckTimeDifference < this.frequencyInSeconds * 1000) {
      this.supplyCount = null;
      return this.supplyCount;
    } else {
      const min = 3;
      const max = 6;
      const arrayOfSupplies = [];
      this.lastSupplyTimestamp = Date.now();
      const randomNumber = Math.round(Math.random() * (max - min) + min);
      for (let i = 0; i < randomNumber; i++) {
        arrayOfSupplies.push('part');
      }
      this.supplyCount = arrayOfSupplies.length;
      return this.supplyCount;
    }
  }
}

class StringsSupplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;
  supplyCount = null;

  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.stringsDelivery();
  }

  stringsDelivery() {
    const stringsTimeDifference = Date.now() - this.lastSupplyTimestamp;
    if (stringsTimeDifference < this.frequencyInSeconds * 1000) {
      this.supplyCount = null;
      return this.supplyCount;
    } else {
      const array = [];
      const min = 3;
      const max = 6;
      this.lastSupplyTimestamp = Date.now();
      this.supplyCount = Math.round(Math.random() * (max - min) + min);
      return this.supplyCount;
    }
  }
}

export { StringsSupplier, NeckSupplier };
