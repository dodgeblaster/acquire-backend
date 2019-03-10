const determineTilePlacementType = require('../utils/determineTilePlacementType')

describe('determineTilePlacementType', () => {
    test('will return PLACE_SINGLE_TILE type when no tiles are around it', () => {
        const state = {
            takenSpaces: []
        }
        const x = determineTilePlacementType(state, 'B3')
        expect(x.type).toBe('PLACE_SINGLE_TILE')
    })

    test('will return START_NEW_HOTEL type when free tiles are around it', () => {
        const state = {
            takenSpaces: [
                {
                    tile: 'A3',
                    hotel: 'none'
                }
            ]
        }
        const x = determineTilePlacementType(state, 'B3')
        expect(x.type).toBe('START_NEW_HOTEL')
    })

    test('will return ADD_TO_HOTEL type when hotel tiles are around it', () => {
        const state = {
            takenSpaces: [
                {
                    tile: 'A3',
                    hotel: 'Continental'
                }
            ]
        }
        const x = determineTilePlacementType(state, 'B3')
        expect(x.type).toBe('ADD_TO_HOTEL')
    })

    test('will return ADD_TO_HOTEL type when hotel and none tiles are around it', () => {
        const state = {
            takenSpaces: [
                {
                    tile: 'A3',
                    hotel: 'Continental'
                },
                {
                    tile: 'B4',
                    hotel: 'none'
                }
            ]
        }
        const x = determineTilePlacementType(state, 'B3')
        expect(x.type).toBe('ADD_TO_HOTEL')
        expect(x.hotelsInvolved).toEqual(['Continental'])
        expect(x.tilesInvolved).toEqual(['B3', 'A3', 'B4'])
    })

    test('will return MERGE_TWO_HOTELS type when 2 different hotel tiles are around it', () => {
        const state = {
            takenSpaces: [
                {
                    tile: 'A3',
                    hotel: 'Continental'
                },
                {
                    tile: 'B4',
                    hotel: 'Tower'
                }
            ]
        }
        const x = determineTilePlacementType(state, 'B3')
        expect(x.type).toBe('MERGE_TWO_HOTELS')
        expect(x.hotelsInvolved).toEqual(['Continental', 'Tower'])
        expect(x.tilesInvolved).toEqual(['B3', 'A3', 'B4'])
    })
})
