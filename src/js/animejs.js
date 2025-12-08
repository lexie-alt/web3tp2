import { createAnimatable, animate, splitText, stagger, svg, utils } from "animejs";

const {chars} = splitText(".txt p", {
  chars: { wrap: "clip" }
});

animate(chars, {
  opacity: [0, 1],
  modifier: utils.round(0),
  delay: stagger(100),
  loop: 100,
});

//-----------------------------------------------------------//

const numElements = document.querySelectorAll(".num");

numElements.forEach((element) => {
  animate(element, {
    textContent: () => utils.random(0, 9999, 0),
    modifier: utils.round(0),
    ease: "in(1)",
    delay: () => utils.random(100, 2000, 0),
    loop: true,
    loopDelay: 10,
    onLoop: (self) => {
      self.refresh();
    }
  });
});


const drawable = svg.createDrawable(".footprint");
animate(drawable, {
  draw: ["0 0", "0 1", "1 1"],
  loop: 100
});




