describe("Gilded Rose", function() {

  it("should decrease quality and sell_in of normal items", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 7) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(6);
  });
  
});
