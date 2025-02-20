let birds = [
  { "name": "Wandering albatross", "family": "Albatrosses", "size": 120 },
  { "name": "Grey-headed albatross", "family": "Albatrosses", "size": 95 },
  { "name": "Black-browed albatross", "family": "Albatrosses", "size": 100 },
  { "name": "King penguin", "family": "Penguins", "size": 90 },
  { "name": "Emperor penguin", "family": "Penguins", "size": 115 },
  { "name": "Gentoo penguin", "family": "Penguins", "size": 80 },
  { "name": "Adelie penguin", "family": "Penguins", "size": 70 },
  { "name": "Antarctic shag", "family": "Cormorants", "size": 85 },
  { "name": "Imperial shag", "family": "Cormorants", "size": 90 },
  { "name": "Snow petrel", "family": "Petrels", "size": 60 },
  { "name": "Cape petrel", "family": "Petrels", "size": 65 }
];

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let addButton = select('#addButton');
  let removeButton = select('#removeButton');

  addButton.mousePressed(addBird);
  removeButton.mousePressed(removeRandomBird);

  for (let i = 0; i < birds.length; i++) {
    addBird();
  }
}

function draw() {
  background(0, 119, 190);
  for (let bubble of bubbles) {
    bubble.move();
  }
}

function addBird() {
  let bird = random(birds);
  let bubble = new Bubble(bird.name, bird.family, bird.size);
  bubbles.push(bubble);
  document.body.appendChild(bubble.element);
}

function removeRandomBird() {
  if (bubbles.length > 0) {
    let index = floor(random(bubbles.length));
    let bubble = bubbles.splice(index, 1)[0];
    document.body.removeChild(bubble.element);
  }
}


