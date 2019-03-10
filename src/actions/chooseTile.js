const drawNewTile = require('../utils/drawNewTile')
const getNextPlayer = require('../utils/getNextPlayer')

module.exports = state => {
    return {
        ...state,
        players: {
            ...state.players,
            [state.activePlayer]: {
                ...state.players[state.activePlayer],
                tiles: [
                    ...state.players[state.activePlayer].tiles,
                    drawNewTile(state.takenSpaces)
                ]
            }
        },
        activePlayer: getNextPlayer(state),
        turnState: {
            stage: 'PLACING_TILE',
            mergeList: [],
            mergeCompleted: [],
            pendingTile: false
        }
    }
}
