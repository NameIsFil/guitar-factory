import { Guitar } from './Guitar';
import { NeckSupplier, StringsSupplier, Supplier } from './Supplier';
import { Body, Strings, Neck } from './Parts';
import { Storage } from './Storage';

class Factory {
  neckSupplyCount = 0;
  stringsSupplyCount = 0;
  produceBody = null;
  storage = new Storage();
  instrument = 'guitar';

  constructor() {
    this.produceBody = new Body();
    setInterval(this.runProductionLine.bind(this), 2000);
  }

  runProductionLine() {
    const newNeckDelivery = new NeckSupplier(3);
    const newStringsDelivery = new StringsSupplier(4);

    if (
      newNeckDelivery.supplyCount === null ||
      newStringsDelivery.supplyCount === null
    ) {
      setTimeout(this.continueExecution, 4000);
    } else {
      this.neckSupplyCount += newNeckDelivery.supplyCount;
      this.stringsSupplyCount += newStringsDelivery.supplyCount;
      console.log('Guitar has been produced');
      const newGuitar = new Guitar(
        this.neckSupplyCount,
        this.stringsSupplyCount,
        this.produceBody,
      );
      console.log(newGuitar);
      if (newGuitar.isPlayable() === true) {
        this.storage.instrumentsArray.push(this.instrument);
        this.storage.storeInstrument();
      }
    }
  }

  continueExecution() {
    this.runProductionLine();
  }
}

export { Factory };
