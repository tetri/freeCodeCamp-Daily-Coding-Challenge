function imageSearch(images, term) {
  let result = [];
  let _term = term.toLowerCase();
  for (let i in images) {
    let _image = images[i].toLowerCase();
    if (_image.includes(_term)) result.push(images[i]);
  }
  return result;
}

module.exports = imageSearch;
