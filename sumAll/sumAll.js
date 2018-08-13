const sumAll = function (a, b) {
    if (typeof (a) != "number" || typeof (b) != "number") {
        return "ERROR"
    }
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    let i = [a, b]
    i = i.sort(function (a, b) { return a - b })
    let result = 0
    for (i[0]; i[0] <= i[1]; i[0]++) {
        result += i[0]
    }
    return result
}

module.exports = sumAll
