describe("AAged Brie tests", function() {

  it("Item should declare all field", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(0);
  });

  it("Item should appropriately decrease sell_in each day", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
  });

  it("Item should appropriately increase quality each day", function() {
    items = [ new Item("Aged Brie", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(11);
  });

  it("Item should appropriately never decrease quality lower than 0", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(1);
  });

  it("Item should never be more than 50", function() {
    // bad input
    items = [ new Item("Aged Brie", 10, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(50);
  });


});
