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
    this.neckSupplier = new NeckSupplier(3);
    this.stringsSupplier = new StringsSupplier(4);
    setInterval(this.runProductionLine.bind(this), 2000);
  }

  produceBody() {
    return new Body();
  }

  runProductionLine() {
    const necks = this.neckSupplier.delivery();
    const strings = this.stringsSupplier.delivery();

    if (necks !== null) {
      necks.forEach((neckPart) => {
        this.necksArray.push(neckPart);
      })
    }

    if (strings !== null) {
      strings.forEach((stringsPart) => {
        this.stringsArray.push(stringsPart);
      })
    }

    if (
        this.necksArray.length === 0 ||
        this.stringsArray.length === 0
    ) {
      console.log('Rerunning production line...');
      setTimeout(this.runProductionLine.bind(this), 4000);
    } else {
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
}

export { Factory };
