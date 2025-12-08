import { Chart } from 'chart.js';

let configurations = {
  type: "bar",
  data: {
    labels: ["2020", "2030", "2040", "2050", "2060", "2070"],
    datasets: [
      {
        label: "Frozen Yogourto Population Evolution",
        data: [153, 126, 130, 109, 92, 76]
      }
    ]
  },
  options: {
    }
};

const contexte = document.querySelector('#mon-graphique').getContext("2d");
new Chart(contexte, configurations);

//-----------------------------------------------------------//
function rythmeCoeur(x) {
  const cycle = (x % 100);
  const noise = (Math.random() - 0.5) * 0.5;
  const spikes = Math.sin(cycle / 5) * (1 + Math.random() * 2);
  const randomSpike = (Math.random() < 0.05) ? Math.random() * 5 : 0;

  return spikes + noise + randomSpike;
} //fonction qui fait varier les données du diagramme

let x = 0;
let data = [];

for (let i = 0; i < 100; i++) {
  data.push({ x: i, y: 0 });
}

let configs = {
  type: "line",
  data: {
    datasets: [{
      label: "Rythme cardiaque",
      data: data,
      tension: 0.3, //courbure de la ligne
      borderWidth: 2,
      pointRadius: 0 //affichage des points
    }]
  },
  options: {
    animation: false,
    scales: {
      x: { type: "linear", min: 0, max: 100 },
      y: { min: -10, max: 10 }
    }
  }
};

const ctx = document.querySelector('#heart-rate').getContext("2d");
const chart = new Chart(ctx, configs);

setInterval(() => {
  x++;

  let index = x % 100;
  data[index] = { x: index, y: rythmeCoeur(x) };

  chart.update();
}, 100); //varie temps