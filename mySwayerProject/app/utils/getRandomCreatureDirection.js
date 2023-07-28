import { CREATURE_DIRECTIONS } from '../constants/creature.js'

const directionsArray = Object.values(CREATURE_DIRECTIONS)

export default function getRandomCreatureDirection() {
    const randomIndex = Math.floor(Math.random() * directionsArray.length)
    return directionsArray[randomIndex]
}
