describe("Regular Item class", function () {

  it("Item should declare all field", function () {
    items = [new Item("foo", 0, 0)];
    expect(items[0].name).toEqual("foo");
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(0);
  });

  it("Item should appropriately decrease sell_in each day", function () {
    items = [new Item("foo", 0, 0)];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Item should appropriately decrease quality each day", function () {
    items = [new Item("foo", 0, 10)];
    update_quality();
    expect(items[0].quality).toEqual(9);
  });

  it("Item should appropriately never decrease quality lower than 0", function () {
    items = [new Item("foo", 0, 0)];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("Item should degrade twice as fast after sell_in days has passed", function () {
    items = [new Item("foo", -1, 10)];
    update_quality();
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(8);
  });

  it("Item should never be more than 50", function () {
    // bad input
    items = [new Item("foo", 10, 55)];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(50);
  });


});
