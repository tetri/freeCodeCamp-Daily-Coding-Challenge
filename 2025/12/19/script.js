function pairwise(arr, target) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue;
            if (arr[i] + arr[j] == target) sum += i + j;
        }
    return sum / 2;
}

module.exports = pairwise;
