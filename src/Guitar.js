import { Factory } from "./Factory";
import { Storage } from "./Storage";

class Guitar {
  constructor(neckSupplyCount, stringsSupplyCount, produceBody) {
    this.guitarCheck();
  }

  isFaulty = undefined;
  isTuned = false;

  guitarCheck() {
    this.tune();
    this.isFaulty = this.error();
    this.isPlayable();
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
      console.log('Guitar is playing just fine!');
      return true;
    } else {
      console.log('The guitar is not playable!');
      return false;
    }
  }
}

export { Guitar };









