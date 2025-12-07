import { Chart } from '../../node_modules/chart.js/auto/auto.js';

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
    //responsive: false
    //maintainAspectRatio: false
  }
};

const contexte = document.querySelector('#mon-graphique').getContext("2d");
new Chart(contexte, configurations);
