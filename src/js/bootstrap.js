const toggle = document.getElementById('nightModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('night-mode');
});

const lines = document.querySelectorAll(".line");
const target = document.querySelector(".target");
window.addEventListener("mousemove", function (dets) {
  let x = dets.clientX;
  let y = dets.clientY;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  lines.forEach((line) => {
    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
  });
});