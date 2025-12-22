function buyItems(funds, items) {
    let cash = getValueInUSD(funds[0], funds[1]);
    console.log(cash);

    let totalItems = 0;

    for (let i of items) {
        let value = getValueInUSD(i[0], i[1]);
        console.log(value);

        cash -= value;
        if (cash >= 0) totalItems++;
        else break;
    }

    if (totalItems == items.length) return "Buy them all!";
    return `Buy the first ${totalItems} items.`;
}

function getValueInUSD(total, currency) {
    if (currency == "USD") return total;

    switch (currency) {
        case "EUR":
            return total * 1.1;
        case "GBP":
            return total * 1.25;
        case "JPY":
            return total * 0.007;
        case "CAD":
            return total * 0.75;
    }
}

module.exports = buyItems;
