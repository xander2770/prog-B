let classContainer
let doorSound
let dataStructure = [
  {
    day:"1",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"2",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"3",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"4",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"5",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"6",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"7",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"8",
    content:"./assets/Jule_gave.jpg"

  },
  {
    day:"9",
    content:"./assets/Jule_gave.jpg"

  },

]

function preload() {
  doorSound = loadSound('./assets/doorSound.mp3')
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')
  //let door = new Door(calendarContainer, "12", './assets/Jule_gave.jpg')

  for(door of dataStructure){
    new Door(calendarContainer, door.day, door.content, doorSound)
  }
}