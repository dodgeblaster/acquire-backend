module.exports = () => ({
    hotels: {
        contintental: {
            name: 'Continental',
            availableStock: 25,
            tileSize: 0,
            onBoard: false
        }
    },
    takenSpaces: {},
    players: {
        one: {
            name: 'One',
            money: 1500,
            tiles: [],
            stocks: []
        },
        two: {
            name: 'Two',
            money: 1500,
            tiles: [],
            stocks: []
        },
        three: {
            name: 'Three',
            money: 1500,
            tiles: [],
            stocks: []
        },
        four: {
            name: 'Four',
            money: 1500,
            tiles: [],
            stocks: []
        }
    },
    activePlayer: 'one',
    turnState: {
        stage: 'PLACING_TILE',
        mergeList: [],
        mergeCompleted: [],
        pendingTile: false
    }
})
