let boxList = document.querySelectorAll("div.item");

boxList.forEach((b) => { 
    b.addEventListener("click", move);
});

function move() {
  let clickedBox = event.currentTarget;
  boxList.forEach((b) => { 
    if (b == clickedBox) {
      if (b.classList.contains("up") == true){
        b.classList.replace("up", "down");
      }
      else if (b.classList.contains("down") == true) {
        b.classList.replace("down", "up");
      }
      else {
        b.classList.add("up");
      }
    }
    b.classList.remove("spin");
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
