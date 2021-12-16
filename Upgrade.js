class Upgrade {
  constructor(order, price, name) {
    this.order = order;
    this.price = price;
    this.name = name;
    this.number = 0;
    this.pps = 0;
  }

  drawBox() {
    fill("blue");
    rect(550, (this.order - 1) * 100 + 30, 300, 80);
    fill("white");
    textSize(20);
    text(this.name, 600, this.order * 100 - 40);
    text("price: " + this.price, 750, this.order * 100 - 40);
    text("bought: " + this.number, 600, this.order * 100 - 10);
  }
  clicked() {
    if (
      mouseY > (this.order - 1) * 100 + 30 &&
      mouseY < (this.order - 1) * 100 + 110 &&
      mouseX > 550 &&
      mouseX < 850
    ) {
      if (money > this.price - 1) {
        money -= this.price;
        this.price = this.price * 1.2 - ((this.price * 1.2) % 1);
        this.number += 1;
        passiveIncome += this.order;
      }
    }
  }
}
