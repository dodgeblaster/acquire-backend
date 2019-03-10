module.exports = (state, hotel) => {
    return Object.keys(state.players).filter(k => {
        return (
            state.players[k].stocks.filter(x => x === hotel).length > 0 || false
        )
    })
}
