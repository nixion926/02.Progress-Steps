let progress = document.querySelector("#progress");
let circles = document.querySelectorAll(".circle");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let activeclass = 1;
next.addEventListener("click", () => {
  activeclass++;
  if (activeclass > circles.length) {
    activeclass = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  activeclass--;
  if (activeclass < 1) {
    activeclass = 1;
  }
  update();
});
function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeclass) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  let actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    if(activeclass ===1){
        prev.disabled = true;
    }else if( activeclass === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
