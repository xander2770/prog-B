console.log("clock is here")

class Clock {
    //constructoren er klassens "setup" function den kaldes når vi opretter nye objekter med klassen
    constructor(div){
        this.div = div
        
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)
        //interval til at sætte tiden ind
        this.interval
    }
    start(){
        this.interval = setInterval(()=>{
            this.hDiv.html( hour() < 10 ? '0' + hour() : hour())
            this.mDiv.html( minute() < 10 ? '0' + minute() : minute())
            this.sDiv.html( second() < 10 ? '0' + second() : second())
        },1000)
    }
}