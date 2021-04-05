let boxList = document.querySelectorAll("div.item");

boxList.forEach((b) => { 
    b.addEventListener("click", move);
});

function move() {
  boxList.forEach((b) => { 
    b.classList.toggle("up");
    b.classList.toggle("down");
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
