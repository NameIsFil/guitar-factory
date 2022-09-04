import {Neck, Strings} from "./Parts";

class NeckSupplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;

  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.delivery();
  }

  delivery() {
    const neckTimeDifference = Date.now() - this.lastSupplyTimestamp;
    if (neckTimeDifference < this.frequencyInSeconds * 1000) {
      return null;
    } else {
      const min = 3;
      const max = 6;
      const necksDeliveryArray = [];
      this.lastSupplyTimestamp = Date.now();
      const randomNumber = Math.round(Math.random() * (max - min) + min);
      for (let i = 0; i < randomNumber; i++) {
        necksDeliveryArray.push(new Neck());
      }
      console.log('delivered ' + necksDeliveryArray.length + ' of neck parts');
      return necksDeliveryArray;
    }
  }
}

class StringsSupplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;

  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.delivery();
  }

  delivery() {
    const stringsTimeDifference = Date.now() - this.lastSupplyTimestamp;
    if (stringsTimeDifference < this.frequencyInSeconds * 1000) {
      return null;
    } else {
      const min = 3;
      const max = 6;
      const stringsDeliveryArray = [];
      this.lastSupplyTimestamp = Date.now();
      const randomNumber = Math.round(Math.random() * (max - min) + min);
      for (let i = 0; i < randomNumber; i++) {
        stringsDeliveryArray.push(new Strings());
      }
      console.log('delivered ' + stringsDeliveryArray.length + ' of neck parts');
      return stringsDeliveryArray;
    }
  }
}

export { StringsSupplier, NeckSupplier };




