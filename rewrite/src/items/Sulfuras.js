import RegularItem from "./RegularItem";
import { LEGENDARY_QUALITY } from '../constants';

class Legendary extends RegularItem {
  constructor(name, sellIn, quality){
    super(name, sellIn, LEGENDARY_QUALITY, false)
  }

  updateQuality() {
    return LEGENDARY_QUALITY;
  }

}

export default Legendary;
