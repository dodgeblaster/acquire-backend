module.exports = state => {
    const players = Object.keys(state.players)
    const currentPlayerIndex = players.findIndex(x => x === state.activePlayer)

    return players[currentPlayerIndex + 1] || players[0]
}
