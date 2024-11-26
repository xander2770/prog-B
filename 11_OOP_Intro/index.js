let mySound

function preload() {
    mySound = loadSound('//assets/Your_Phone_Ringing_-_Funny_Asian-650683.mp3')
}
function setup(){
    //Variablen c, er en ny instans af klassen Clock, som får div'en #clock med i sin constructor
    let c = new Clock( select('#clock') , 'black')
    c.start()

    let otherClockDiv = createDiv()
    let otherClock = new Clock( otherClockDiv, 'black', mySound)
    otherClock.start()
    otherClockDiv.position( 100, 100 )
    otherClock.setAlarm('12','29','10')

}