function sort(emails) {
  emails.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    let a_domain = a.split("@")[1];
    let b_domain = b.split("@")[1];
    if (a_domain < b_domain) {
      return -1;
    }
    if (a_domain > b_domain) {
      return 1;
    }

    let a_user = a.split("@")[0];
    let b_user = b.split("@")[0];
    if (a_user < b_user) {
      return -1;
    }
    if (a_user > b_user) {
      return 1;
    }

    return 0;
  });

  return emails;
}

module.exports = sort;
