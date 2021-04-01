let position = 1;
function move() {
  let boxes = document.querySelectorAll("div.item");
  
  boxes.forEach((e) => {
    if(position == 1){
      e.classList.toggle("up");
      position *= -1;
    }
    else {
      e.classList.toggle("down");
      position *= -1;
    }
    
    console.log(e.classList);
  });
}

function spin() {
  let matches = document.querySelectorAll("div.item");

  matches.forEach((e) => {
    if (e.classList == "up") {
      e.classList.remove("up");
    }
    else if (e.classList == "down"){
      e.classList.remove("down");
    }
    else {
    e.classList.toggle("spin");
    }
    console.log(e.classList);
  });
}
