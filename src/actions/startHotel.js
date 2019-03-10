const determineTilePlacementType = require('../utils/determineTilePlacementType')
const finishPlacingTile = require('../utils/finishPlacingTile')

module.exports = (state, hotel) => {
    const availableHotels = Object.keys(state.hotels)
        .filter(k => !state.hotels[k].onBoard)
        .map(k => state.hotels[k].name)
    if (!availableHotels.find(x => x === hotel)) {
        // throw error
    }

    const pendingTileData = determineTilePlacementType(
        state,
        state.turnState.pendingTile
    )

    const newTilesPlayed = [
        ...state.takenSpaces.filter(x =>
            pendingTileData.tilesInvolved.find(t => t === x.tile)
        ),
        ...pendingTileData.tilesInvolved.map(x => ({
            tile: x,
            hotel
        }))
    ]

    const stateWithNewTiles = {
        ...state,
        takenSpaces: newTilesPlayed
    }

    const newState = finishPlacingTile(
        stateWithNewTiles,
        state.turnState.pendingTile
    )

    return {
        ...newState,
        turnState: {
            stage: 'BUY_STOCK',
            mergeList: [],
            mergeCompleted: [],
            pendingTile: false
        }
    }
}
