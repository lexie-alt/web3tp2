import { Chart } from '../../node_modules/chart.js/auto/auto.js';

let configurations = {
  type: "line",
  data: {
    labels: [
       "Travaux créatifs",
      "Santé",
      "Service à la clientèle",
      "Curation de contenu",
      "Finances personnelles",
      "Achats" 
    ]
    
  },
  options: {
    // Affichage  options: {
    locale: "fr-CA",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Stagiaires Gen Z — Préférences IA vs intervention humaine"
      }
    },
    scales: {
      x: {
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1
        },
        type: "category",
        title: { display: true, text: "Domaines" }
      },
      y: {
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1
        },
        min: 0,
        max: 100,
        title: { display: true, text: "Pourcentage (%)" },
        ticks: { callback: (v) => v + "%" }
      }
    }
  }
}

const contexte = document.querySelector('#mon-graphique').getContext("2d");
new Chart(contexte, configurations);