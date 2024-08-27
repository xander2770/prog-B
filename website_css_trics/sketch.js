
let currentpage = 1
let menunumber = 1

let colors = ['red','green', 'blue', 'pink', 'orange']
let menuitems //arry med alle menuer
let pages // en arry med alle sider

function setup(){
  select("#page" + currentpage).addClass("visible")
  select("#menu" + menunumber).addClass("active")
  pages = selectAll('.page')
  menuitems = selectAll('.menuitem')
  //console.log(pages.length)

  for( m of menuitems){
    m.mousePressed( function(e){
      let nr = e.target.id.slice(-1)
      shiftpage(nr)
    })
  }

  //lav en masse divver som kommer på side 3
  for(c of colors){
    let div = createDiv()
    div.style('background-color', c)
    select('#page3').child(div)
  }

}
function shiftpage(num){
  if(num == "ArrowLeft"){
    num = currentpage-1
  }
  if(num == "ArrowRight"){
    num = currentpage+1
  }
  if(isNaN(num) || num > pages.length || num == 0){
    return
  }
  select("#page" + currentpage).removeClass("visible")
  currentpage = num
  select("#page" + currentpage).addClass("visible")

  select("#menu" + menunumber).removeClass("active")
  menunumber = num
  select("#menu" + menunumber).addClass("active")
}

function keyPressed(){
  shiftpage(key)
}