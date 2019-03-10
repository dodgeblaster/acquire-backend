const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const chooseLetter = () => letters[Math.floor(Math.random() * letters.length)]

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const chooseNumber = () => numbers[Math.floor(Math.random() * numbers.length)]

const chooseTile = chosenTiles => {
    const x = chooseNumber() + chooseLetter()
    if (chosenTiles[x]) {
        return chooseTile(chosenTiles)
    }

    return x
}

module.exports = chooseTile
