let position = 1;
function move() {
  var element = document.querySelector("#item1");
  console.log(element.classList);
  if(position == 1){
    element.classList.replace("up", "down");
    position *= -1;
  }
  else{
    element.classList.replace("down", "up");
    position *= -1;
  }
}

function spin() {
  var element = document.querySelector("#item2");
  element.classList.toggle("spin");
  console.log(element.classList);
}
