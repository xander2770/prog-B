let header

function windowresized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  header = select('#htmlPageHeader')
    .html('Nu har p5 overtaget overskriften')
    .position(100,100)
}

function draw() {
  background(220);
}  
