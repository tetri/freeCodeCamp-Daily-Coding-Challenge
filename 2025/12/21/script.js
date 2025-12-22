function daylightHours(latitude) {
    const daylight = {
        "-90": 24,
        "-75": 23,
        "-60": 21,
        "-45": 15,
        "-30": 13,
        "-15": 12,
        0: 12,
        15: 11,
        30: 10,
        45: 9,
        60: 6,
        75: 2,
        90: 0,
    };

    const latitudes = Object.keys(daylight)
        .map((i) => parseInt(i))
        .sort((a, b) => a - b);

    let closestLatitude = closest(latitudes, latitude);

    let hour = daylight[closestLatitude];
    return hour;
}

function closest(arr, n) {
    return arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
}

module.exports = daylightHours;
