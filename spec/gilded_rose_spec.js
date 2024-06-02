describe("Gilded Rose", function() {

  it("should decrease quality and sell_in of normal items", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 7) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(6);
  });
  it("should not decrease quality below 0", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
  it("should increase quality of Aged Brie", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });
  it("should not increase quality of an item above 50", function() {
    items = [ new Item("Aged Brie", 2, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });
  it("should not change sell_in or quality of Sulfuras", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });
  it("should increase quality of Backstage passes as sell_in approaches", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });
  it("should increase quality of Backstage passes by 2 when 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(22);
  });
});
