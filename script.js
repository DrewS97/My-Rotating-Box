let boxList = document.querySelectorAll("div.item");

boxList.forEach((b) => { 
    b.addEventListener("click", move);
});

function move() {
  let clickedBox = event.currentTarget;
  boxList.forEach((b) => { 
    if (b == clickedBox) {
      let position = 1;
      if (position == 1){
        b.classList.toggle("up");
        position *= -1;
      }
      else {
        b.classList.toggle("down");
        position *= -1;
      }
    }
    console.log(b.classList);
  });
}

function spin() {
  boxList.forEach((b) => { 
    b.classList.remove("up", "down");
    b.classList.toggle("spin");
    console.log(b.classList);
  });
}
