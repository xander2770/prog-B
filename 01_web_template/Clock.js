console.log("clock is here")

class Clock {
    //constructoren er klassens "setup" function den kaldes når vi opretter nye objekter med klassen
    constructor(div, style){
        this.div = div
        this.shape = style.shape
        this.background = style.background
        
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)
        //interval til at sætte tiden ind
        this.interval

        this.div.style('width', '15rem')
        this.div.style('height', '5rem')
        this.div.style('border', '4px dotted gray')
        this.div.style('display', 'grid')
        this.div.style('place-items', 'center')
        this.div.style('padding', '1rem')
        this.div.style('border-radius', '2rem')
        
     
        switch(this.shape){
            case 'cirkel' : 
                this.div.style('border-radius', '50%')
                this.div.style('height', '15rem')
                break
            case 'elipse' : 
                this.div.style('border-radius', '50%')
                this.div.style('height', '10rem')
                break
        }
        switch(this.background){
            case 'pink' : 
            this.div.style('background', 'hotpink')
            break
            case 'blue' : 
            this.div.style('background', 'blue')
            break
        }
    
    }
    start(){
        this.interval = setInterval(()=>{
            this.hDiv.html( hour() < 10 ? '0' + hour() : hour())
            this.mDiv.html( minute() < 10 ? '0' + minute() : minute())
            this.sDiv.html( second() < 10 ? '0' + second() : second())
        },1000)
    }
    stop(){
        clearInterval(this.interval)
    }
}