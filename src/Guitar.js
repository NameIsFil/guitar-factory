import { Factory } from "./Factory";

class Guitar {
  isFaulty = undefined;
  isTuned = false;

  constructor(neckSupplyCount, stringsSupplyCount, bodyPart) {
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
      console.log('guitar is playing just fine!');
      return true;
    } else {
      console.log('The guitar is not playable!');
      return false;
    }
  }
}

export { Guitar };









