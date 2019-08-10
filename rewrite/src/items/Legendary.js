import RegularItem from "./RegularItem";
import { LEGENDARY_QUALITY } from '../constants';

class Legendary extends RegularItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, LEGENDARY_QUALITY)
  }

  // a legendary item's quality is 80 and it never alters
  updateQuality() {
    return LEGENDARY_QUALITY;
  }

}

export default Legendary;
