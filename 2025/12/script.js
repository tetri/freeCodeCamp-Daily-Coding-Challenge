function emailChainCount(subject) {
  return (subject.match(/re:|fw:|fwd:/gi) || []).length;
}

module.exports = emailChainCount;