import { animate, createTimer, splitText, stagger, svg, utils } from "animejs";

const {chars} = splitText(".txt", {
  chars: { wrap: "clip" }
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


const [$time, $count] = document.querySelectorAll('.value');

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.innerHTML = self.currentTime,

});


//---------------------------------------------------------//

const footprint = document.querySelector('.footprint');
const path = document.querySelector('.motionPath');

// Copie le path pour la trace
footprint.setAttribute('d', path.getAttribute('d'));

// Longueur totale du chemin
const totalLength = footprint.getTotalLength();

// Prépare le path pour l’animation (tracé invisible au départ)
footprint.style.strokeDasharray = totalLength;
footprint.style.strokeDashoffset = totalLength;

// Anime le tracé avec Anime.js
animate({
  targets: footprint,
  strokeDashoffset: [totalLength, 0],      // trace le chemin progressivement
  stroke: ['#FF0000', '#00FF00'],         // change de couleur pendant la trace
  duration: 4000,                          // durée en ms
  easing: 'linear',
  loop: true
});





