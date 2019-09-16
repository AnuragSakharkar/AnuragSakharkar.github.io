// RGB Circle madness
// Anurag Sakharkar
// Date


let redAmount = 0;
let blueAmount = 0;
let greenAmount = 0;

let rChange = 3;
let gChange = 2;
let bChange = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125);
}

function draw() {
  noStroke();
  fill(redAmount, greenAmount, blueAmount);
  ellipse(mouseX, mouseY, 100 , 100);

  redAmount = redAmount + rChange
  greenAmount = greenAmount + gChange
  blueAmount = blueAmount + bChange

  if (redAmount > 255 || redAmount < 0){
    rChange = -rChange;
  }
  if (greenAmount > 255 || greenAmount < 0){
    gChange = -gChange;
  }
  if (blueAmount > 255 || blueAmount < 0){
    bChange = -bChange;
  }
}
