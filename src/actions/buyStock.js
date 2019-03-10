const readHotelInformationCard = require('../utils/hotelInformationCard')

module.exports = (state, data) => {
    const stockPrice = readHotelInformationCard(state.hotels[data.stock]).price
    return {
        ...state,
        hotels: {
            ...state.hotels,
            [data.stock]: {
                ...state.hotels[data.stock],
                availableStock:
                    state.hotels[data.stock].availableStock - data.number
            }
        },

        players: {
            ...state.players,
            [state.activePlayer]: {
                ...state.players[state.activePlayer],
                money:
                    state.players[state.activePlayer].money -
                    stockPrice * data.number
            }
        },
        turnState: {
            stage: 'CHOOSE_TILE',
            mergeList: [],
            mergeCompleted: [],
            pendingTile: false
        }
    }
}
