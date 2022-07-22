class Storage {
  instrumentsArray = [];

  constructor() {
    this.instrumentsArray = [];
    this.storeInstrument();
  }

  storeInstrument() {
    console.log('There is ' + this.instrumentsArray.length + ' in Storage');
  }
}

export { Storage };
