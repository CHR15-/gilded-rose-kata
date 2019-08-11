import BackstagePasses from "../../src/items/BackstagePasses";
import { MAX_QUALITY, MIN_QUALITY } from "../../src/constants";

describe("Initialise Item", () => {

  test("We initialise an Item with some values", () => {
    const item = new BackstagePasses(1, 2);

    expect(item.name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(item.sellIn).toEqual(1);
    expect(item.quality).toEqual(2);

    expect(item.setToMaxQuality).toBeInstanceOf(Function);
    expect(item.degradeQuality).toBeInstanceOf(Function);
    expect(item.updateQuality).toBeInstanceOf(Function);
    expect(item.updateSellIn).toBeInstanceOf(Function);
  });
});

describe("Item quality behaviour", () => {

  test("Quality increases by 2 when there are 10 days or less", () => {
    const item = new BackstagePasses(10, 2);
    item.updateQuality();
    expect(item.quality).toEqual(4);
  });

  test("Quality increases by 3 when there are 5 days or less", () => {
    const item = new BackstagePasses(3, 2);
    item.updateQuality();
    expect(item.quality).toEqual(5);
  });

  test("Quality increases by 3 when there are 5 days or less", () => {
    const item = new BackstagePasses(3, 2);
    item.updateQuality();
    expect(item.quality).toEqual(5);
  });

  test(`Pass quality can never be more than ${MAX_QUALITY}`, () => {
    // Quality increases by 2 when there are 10 days or less
    const item = new BackstagePasses(6, 47);

    item.updateQuality();
    item.updateSellIn();
    expect(item.sellIn).toEqual(5);
    expect(item.quality).toEqual(49);

    // Quality increases by 3 when there are 5 days or less
    item.updateQuality();
    item.updateSellIn();
    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(MAX_QUALITY);
  });

  test("Passes are worthless after a concert finishes", () => {
    // Selling passes on the day of the concert
    const item = new BackstagePasses(0, 10);

    item.updateQuality();
    expect(item.quality).toEqual(13);
    item.updateSellIn();

    // Next day after concert has finished (it was awesome btw!)
    expect(item.sellIn).toEqual(-1);
    item.updateQuality();
    expect(item.quality).toEqual(MIN_QUALITY);
  });
});
