console.log('OOP is here')

class Door {
  //kaldes ved oprettelse af nye objekter 
  constructor(containerDiv, day, content, doorSound) {
    this.parentDiv = containerDiv
    this.day = day
    this.content = content
    this.doorSound = doorSound


    this.createDoor()
  }
    
  //intern funktion - kaldes internt med this.function()

  createDoor(){
    this.doorDiv = createDiv(this.day)
    this.doorDiv.style(`
      height:13rem;
      width:13rem;
      background:crimson;
      color:white;
      font-size:3rem;
      display:grid;
      place-items:center;
      cursor:pointer;
      transition: all .7s ease-in-out;
      `)
      this.parentDiv.child(this.doorDiv)
      this.doorDiv.mousePressed(() =>this.openDoor())
  }

  openDoor(){
    this.doorDiv.style(`
      background:url(${this.content});
      color:transparent;
      background.size:cover;
      pointer-event:none;
      `)
      this.doorSound.play()
  }
}

