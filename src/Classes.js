class Guitar {
  isFaulty = undefined;
  isTuned = false;

  constructor(neckSupplyCount, stringsSupplyCount, bodyPart) {
    if (neckSupplyCount >= 3 && stringsSupplyCount >= 3 && bodyPart !== null) {
      this.tune();
      this.isFaulty = this.error();
      this.isPlayable();
    }
  }

  error() {
    let x = Math.random();
    return x > 0.7;
  }

  tune() {
    this.isTuned = true;
  }

  isPlayable() {
    if (this.isTuned === true && this.isFaulty === false) {
      console.log('guitar is playing just fine!');
      return true;
    } else {
      console.log('The guitar is not playable!');
      return false;
    }
  }
}

class Neck {}

class Strings {}

class Body {}

class Supplier {
  lastSupplyTimestamp = null;
  frequencyInSeconds;
  supplyCount = null;

  constructor(frequencyInSeconds) {
    this.frequencyInSeconds = frequencyInSeconds;
    this.delivery();
  }

  delivery() {
    const timeDifference = Date.now() - this.lastSupplyTimestamp;
    if (timeDifference < this.frequencyInSeconds * 1000 === true) {
      this.supplyCount = null;
    } else {
      this.lastSupplyTimestamp = Date.now();
      this.supplyCount = Math.floor(Math.random() * (7 - 3) + 3);
    }
  }
}

class NeckSupplier extends Supplier {
  constructor(frequencyInSeconds) {
    super(frequencyInSeconds);
  }
}

class StringsSupplier extends Supplier {
  constructor(frequencyInSeconds) {
    super(frequencyInSeconds);
  }
}

class Storage {
  instrumentsArray = [];
}

class Factory {
  storage = new Storage();
  neckSupplyCount = 0;
  stringsSupplyCount = 0;
  bodyPart = null;
  count = 0;

  constructor() {
    this.bodyPart = new Body();
    // setInterval(function() {
    // }, 2000)
    this.runProductionLine();
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
      this.count += 1;
      let newGuitar = new Guitar(
        this.neckSupplyCount,
        this.stringsSupplyCount,
        this.bodyPart,
      );
      console.log(newGuitar);
    }
  }

  continueExecution() {
    this.runProductionLine();
  }
}

export { Factory };
