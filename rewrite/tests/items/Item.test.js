import Item from "../../src/items/Item";
import { MAX_QUALITY, MIN_QUALITY } from "../../src/constants";

describe("Initialise Item", () => {

  it("Check a consumer instantiates the class", () => {
    expect(new Item()).toBeInstanceOf(Item);
  });

  test("We initialise an Item with some values", () => {
    const item = new Item("x", 1, 2);

    expect(item.name).toEqual("x");
    expect(item.sellIn).toEqual(1);
    expect(item.quality).toEqual(2);

    expect(item.setToMaxQuality).toBeInstanceOf(Function);
    expect(item.degradeQuality).toBeInstanceOf(Function);
    expect(item.updateQuality).toBeInstanceOf(Function);
    expect(item.updateSellIn).toBeInstanceOf(Function);
  });
});

describe("Item constants behaviour", () => {

  test(`Setting max value of an item (${MAX_QUALITY})`, () => {
    const item = new Item("x", 1, 2);
    item.setToMaxQuality();
    expect(item.quality).toEqual(MAX_QUALITY);
  });
});

describe("Item decrease quality behaviour", () => {

  test("If not passed sell by date, Quality normally", () => {
    const item = new Item("x", 2, 10);
    item.degradeQuality();
    expect(item.quality).toEqual(9);
  });

  test("If passed sell by date, Quality degrades twice as fast", () => {
    const item = new Item("x", -2, 5);
    item.degradeQuality();
    expect(item.quality).toEqual(3);
  });
});

describe("Item sellIn days", () => {

  test("sellIn should tick down at end of play", () => {
    const item = new Item("x", 2, 10);
    item.updateSellIn();
    expect(item.sellIn).toEqual(1);
  });
});

describe("Item update quality behaviour", () => {

  test(`An item can never be more than ${MAX_QUALITY}`, () => {
    // Quality increases by 2 when there are 10 days or less
    const item = new Item("x", 6, 48);

    item.updateQuality();
    item.updateSellIn();
    expect(item.sellIn).toEqual(5);
    expect(item.quality).toBeLessThanOrEqual(MAX_QUALITY);

    // Quality increases by 3 when there are 5 days or less
    item.updateQuality();
    item.updateSellIn();
    expect(item.sellIn).toEqual(4);
    expect(item.quality).toBeLessThanOrEqual(MAX_QUALITY);
  });

  test(`An item can never be less than ${MIN_QUALITY}`, () => {
    // Quality increases by 2 when there are 10 days or less
    const item = new Item("x", 10, 0);

    item.updateQuality();
    expect(item.quality).toBeGreaterThanOrEqual(MIN_QUALITY);
  });

  test(`An item degrades in quality every day`, () => {
    // Quality increases by 2 when there are 10 days or less
    const item = new Item("x", 20, 20);

    item.updateQuality();
    expect(item.quality).toEqual(19);

    item.updateQuality();
    expect(item.quality).toEqual(18);
  });

  test(`An item sellIn property decreases every day`, () => {
    // Quality increases by 2 when there are 10 days or less
    const item = new Item("x", 10, 10);

    item.updateSellIn();
    expect(item.sellIn).toEqual(9);

    item.updateSellIn();
    expect(item.sellIn).toEqual(8);
  });
});
