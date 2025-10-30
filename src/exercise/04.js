"use client"
/* eslint-disable no-unused-vars */
// Fonctions fléchées
// http://localhost:3000/alone/exercise/04.js

import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init("Fonctions fléchées")

  // 🐶 E = mc² : Créé une fonction fléchée `calculEnergie` avec les propietes `masse` et `celerite` (vitesse de la lumière)
  // `celerite` aura la valeur par défaut 300000000
  //  🤖 utilise `Math.pow(celerite, 2)` pour le calcul du carré
  //  🤖 utilise `round` pour arrondir

  const calculEnergie = (masse, celerite = 299_792_458) => {
    const result = Math.round(masse * Math.pow(celerite, 2))

    return displayText(
      `L'énergie d'une masse de ${masse} kg. est de ${result} joules.`
    )
  }

  // 🐶 appelle la fonction calculEnergie avec 5 grammes (0.005 kg)
  // et affiche le résultat à l'ecran avec displayText
  calculEnergie(0.005)
}
export default () => <App exercice={exercice} />
