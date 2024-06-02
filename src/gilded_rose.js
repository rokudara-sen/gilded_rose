function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  items.forEach(item => {
    if (!isSpecialItem(item) && item.name !== 'Sulfuras, Hand of Ragnaros') {
      degradeItem(item);
    } else {
      improveItem(item);
    }
    updateSellIn(item);
    handleExpired(item);
  });
}

function isSpecialItem(item) {
  return item.name === 'Aged Brie' || item.name.includes('Backstage passes');
}

function degradeItem(item) {
  if (item.quality > 0) {
    item.quality -= item.name.startsWith('Conjured') ? 2 : 1;
  }
}

function improveItem(item) {
  if (item.quality < 50) {
    item.quality += 1;
    if (item.name.includes('Backstage passes')) {
      if (item.sell_in < 11) item.quality += 1;
      if (item.sell_in < 6) item.quality += 1;
    }
  }
}

function updateSellIn(item) {
  if (item.name !== 'Sulfuras, Hand of Ragnaros') {
    item.sell_in -= 1;
  }
}

function handleExpired(item) {
  if (item.sell_in < 0) {
    if (item.name === 'Aged Brie') {
      if (item.quality < 50) item.quality += 1;
    } else if (item.name.includes('Backstage passes')) {
      item.quality = 0;
    } else if (item.quality > 0) {
      item.quality -= item.name.startsWith('Conjured') ? 2 : 1;
    }
  }
}
