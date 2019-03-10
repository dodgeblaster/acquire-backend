const getPlayersWithHotelsCards = require('../utils/getPlayersWithHotelsCards')

describe('getPlayersWithHotelsCards', () => {
    test('will return players with hotels cards', () => {
        const state = {
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
            players: {
                one: {
                    money: 6000,
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
            activePlayer: 'one'
        }
        const x = getPlayersWithHotelsCards(state, 'Continental')
        expect(x).toEqual(['one', 'three'])
    })
})
