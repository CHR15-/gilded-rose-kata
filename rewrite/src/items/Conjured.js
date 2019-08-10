import RegularItem from "./RegularItem";
import { LEGENDARY_QUALITY, MIN_QUALITY } from '../constants';

class Conjured extends RegularItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  // "Conjured" items degrade in Quality twice as fast as normal items
  updateQuality() {
    var eopQuality = this.sell_in < 0 ? this.quality -= DEGRADATION_RATE * 4 : this.quality -= DEGRADATION_RATE * 2;
    if (this.quality < 0) return MIN_QUALITY;
    if (this.quality > 50) return MAX_QUALITY;
    return eopQuality;
  }

}

export default Conjured;
