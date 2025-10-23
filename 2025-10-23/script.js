function favoriteSongs(playlist) {
  const ordered = [...playlist].sort((a, b) => b.plays - a.plays);
  const first = ordered[0]?.title;
  const second = ordered[1]?.title;

  return [first, second];
}

module.exports = favoriteSongs;
