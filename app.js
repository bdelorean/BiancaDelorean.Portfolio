let design = document.getElementById("design");
let text = document.getElementById("text");
let btn = document.getElementById('navToggleBtn')
let nav = document.querySelector('.nav-main')
let navLinks = document.getElementById('navLinks')
console.log(btn);

window.addEventListener("mousemove", function (e) {
  if (e.clientX >= 500) {
    design.classList.add("hide_div");
  }
  if (e.clientX >= 700) {
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.width = '63%';
  }
});

btn.addEventListener('click' , () => {
  nav.classList.add('active');
})
