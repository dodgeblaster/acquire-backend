const buyStock = require('../actions/buyStock')

describe('buyStock', () => {
    test('will reduce hotels available tiles', () => {
        const state = {
            hotels: {
                continental: {
                    name: 'Continental',
                    availableStock: 25,
                    tileSize: 2
                }
            },
            players: {
                one: {
                    money: 6000
                }
            },
            activePlayer: 'one'
        }
        const x = buyStock(state, {
            stock: 'continental',
            number: 1
        })
        expect(x.hotels.continental.availableStock).toBe(24)
    })

    test('will reduce players money', () => {
        const state = {
            hotels: {
                continental: {
                    name: 'Continental',
                    availableStock: 25,
                    tileSize: 2
                }
            },
            players: {
                one: {
                    money: 6000
                }
            },
            activePlayer: 'one'
        }
        const x = buyStock(state, {
            stock: 'continental',
            number: 1
        })
        expect(x.players.one.money).toBe(5600)
    })
})
