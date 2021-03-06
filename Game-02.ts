export class Item {
  name: string
  sellIn: number
  quality: number

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality() {
    const degrade = 1

    for (let i = 0; i < this.items.length; i++) {
      if ((this.items[i].name = 'Sulfuras, Hand of Ragnaros')) {
        continue
      }
      if (this.items[i].sellIn > 0) {
        if (this.items[i].name === 'Aged Brie' && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + degrade
        } else if (
          this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' &&
          this.items[i].quality < 50
        ) {
          this.items[i].quality = this.items[i].quality + degrade
          if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + degrade
          }
          if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + degrade
          }
        } else if (
          this.items[i].name.includes('Conjured') &&
          this.items[i].quality > 0
        ) {
          this.items[i].quality = this.items[i].quality - degrade * 2
        } else if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - degrade
        }
        this.items[i].sellIn = this.items[i].sellIn - 1
      } else {
        if (this.items[i].name === 'Aged Brie' && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + degrade * 2
        } else if (
          this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'
        ) {
          if(this.items[i].sellIn === 0 && this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + degrade * 3
          }
          else{
            this.items[i].quality = 0
          }
        } else if (
          this.items[i].name.includes('Conjured') &&
          this.items[i].quality > 0
        ) {
          this.items[i].quality = this.items[i].quality - degrade * 2 * 2
        } else if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - degrade * 2
        }
        this.items[i].sellIn = this.items[i].sellIn - 1
      }
      if (this.items[i].quality < 0) {
        this.items[i].quality = 0
      } else if (this.items[i].quality > 50) {
        this.items[i].quality = 50
      }
    }

    return this.items
  }
}
