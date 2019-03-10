const priceMap = {
    '1': { price: 200, majority: 2000, minority: 1000 },
    '2': { price: 300, majority: 3000, minority: 1500 },
    '3': { price: 400, majority: 4000, minority: 2000 },
    '4': { price: 500, majority: 5000, minority: 2500 },
    '5': { price: 600, majority: 6000, minority: 3000 },
    '6': { price: 700, majority: 7000, minority: 3500 },
    '7': { price: 800, majority: 8000, minority: 4000 },
    '8': { price: 900, majority: 9000, minority: 4500 },
    '9': { price: 1000, majority: 10000, minority: 5000 },
    '10': { price: 1100, majority: 11000, minority: 5500 },
    '11': { price: 1200, majority: 12000, minority: 6000 }
}

const getRow = (size, offset) => {
    if (size >= 41) {
        return priceMap[(9 + offset).toString()]
    }
    if (size >= 31) {
        return priceMap[(8 + offset).toString()]
    }
    if (size >= 21) {
        return priceMap[(7 + offset).toString()]
    }
    if (size >= 11) {
        return priceMap[(6 + offset).toString()]
    }
    if (size >= 6) {
        return priceMap[(5 + offset).toString()]
    }
    if (size >= 5) {
        return priceMap[(4 + offset).toString()]
    }
    if (size >= 4) {
        return priceMap[(3 + offset).toString()]
    }
    if (size >= 3) {
        return priceMap[(2 + offset).toString()]
    }

    return priceMap[(1 + offset).toString()]
}

module.exports = hotel => {
    const offsetMap = {
        Continental: 2,
        Tower: 2,
        American: 1,
        Festival: 1,
        Imperial: 1,
        Worldwide: 0,
        Sackson: 0
    }

    const x = getRow(hotel.tileSize, offsetMap[hotel.name])
    return x
}
