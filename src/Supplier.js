class NeckSupplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;
  necksDeliveryArray;

  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.neckDelivery();
  }

  neckDelivery() {
    const neckTimeDifference = Date.now() - this.lastSupplyTimestamp;
    if (neckTimeDifference < this.frequencyInSeconds * 1000) {
      this.necksDeliveryArray = null;
      return this.necksDeliveryArray;
    } else {
      const min = 3;
      const max = 6;
      this.necksDeliveryArray = [];
      this.lastSupplyTimestamp = Date.now();
      const randomNumber = Math.round(Math.random() * (max - min) + min);
      for (let i = 0; i < randomNumber; i++) {
        this.necksDeliveryArray.push('part');
      }
      console.log('delivered ' + this.necksDeliveryArray.length + ' of neck parts');
      return this.necksDeliveryArray;
    }
  }
}

class StringsSupplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;
  stringsDeliveryArray;

  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.stringsDelivery();
  }

  stringsDelivery() {
    const stringsTimeDifference = Date.now() - this.lastSupplyTimestamp;
    if (stringsTimeDifference < this.frequencyInSeconds * 1000) {
      this.stringsDeliveryArray = null;
      return this.stringsDeliveryArray;
    } else {
      const min = 3;
      const max = 6;
      this.stringsDeliveryArray = [];
      this.lastSupplyTimestamp = Date.now();
      const randomNumber = Math.round(Math.random() * (max - min) + min);
      for (let i = 0; i < randomNumber; i++) {
        this.stringsDeliveryArray.push('part');
      }
      console.log('delivered ' + this.stringsDeliveryArray.length + ' of strings parts');
      return this.stringsDeliveryArray;
    }
  }
}

export { StringsSupplier, NeckSupplier };
