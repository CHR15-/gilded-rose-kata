describe("Gilded Rose integration test", function () {

  it("should act like a store!", function () {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6),
    ];

    update_quality();
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[0].quality).toEqual(19);
    expect(items[0].sell_in).toEqual(9);

    expect(items[1].name).toEqual("Aged Brie");
    expect(items[1].quality).toEqual(1);
    expect(items[1].sell_in).toEqual(1);

    expect(items[2].name).toEqual("Elixir of the Mongoose");
    expect(items[2].quality).toEqual(6);
    expect(items[2].sell_in).toEqual(4);

    expect(items[3].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[3].quality).toEqual(80);
    expect(items[3].sell_in).toEqual(-1);

    expect(items[4].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[4].quality).toEqual(80);
    expect(items[4].sell_in).toEqual(-2);

    expect(items[5].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[5].quality).toEqual(21);
    expect(items[5].sell_in).toEqual(14);

    expect(items[6].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[6].quality).toEqual(50);
    expect(items[6].sell_in).toEqual(9);

    expect(items[7].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[7].quality).toEqual(50);
    expect(items[7].sell_in).toEqual(4);

    expect(items[8].name).toEqual("Conjured Mana Cake");
    expect(items[8].quality).toEqual(4);
    expect(items[8].sell_in).toEqual(2);
  });
});
