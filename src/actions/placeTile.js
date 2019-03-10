const determineTilePlacementType = require('../utils/determineTilePlacementType')
const finishPlacingTile = require('../utils/finishPlacingTile')
const getSmallerHotel = require('../utils/getSmallerHotel')
const getPlayersWithHotelsCards = require('../utils/getPlayersWithHotelsCards')

module.exports = (state, tile) => {
    const placement = determineTilePlacementType(state, tile)

    if (placement.type === 'START_NEW_HOTEL') {
        return {
            ...state,
            turnState: {
                stage: 'CHOOSE_HOTEL',
                mergeList: [],
                mergeCompleted: [],
                pendingTile: tile
            }
        }
    }

    if (placement.type === 'MERGE_TWO_HOTELS') {
        const hotelMerging = getSmallerHotel(state, placement.hotelsInvolved)
        const mergeList = getPlayersWithHotelsCards(state, hotelMerging)
        return {
            ...state,
            turnState: {
                stage: 'DEAL_WITH_MERGE',
                mergeList: mergeList,
                mergeCompleted: [],
                pendingTile: tile
            }
        }
    }

    const newState = finishPlacingTile(state, tile)

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
