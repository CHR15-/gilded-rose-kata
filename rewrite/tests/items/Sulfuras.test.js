import { LEGENDARY_QUALITY } from '../../src/constants';


describe('Initialise Item', () => {

  test('We initialise an Item with some values', () => {
    const item = new Legendary(5);

    expect(item.name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(item.sellIn).toEqual(5);
    expect(item.quality).toEqual(LEGENDARY_QUALITY);

    expect(item.setToMaxQuality).toBeInstanceOf(Function);
    expect(item.degradeQuality).toBeInstanceOf(Function);
    expect(item.updateQuality).toBeInstanceOf(Function);
    expect(item.updateSellIn).toBeInstanceOf(Function);
  });
});

describe('Item update quality behaviour', () => {

  test(`A Legendary will never change in quality`, () => {
    const item = new Legendary(5);

    item.updateQuality();
    expect(item.quality).toEqual(80);

    item.updateQuality();
    expect(item.quality).toEqual(80);
  });

  test(`A Legendary can still age but quality remains the same`, () => {
    const item = new Legendary(10);

    expect(item.quality).toEqual(80);

    item.updateSellIn();
    expect(item.sellIn).toEqual(9);
    expect(item.quality).toEqual(80);
  });
});
