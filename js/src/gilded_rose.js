var MAX_QUALITY = 50;
var MIN_QUALITY = 0;
var LEGENDARY_QUALITY = 80;
var DEGRADATION_RATE = 1;

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function RegularItem(item) {
  Item.call(this, item.name, item.sell_in, item.quality);

  this.updateQuality = function() {
    var eopQuality = this.sell_in < 0 ? this.quality -= DEGRADATION_RATE * 2 : this.quality -= DEGRADATION_RATE;
    if (this.quality < 0) return MIN_QUALITY;
    if (this.quality > 50) return MAX_QUALITY;
    return eopQuality;
  }

  this.updateItem = function() {
    this.quality = this.updateQuality();
    this.sell_in -= 1;
  }
}

function AgedBrie(item) {
  RegularItem.call(this, item);

  this.updateQuality = function() {
    if (this.quality < MAX_QUALITY) return this.quality += DEGRADATION_RATE;
    return MAX_QUALITY;
  }
}

function LegendaryItem(item) {
  RegularItem.call(this, item);

  this.updateQuality = function() {
    return LEGENDARY_QUALITY;
  }
}

function BackstagePasses(item) {
  RegularItem.call(this, item);

  this.updateQuality = function() {
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

function ConjuredItem(item) {
  RegularItem.call(this, item);
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
