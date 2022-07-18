class Storage {
    instrumentsArray = [];

    constructor(instrument) {
        this.storeInstrument(instrument);
    }

    storeInstrument(instrument) {
        this.instrumentsArray.push(instrument);
        console.log('There is ' + this.instrumentsArray.length + ' in Storage');
    }
}

export { Storage };
