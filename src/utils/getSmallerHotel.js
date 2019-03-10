module.exports = (state, hotels) => {
    const getHotelFromName = x => state.hotels[x.toLowerCase()]
    const sortByTileSize = (a, b) => a.tileSize - b.tileSize

    return hotels.map(getHotelFromName).sort(sortByTileSize)[0].name
}
