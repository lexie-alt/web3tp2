import { VFX } from "vfx-js";

const vfx = new VFX();

const img = document.querySelector("img");

img.onload = () => {
  vfx.add(img, {
    shader: "rgbShift",
    amount: 0.02,
  });
};

if (img.complete) img.onload();

