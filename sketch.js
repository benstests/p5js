let colorlist = ["yellow", "yellow", "green", "#EE34EE"];
let money = 0;
let passiveIncome = 0;
let passiveCounter = 0;
let boxOne;
let boxTwo;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  boxOne = new Upgrade(1, 20, "uOne");
  boxTwo = new Upgrade(2, 80, "uTwo");
  boxThree = new Upgrade(3, 200, "uThree");
  boxFour = new Upgrade(4, 500, "uFour");
  Clicker = new clicker();
}

function draw() {
  background(255);
  boxOne.drawBox();
  boxTwo.drawBox();
  boxThree.drawBox();
  boxFour.drawBox();
  Clicker.drawObject();
  fill("black");
  passiveCounter += 1;
  if (passiveCounter == 50) {
    passiveCounter = 0;
    money = money + passiveIncome;
  }
  text("money: " + money, 100, 50);
}
function mousePressed() {
  if (mouseX > 150 && mouseX < 450 && mouseY > 250 && mouseY < 550) {
    Clicker.addPoint();
  }
  boxOne.clicked();
  boxTwo.clicked();
  boxThree.clicked();
  boxFour.clicked();
}
