"use client"
// Array : Les Méthodes courantes
// http://localhost:3000/alone/exercise/06.js

import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init("Array : Les Méthodes courantes")

  const computers = [
    {
      id: "pc-1",
      name: "MacBook Pro",
      features: [
        "usb-c",
        "screen-15",
        "batterie",
        "keyboard",
        "webcam",
        "ssd-1to",
      ],
    },
    {
      id: "pc-2",
      name: "Lenovo",
      features: ["usb-a", "screen-15", "batterie", "keyboard", "ssd-500go"],
    },
    {
      id: "pc-3",
      name: "MSI",
      features: [
        "usb-a",
        "screen-13",
        "batterie",
        "keyboard",
        "webcam",
        "ssd-500go",
      ],
    },
  ]

  // 🐶 Affiche à l'ecran (displayText) :
  // `Mon ordinateur préferé est le MacBook Pro`
  // 🤖 en passant par la méthode find

  displayText(
    `Mon ordinateur préferé est le ${computers.find((computer) => computer.name === "MacBook Pro").name}`
  )

  // 🐶 Code ce qui permet de savoir s'il il y a au moins un ssd-500go
  // 🤖 en passant par la méthode `some`

  displayText(
    `Y a t-il au moins un pc avec un ssd-500go ? :  ${computers.some((computer) => computer.features.includes("ssd-500go")) ? "oui" : "non"}`
  )

  // 🐶 Code ce qui permet de savoir s'il il y a que des ssd-500go
  // 🤖 en passant par la méthode `every`

  displayText(
    `Tous les pc ont un ssd-500go ? : ${computers.every((computer) => computer.features.includes("ssd-500go")) ? "oui" : "non"}`
  )

  // 🐶 Affiche la liste des ids
  // 🤖 en passant par la méthode `map`
  displayText(`Tous les ids ${computers.map((computer) => computer.id)}`)

  // 🐶 Récuperer la liste des pc avec une webcam
  // 🤖 en passant par la méthode `filter`

  displayText(
    `Les pc avec webcam : ${computers.filter((computer) => computer.features.includes("webcam")).map((computer) => computer.name)}`
  )
}
export default () => <App exercice={exercice} />
