function generateSnowflake(crystals) {
    let lines = crystals.split("\n");
    let reversed = [];
    for (let line of lines)
        reversed.push(line + line.split("").reverse().join(""));
    return reversed.join("\n");
}

module.exports = generateSnowflake;
