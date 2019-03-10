const getSmallerHotel = require('../utils/getSmallerHotel')

describe('getSmallerHotel', () => {
    test('will return smaller hotel', () => {
        const state = {
            hotels: {
                continental: {
                    name: 'Continental',
                    availableStock: 25,
                    tileSize: 2
                },
                tower: {
                    name: 'Tower',
                    availableStock: 25,
                    tileSize: 3
                }
            },
            players: {
                one: {
                    money: 6000
                }
            },
            activePlayer: 'one'
        }
        const x = getSmallerHotel(state, ['Continental', 'Tower'])
        expect(x).toBe('Continental')
    })
})
