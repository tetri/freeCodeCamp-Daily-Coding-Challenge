function getWords(paragraph) {
  let words = paragraph.toLowerCase().replace(/[.,!]/g, '').split(' ');
  
  let freq = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  freq = [...words].sort((a, b) => {
    const diff = freq[b] - freq[a];
    if (diff !== 0) return diff;
    return a.localeCompare(b);
  });

  freq = [...new Set(freq)].slice(0,3);
  return freq;
}

module.exports = getWords;