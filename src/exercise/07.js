"use client"
// Promise aync await
// http://localhost:3000/isolated/final/07.js

import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init("Promise aync await")

  // 🐶 Créé un Promise `calculNombrePair` qui detecte si la parametre en entrée est un nombre impair
  // utilise modulo pour savoir si un nombre est pair
  // 🤖 if (nombre % 2 == 0)
  function calculNombrePair(number = 1) {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve(`OK`)
      } else {
        reject(`KO`)
      }
    })
  }

  // 🐶 Appelle cette Promise avec les nombres 2 et 3 et gère les cas ok et ko dans la console
  calculNombrePair(2).then(
    (e) => console.log(e),
    (err) => console.error(err)
  )

  calculNombrePair(3).then(
    (e) => console.log(e),
    (err) => console.error(err)
  )

  // 🐶 Appelle cette Promise en asynchrone
  // 🤖 async function
  // 🤖 await calculNombrePair
  // async function fetchAsyncCalculNombrePair(number) {
  //   const result = await calculNombrePair(number)
  //   return `Nombre pair : ${result}`
  // }

  // fetchAsyncCalculNombrePair(2).then(
  //   (e) => console.log(e),
  //   (err) => console.log(err)
  // )

  // fetchAsyncCalculNombrePair(3).then(
  //   (e) => console.log(e),
  //   (err) => console.log(err)
  // )

  async function simulationFetchAsyncCatch(number) {
    let result
    try {
      result = await calculNombrePair(number, true)
      return `Résultat OK : ${result}`
    } catch (error) {
      return `Résultat en erreur : ${error}`
    }
  }

  simulationFetchAsyncCatch(2).then(
    (e) => console.log(e),
    (err) => console.error(err)
  )

  simulationFetchAsyncCatch(3).then(
    (e) => console.log(e),
    (err) => console.error(err)
  )
}
export default () => <App exercice={exercice} />
