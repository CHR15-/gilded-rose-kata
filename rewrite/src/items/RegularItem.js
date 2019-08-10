import Item from './Item';
import { DEGRADATION_RATE, MAX_QUALITY, MIN_QUALITY } from '../constants';

class RegularItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    var eopQuality = this.sell_in < 0 ? this.quality -= DEGRADATION_RATE * 2 : this.quality -= DEGRADATION_RATE;
    if (this.quality < 0) return MIN_QUALITY;
    if (this.quality > 50) return MAX_QUALITY;
    return eopQuality;
  }

  updateItem() {
    this.quality = this.updateQuality();
    this.sell_in -= 1;
  }

}

export default RegularItem;
