function launchFuel(payload) {
    let mass = payload;
    let add = payload / 5;
    let fuel = add;

    while (add > 1) {
        mass += add;
        add = (mass - (mass - add)) / 5;
        fuel += add;
    }

    return Number(fuel.toFixed(1));
}

module.exports = launchFuel;