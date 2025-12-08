import { animate, splitText, stagger, utils } from "animejs";

const {chars} = splitText("p", {
  chars: { wrap: "clip" }
});

animate(chars, {
  opacity: [0, 1],
  modifier: utils.round(0),
  delay: stagger(50),
  loop: 100,
});