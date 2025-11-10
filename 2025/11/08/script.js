function canPost(message) {
  if (message.length > 80) return "invalid post";
  if (message.length > 40) return "long post";
  return "short post";
}

module.exports = canPost;
