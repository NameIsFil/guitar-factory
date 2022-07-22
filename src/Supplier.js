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
    if (timeDifference < this.frequencyInSeconds * 1000) {
      this.supplyCount = null;
      return this.supplyCount;
    } else {
      this.lastSupplyTimestamp = Date.now();
      this.supplyCount = Math.floor(Math.random() * (7 - 3) + 3);
      return this.supplyCount;
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

export { Supplier, StringsSupplier, NeckSupplier };
