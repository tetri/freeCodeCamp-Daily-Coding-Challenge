function formatDate(dateString) {
  let parts = dateString.split(/(\w+) (\d{1,2}), (\d{3,4})/g);
  let year = parts[3];
  let day = parts[2].padStart(2, "0");
  let month = "";
  switch (parts[1]) {
    case "January":
      month = "01";
      break;
    case "February":
      month = "02";
      break;
    case "March":
      month = "03";
      break;
    case "April":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "June":
      month = "06";
      break;
    case "July":
      month = "07";
      break;
    case "August":
      month = "08";
      break;
    case "September":
      month = "09";
      break;
    case "October":
      month = "10";
      break;
    case "November":
      month = "11";
      break;
    case "December":
      month = "12";
      break;
  }

  return `${year}-${month}-${day}`;
}

module.exports = formatDate;
