const favoriteSongs = require("./script");

//1. favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) should return ["Sync or Swim", "Earbud Blues"].
//2. favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) should return ["Clickwheel Love", "99 Downloads"].
//3. favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) should return ["Song B", "Song C"].

test("favoriteSongs 1", () => {
  expect(
    favoriteSongs([
      { title: "Sync or Swim", plays: 3 },
      { title: "Byte Me", plays: 1 },
      { title: "Earbud Blues", plays: 2 },
    ])
  ).toEqual(["Sync or Swim", "Earbud Blues"]);
});

test("favoriteSongs 2", () => {
  expect(
    favoriteSongs([
      { title: "Skip Track", plays: 98 },
      { title: "99 Downloads", plays: 99 },
      { title: "Clickwheel Love", plays: 100 },
    ])
  ).toEqual(["Clickwheel Love", "99 Downloads"]);
});

test("favoriteSongs 3", () => {
  expect(
    favoriteSongs([
      { title: "Song A", plays: 42 },
      { title: "Song B", plays: 99 },
      { title: "Song C", plays: 75 },
    ])
  ).toEqual(["Song B", "Song C"]);
});
