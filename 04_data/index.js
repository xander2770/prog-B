let currentPage = 2

let pages //array med alle elementer med class = page 
let menuItems //array med alle menupunkterne  

function setup(){
    setupMenuStructure()
}

function setupMenuStructure(){
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')

    //menu items skal reagere ved at skifte side
    for( m of menuItems ){
        m.mousePressed( function(e) {
            //e.target er selve html div'en 
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            //nu kan vi kalde shiftPage som skifter side
            shiftPage(nr)
        })
    }

    //shiftPage er funktionen der tager et tal og skifter til en side        
    shiftPage(currentPage)
    //vent to sekunder og sæt så klassen "hidden" på headeren - så menuen bliver væk
    setTimeout(function(){
        select('header').addClass('hidden')
    }, 10000)

}
function pageOne(){
    console.log('side 1 bliver kalt')
}

function pageTwo(){
     //Først kalder vi mydata.json filen
     fetch('mydata.json')

     //så venter vi på kaldets promise, der kommer tilbage med .then()
     .then(
         function(response){
             //lad os tjekke om serverens response er okay
             console.log(response)
             //og hvis det er det, beder vi serveren om at give os json resultatet 
             return response.json()
         }
     )
     //og når DET så komer tilbage 
     .then(
         function (data){
             //vi har nu en random drink
             console.log(data)
            
             let newDiv = createElement('div')
             let newHeader = createElement('h1',data.name)
             let newp = createElement('p',data.description)
             let hairHeadder = createElement('h4', 'tidliger hår faver')
             let hairList = createElement('ul')
             for(color of data.hairColor){
                let listItem = createElement('li', color)
                hairList.child(listItem)
             }
             newDiv.child(newHeader)
             newDiv.child(newp)
             newDiv.child(hairHeadder)
             newDiv.child(hairList)
             select('#localData').html('')
             select('#localData').child(newDiv)
         }
     )

}

function pageThree(){
 //Først kalder vi server API'ets endpoint
 fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

 //så venter vi på serverens promise, der kommer tilbage med .then()
 .then(
     function(response){
         //lad os tjekke om serverens response er okay
         console.log(response)
         //og hvis det er det, beder vi serveren om at give os json resultatet 
         return response.json()
     }
 )
 //og når DET så komer tilbage 
    .then(
        function (data){
         //vi har nu en random drink
            console.log(data)
            let newDiv = createElement('div')
            let newHeader = createElement('h1',data.drinks[0].strDrink)
            let newImage = createImg(data.drinks[0].strDrinkThumb, 'this is a image of a coktail')
            newImage.size(300, 300)

            
            newDiv.child(newHeader)
            newDiv.child(newImage)
            

            select('#onlineData').html('')
            select('#onlineData').child(newDiv)

        }
    )
}

function pageFour(){
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }

    select("#page" + currentPage).removeClass('visible')
    select("#menu" + currentPage).removeClass('active')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
    select("#menu" + currentPage).addClass('active')
    
    if(currentPage == 1) {
        pageOne()
    }
    if(currentPage == 2) {
        pageTwo()
    }
    if(currentPage == 3) {
        pageThree()
    }
    if(currentPage == 4) {
        pageFour()
    }
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}



