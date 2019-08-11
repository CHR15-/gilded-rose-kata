describe("Backstage Passes", function () {

  it("Item should declare all field", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)];
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(0);
  });

  it("Item should appropriately sell_in each day", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Item should appropriately increase quality each day", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)];
    update_quality();
    expect(items[0].quality).toEqual(11);
  });

  it("Item should appropriately increase quality with 10 days or less remaining", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(12);
  });

  it("Item should appropriately increase quality with 5 days or less remaining", function () {
    // bad input
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(13);
  });

  it("Item should appropriately set quality to 0 after the concert has happened", function () {
    // bad input
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", -1, 30)];
    update_quality();
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(0);
  });
});
