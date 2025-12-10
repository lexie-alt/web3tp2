import Zdog from "zzz";
import { animate, utils } from "animejs";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true 
});

new Zdog.Hemisphere({
  addTo: illo,
  diameter: 50,
  color: "#0DCAF0",
  backface: "#73BFB8"
});

illo.updateRenderGraph(); 

const rotationAnimation = { y: 0, zoom: 1 };

animate(rotationAnimation, {
  y: () => utils.random(Math.PI * -2, Math.PI * 2, 5),
  zoom: () => utils.random(1, 5, 2),
  duration: () => utils.random(300, 2000, 2),
  loop: true,
  onUpdate: () => {
    illo.rotate.y = rotationAnimation.y;
    illo.zoom = rotationAnimation.zoom;
    illo.updateRenderGraph();
  },
  onLoop: (self) => {
    self.refresh();
  }
});