import {
  animate,
  createTimer,
  createAnimatable,
  splitText,
  stagger,
  svg,
  utils,
} from "animejs";

const { chars } = splitText(".txt", {
  chars: { wrap: "clip" },
});

animate(chars, {
  opacity: [0, 1],
  modifier: utils.round(0),
  delay: stagger(100),
  loop: 100,
});

//-----------------------------no dossier------------------------------//

const numElements = document.querySelectorAll(".num");

numElements.forEach((element) => {
  animate(element, {
    textContent: () => utils.random(0, 9999, 0),
    modifier: utils.round(0),
    ease: "in(1)",
    delay: () => utils.random(100, 2000, 0),
    loop: true,
    loopDelay: 500,
  });
});

//------------------timer--------------------------//

const [$time, $count] = document.querySelectorAll(".value");

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: (self) => ($time.innerHTML = self.currentTime),
});

//---------------------------------------------------------//

const drawable = svg.createDrawable(".footprint");
animate(drawable, {
  draw: ["0 0", "0 1", "1 1"],
  loop: true,
  alternate: true,
  duration: 3000,
  loopDelay: 500,
});

//----------------------knob-------------------------//

const $demos = document.querySelector("#docs-demos");
const [$fleche] = utils.$(".fleche"); // ← maintenant c’est .aiguille

let bounds = $fleche.getBoundingClientRect();
const refreshBounds = () => (bounds = $fleche.getBoundingClientRect());

const aig = createAnimatable($fleche, {
  rotate: { unit: "rad" },
  duration: 150,
});

const { PI } = Math;
let lastAngle = 0;
let angle = PI / 2;

function onMouseMove(e) {
  const { width, height, left, top } = bounds;
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;

  const currentAngle = Math.atan2(y, x);
  const diff = currentAngle - lastAngle;

  angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;

  lastAngle = currentAngle;
  aig.rotate(angle);
}

window.addEventListener("mousemove", onMouseMove);
//-----horloge animation---//

animate(".seconde", {
  rotate: "360deg",
  duration: 1000,
  loop: true,
  ease: "linear",
});

animate(".aiguille", {
  rotate: "360deg",
  duration: 3000,
  loop: true,
  ease: "linear",
});
