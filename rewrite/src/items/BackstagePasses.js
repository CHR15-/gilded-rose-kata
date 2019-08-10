import RegularItem from "./RegularItem";
import { DEGRADATION_RATE, MAX_QUALITY, MIN_QUALITY } from '../constants';

class BackstagePasses extends RegularItem {
  constructor(item) {
    super(item)
  }

  /* Backstage passes, like aged brie, increases in Quality as it's SellIn value approaches;
    Quality increases by 2 when there are 10 days or less and by 3 when there are
    5 days or less but Quality drops to 0 after the concert
  */
  updateQuality() {
    // bail out if concert is finished
    if (this.sell_in < 0) {
      return MIN_QUALITY;
    }

    if (this.quality < MAX_QUALITY) {
      if (this.sell_in <= 5) {
        return this.quality <= 47 ? this.quality += 3 : MAX_QUALITY;
      } else if (this.sell_in <= 10) {
        return this.quality <= 48 ? this.quality += 2 : MAX_QUALITY;
      }
      return this.quality += DEGRADATION_RATE;
    }
  }

}

export default BackstagePasses;
