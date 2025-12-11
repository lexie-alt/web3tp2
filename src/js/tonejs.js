import * as Tone from "tone.js";

const synth = new Tone.Synth().toDestination();

document.querySelector("#play").addEventListener("click", async () => {
  await Tone.start();

  const now = Tone.now();
  synth.triggerAttackRelease("C4", "8n", now + 0.0);
  synth.triggerAttackRelease("D4", "8n", now + 0.25);
  synth.triggerAttackRelease("E4", "8n", now + 0.5);
  synth.triggerAttackRelease("F4", "8n", now + 0.75);
  synth.triggerAttackRelease("G4", "8n", now + 1.0);
  synth.triggerAttackRelease("A4", "8n", now + 1.25);
  synth.triggerAttackRelease("B4", "8n", now + 1.5);
  synth.triggerAttackRelease("C5", "2n", now + 1.75);
});
