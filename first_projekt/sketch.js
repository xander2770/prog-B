let hedder
let showRedCircle = true

function windowresized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  hedder = select('#htmlPageHedder')
    .html('Nu har p5 overtaget overskriften')
    .position(100,100)
    .mouseClicked(() => showRedCircle = !showRedCircle)
}

function draw() {
  background(220);
  
  if(showRedCircle == true){
    fill("red")
    ellipse(300,300,200)
}
}  
