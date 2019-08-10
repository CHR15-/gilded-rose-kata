import Brie from '../../src/items/Brie';

describe('Initialise Item', () => {

  test('We initialise an Item with some values', () => {
    const item = new Brie(1, 2);

    expect(item.name).toEqual('Aged Brie');
    expect(item.sellIn).toEqual(1);
    expect(item.quality).toEqual(2);

    expect(item.setToMaxQuality).toBeInstanceOf(Function);
    expect(item.degradeQuality).toBeInstanceOf(Function);
    expect(item.updateQuality).toBeInstanceOf(Function);
    expect(item.updateSellIn).toBeInstanceOf(Function);
  });
});

describe('Item update quality behaviour', () => {

  test(`A Brie will mature in quality`, () => {
    const item = new Brie(20, 40);

    item.updateQuality();
    expect(item.quality).toEqual(41);

    item.updateQuality();
    expect(item.quality).toEqual(42);
  });

  test(`A Brie will mature in quality after the sellIn day`, () => {
    const item = new Brie(-1, 4);

    item.updateQuality();
    expect(item.quality).toEqual(5);

    item.updateQuality();
    expect(item.quality).toEqual(6);
  });
});
