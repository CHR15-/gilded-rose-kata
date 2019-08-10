import RegularItem from "./RegularItem";
import { DEGRADATION_RATE, MAX_QUALITY } from '../constants';

class AgedBrie extends RegularItem {
  constructor(name, sellIn, quality){
    super('Aged Brie', sellIn, quality)
  }

  updateQuality() {
    // "Aged Brie" actually increases in Quality the older it gets
    if (this.quality < MAX_QUALITY) return this.quality += DEGRADATION_RATE;
    return MAX_QUALITY;
  }

}

export default AgedBrie;
