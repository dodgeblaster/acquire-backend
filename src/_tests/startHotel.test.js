const startHotel = require('../actions/startHotel')

const mockState = {
    hotels: {
        continental: {
            name: 'Continental',
            availableStock: 21,
            tileSize: 2
        },
        tower: {
            name: 'Tower',
            availableStock: 21,
            tileSize: 3
        }
    },
    takenSpaces: [
        {
            tile: 'B2',
            hotel: 'none'
        }
    ],
    players: {
        one: {
            money: 6000,
            tiles: ['C4', 'B3'],
            stocks: ['Continental', 'Continental', 'Continental']
        },
        two: {
            money: 6000,
            stocks: ['Tower', 'Sackson', 'Sackson']
        },
        three: {
            money: 6000,
            stocks: ['Continental', 'Continental']
        }
    },
    activePlayer: 'one',
    turnState: {
        stage: 'CHOOSE_HOTEL',
        mergeList: [],
        mergeCompleted: [],
        pendingTile: 'B3'
    }
}

describe('startHotel', () => {
    test('will return BUY _STOCK turnstate', () => {
        const state = mockState
        const x = startHotel(state, 'Continental')
        expect(x.turnState.stage).toBe('BUY_STOCK')
        expect(x.turnState.pendingTile).toBe(false)
    })
})
