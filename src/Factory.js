import { Guitar } from './Guitar';
import { NeckSupplier, StringsSupplier } from './Supplier';
import { Body, Strings, Neck } from './Parts';
import { Storage } from './Storage';

class Factory {
  storage = new Storage();
  instrument = 'guitar';
  stringsArray = [];
  necksArray = [];

  constructor() {
    setInterval(this.runProductionLine.bind(this), 2000);
  }

  produceBody() {
    return new Body();
  }

  runProductionLine() {
    const newNeckDelivery = new NeckSupplier(3);
    const newStringsDelivery = new StringsSupplier(4);

    if (
      newNeckDelivery.necksDeliveryArray === null ||
      newStringsDelivery.stringsDeliveryArray === null
    ) {
      setTimeout(this.continueExecution, 4000);
    } else {
      for (let i = 0; i < newNeckDelivery.necksDeliveryArray.length; i++) {
        this.necksArray.push(new Neck());
      }
      for (let j = 0; j < newStringsDelivery.stringsDeliveryArray.length; j++) {
        this.stringsArray.push(new Strings());
      }
      this.necksArray.pop();
      this.stringsArray.pop();
      console.log(this.necksArray.length, this.stringsArray.length);
      console.log('Guitar has been produced');
      const newGuitar = new Guitar(
          (this.body = this.produceBody()),
          (this.neck = this.necksArray.pop()),
          (this.strings = this.stringsArray.pop()),
      );
      console.log(newGuitar);
      if (newGuitar.isPlayable()) {
        this.storage.storeInstrument(this.instrument);
      }
    }
  }

  continueExecution() {
    this.runProductionLine();
  }
}

export { Factory };
