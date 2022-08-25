import { Factory } from './Factory';
import { Storage } from './Storage';
import { Neck } from './Parts';

class Guitar {
  constructor(neck, body, strings) {
    this.neck = neck;
    this.body = body;
    this.strings = strings;
    this.guitarCheck();
  }

  neck;
  body;
  strings;
  isFaulty = undefined;
  isTuned = false;

  guitarCheck() {
    this.tune();
    this.isFaulty = this.error();
  }

  error() {
    let x = Math.random();
    return x > 0.7;
  }

  tune() {
    this.isTuned = true;
  }

  isPlayable() {
    if (
      this.neck &&
      this.body &&
      this.strings &&
      this.isTuned &&
      !this.isFaulty
    ) {
      console.log('Guitar is playing just fine!');
      return true;
    } else {
      console.log('The guitar is not playable!');
      return false;
    }
  }
}

export { Guitar };
