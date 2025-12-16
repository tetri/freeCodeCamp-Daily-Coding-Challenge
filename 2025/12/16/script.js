function hasConsonantCount(text, target) {
    return (text.match(/[^aeiou\s\W\d]/g) || []).length == target;
}

module.exports = hasConsonantCount;
