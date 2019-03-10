const placeTile = require('../actions/placeTile')

describe('placeTile', () => {
    test('will return BUY_STOCK if no tiles are around it', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }
        const x = placeTile(state, 'A1', 'one')
        expect(x.turnState).toEqual({
            stage: 'BUY_STOCK',
            mergeList: [],
            mergeCompleted: [],
            pendingTile: false
        })
    })

    test('will remove tile from player', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }
        const x = placeTile(state, 'A1', 'one')
        expect(x.players.one.tiles).toEqual(['C6'])
    })
    test('will add tile to takenSpaces', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }
        const x = placeTile(state, 'A1', 'one')
        expect(x.takenSpaces).toEqual([
            {
                tile: 'A1',
                hotel: 'none'
            }
        ])
    })
    test('will add tile to takenSpaces', () => {
        const state = {
            takenSpaces: [],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }
        const x = placeTile(state, 'A1', 'one')
        expect(x.takenSpaces).toEqual([
            {
                tile: 'A1',
                hotel: 'none'
            }
        ])
    })

    test('will return CHOOSE_HOTEL when adding tile next to another', () => {
        const state = {
            takenSpaces: [
                {
                    tile: 'A2',
                    hotel: 'none'
                }
            ],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }
        const x = placeTile(state, 'A1', 'one')
        expect(x.turnState).toEqual({
            stage: 'CHOOSE_HOTEL',
            mergeList: [],
            mergeCompleted: [],
            pendingTile: 'A1'
        })
    })

    test('will return CHOOSE_HOTEL when adding tile next to another', () => {
        const state = {
            takenSpaces: [
                {
                    tile: 'A2',
                    hotel: 'none'
                }
            ],
            players: {
                one: {
                    tiles: ['A1', 'C6']
                }
            },
            activePlayer: 'one'
        }
        const x = placeTile(state, 'A1', 'one')
        expect(x.turnState).toEqual({
            stage: 'CHOOSE_HOTEL',
            mergeList: [],
            mergeCompleted: [],
            pendingTile: 'A1'
        })
    })

    test('will return DEAL_WITH_MERGE when adding tile next to another hotel tile', () => {
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

            takenSpaces: [
                {
                    tile: 'A2',
                    hotel: 'Continental'
                },
                {
                    tile: 'B1',
                    hotel: 'Tower'
                }
            ],
            players: {
                one: {
                    money: 6000,
                    tiles: ['A1', 'C6'],
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
        const x = placeTile(state, 'A1', 'one')
        expect(x.turnState).toEqual({
            stage: 'DEAL_WITH_MERGE',
            mergeList: ['one', 'three'],
            mergeCompleted: [],
            pendingTile: 'A1'
        })
    })
})
