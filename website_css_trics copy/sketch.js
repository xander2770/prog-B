
let currentpage = 1
let menuitems //arry med alle menuer
let pages // en arry med alle sider

function setup(){

  pages = selectAll('.page')
  menuitems = selectAll('.menuitem')
  //console.log(pages.length)

  for( m of menuitems){
    m.mousePressed( function(e){
      let nr = e.target.id.slice(-1)
      shiftpage(nr)
    })
  }

  shiftpage(currentpage)
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
  select("#menu" + currentpage).removeClass("active")
  currentpage = num
  select("#page" + currentpage).addClass("visible")
  select("#menu" + currentpage).addClass("active")
}

function keyPressed(){
  shiftpage(key)
}