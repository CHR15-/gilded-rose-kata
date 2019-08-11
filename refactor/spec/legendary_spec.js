describe("Legendary Items", function() {

  it("Item should declare all field", function() {
    items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
    expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
  });

  it("Item should appropriately sell_in each day", function() {
    items = [new Item("Sulfuras, Hand of Ragnaros", 0, 0)];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Item should not increase quality each day", function() {
    items = [new Item("Sulfuras, Hand of Ragnaros", 15, 80)];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("Item should not decrease in quality", function() {
    items = [new Item("Sulfuras, Hand of Ragnaros", 10, 80)];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(80);
  });

});
