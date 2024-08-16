
let currentpage = 1

let pages // en arry med alle sider

function setup(){
  select("#page" + currentpage).addClass("visible")
  pages = selectAll('.page')
  //console.log(pages.length)

}
function shiftpage(num){
  if(num == "ArrowLeft"){
    num = currentpage-1
  }
  if(num == "ArrowRight"){
    num = currentpage+1
  }
  if(isNaN(num) || num > pages.length || num == 0){
  alert("er du lidt dum, du kan kun klikke tal som har en side")
    return
  }
  select("#page" + currentpage).removeClass("visible")
  currentpage = num
  select("#page" + currentpage).addClass("visible")
}

function keyPressed(){
  shiftpage(key)
}