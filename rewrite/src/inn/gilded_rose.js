let items = [];

const itemWrapper = (item) => {
  switch(item.name) {
    case "Aged Brie":
      return new AgedBrie(item);
    case "Sulfuras, Hand of Ragnaros":
      return new Legendary(item);
    case "Backstage passes to a TAFKAL80ETC concert":
      return new BackstagePasses(item);
    default:
      return item.includes("Conjured") ? new Conjured(item) : new RegularItem(item);
  }
};

export const update_quality = (items) => {
  items = items.map(function(item) {
    return itemWrapper(item);
  });

  items.forEach(item => {
    item.updateItem();
  });
}
