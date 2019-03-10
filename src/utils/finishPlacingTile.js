module.exports = (state, tile) => {
    return {
        ...state,
        players: {
            ...state.players,
            [state.activePlayer]: {
                ...state.players[state.activePlayer],
                tiles: state.players[state.activePlayer].tiles.filter(
                    x => x !== tile
                )
            }
        },
        takenSpaces: [
            ...state.takenSpaces,
            {
                tile: tile,
                hotel: 'none'
            }
        ]
    }
}
