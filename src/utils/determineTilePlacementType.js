const determineTilePlacementType = (state, tile) => {
    const number = tile.slice(-1)
    const letter = tile.slice(0, -1)
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    const letterIndex = letters.findIndex(x => x === letter)

    const aboveTile = letters[letterIndex - 1] + number
    const belowTile = letters[letterIndex + 1] + number
    const leftTile = letter + (parseInt(number) - 1)
    const rightTile = letter + (parseInt(number) + 1)

    const involvedTiles = [
        state.takenSpaces.find(x => x.tile === aboveTile) || false,
        state.takenSpaces.find(x => x.tile === belowTile) || false,
        state.takenSpaces.find(x => x.tile === leftTile) || false,
        state.takenSpaces.find(x => x.tile === rightTile) || false
    ].filter(x => x !== false)

    // if not next to anything, return nothing
    // type: PLACE_SINGLE_TILE

    const noTiles = involvedTiles.length === 0
    const haveTiles = involvedTiles.length > 0
    const allTilesAreFree =
        involvedTiles.filter(x => x.hotel !== 'none').length === 0

    const hotelsInvolved = involvedTiles
        .filter(x => x.hotel !== 'none')
        .reduce((acc, x) => {
            if (!acc.find(h => h === x.hotel)) {
                acc.push(x.hotel)
            }
            return acc
        }, [])

    if (noTiles) {
        return {
            type: 'PLACE_SINGLE_TILE',
            hotelsInvolved,
            tilesInvolved: [tile, ...involvedTiles.map(x => x.tile)]
        }
    }

    if (haveTiles && allTilesAreFree) {
        return {
            type: 'START_NEW_HOTEL',
            hotelsInvolved,
            tilesInvolved: [tile, ...involvedTiles.map(x => x.tile)]
        }
    }

    // if next to somthing, and no hotel belongs to it, choose hotel
    // type: START_NEW_HOTEL

    // if next to something and belongs to hotel, update hotel
    // type: ADD_TO_HOTEL
    if (haveTiles && hotelsInvolved.length === 1) {
        return {
            type: 'ADD_TO_HOTEL',
            hotelsInvolved,
            tilesInvolved: [tile, ...involvedTiles.map(x => x.tile)]
        }
    }

    if (haveTiles && hotelsInvolved.length === 2) {
        return {
            type: 'MERGE_TWO_HOTELS',
            hotelsInvolved,
            tilesInvolved: [tile, ...involvedTiles.map(x => x.tile)]
        }
    }

    // if next to 2 hotels, its a merge
    // type: MERGE_TWO_HOTELS

    // if start hotel but no available hotels, or merge and both save, its invalid
    // type: INVALID
}

module.exports = determineTilePlacementType
