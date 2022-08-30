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
      const min = 3;
      const max = 6;
      this.lastSupplyTimestamp = Date.now();
      this.supplyCount = Math.round(Math.random() * (max - min) + min);
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
