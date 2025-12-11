import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte", // id du div
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [3.394228, -75.149017], // antartique
  zoom: 1, // Plus c'est bas, plus c'est haut
  attributionControl: false,
});
