const chooseTile = require('../actions/chooseTile')

describe('chooseTile', () => {
    test('will return a tile', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }

        const alreadyChosen = {}
        const x = chooseTile(state)
        expect(x.players.one.tiles.length).toBe(3)
    })

    test('will update active player', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                },
                two: {
                    tiles: []
                }
            },
            activePlayer: 'one'
        }
        const x = chooseTile(state)
        expect(x.activePlayer).toBe('two')
    })

    test('will update active player to first when last person finishes', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                },
                two: {
                    tiles: []
                }
            },
            activePlayer: 'two'
        }
        const x = chooseTile(state)
        expect(x.activePlayer).toBe('one')
    })
})
