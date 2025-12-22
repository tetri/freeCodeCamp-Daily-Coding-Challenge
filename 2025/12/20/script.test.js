const purgeMostFrequent = require("./script");

//1. purgeMostFrequent([1, 2, 2, 3]) should return [1, 3].
//2. purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) should return ["a", "b", "b", "c", "c", "c"].
//3. purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]) should return ["red", "green", "red", "green"].
//4. purgeMostFrequent([5, 5, 5, 5]) should return [].

test("purgeMostFrequent 1", () => {
    expect(purgeMostFrequent([1, 2, 2, 3])).toStrictEqual([1, 3]);
});
test("purgeMostFrequent 2", () => {
    expect(
        purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"])
    ).toStrictEqual(["a", "b", "b", "c", "c", "c"]);
});
test("purgeMostFrequent 3", () => {
    expect(
        purgeMostFrequent([
            "red",
            "blue",
            "green",
            "red",
            "blue",
            "green",
            "blue",
        ])
    ).toStrictEqual(["red", "green", "red", "green"]);
});
test("purgeMostFrequent 4", () => {
    expect(purgeMostFrequent([5, 5, 5, 5])).toStrictEqual([]);
});
