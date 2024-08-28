function setup() {
    createCanvas(600, 600);
    background("red");
  }
  
  function draw() {
    stroke("white");
    fill("black");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }