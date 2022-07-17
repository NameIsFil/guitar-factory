import { Guitar } from "./Guitar";
import { NeckSupplier, StringsSupplier, Supplier} from "./Supplier";
import { Body, Strings, Neck } from "./Parts";
import { Storage } from "./Storage";

class Factory {
    storage = new Storage();
    neckSupplyCount = 0;
    stringsSupplyCount = 0;
    bodyPart = null;
    count = 0;

    constructor() {
        this.bodyPart = new Body();
        setInterval(this.runProductionLine, 2000);
        // this.runProductionLine();
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
            const newGuitar = new Guitar(
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