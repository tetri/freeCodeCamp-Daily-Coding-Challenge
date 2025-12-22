function purgeMostFrequent(arr) {
    let freq = {};
    let max = 0;
    let mostFrequent = null;

    for (let i of arr) {
        freq[i] = (freq[i] || 0) + 1;

        if (freq[i] > max) {
            max = freq[i];
            mostFrequent = i;
        }
    }

    return arr.filter((i) => i !== mostFrequent);
}

module.exports = purgeMostFrequent;
