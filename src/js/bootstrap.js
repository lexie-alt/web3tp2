const toggle = document.getElementById("nightModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("night-mode");
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

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

//------------------------alerte--------------------------//

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("This is a footprint", "info");
  });
}

//---------------------binaire-----------------------------//

const selectedWords = ["10654", "76534", "78542", "63784"];
const speed = 500;

const container = document.querySelector(".adres");

const spans = selectedWords.map((word) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.marginRight = "10px";
  container.appendChild(span);
  return span;
});

let i = 0;
let anim = true;

function animateWords() {
  if (!anim) return;
  spans.forEach((s) => (s.style.background = ""));
  spans[i].style.background = "currentColor";
  i = (i + 1) % spans.length;
  setTimeout(animateWords, speed);
}

animateWords();

//tooltips

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
