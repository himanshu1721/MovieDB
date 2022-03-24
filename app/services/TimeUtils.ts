const returnMonth = (month: string): string => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "July";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "nil";
  }
};

export const refactorDate = (date: string): string => {
  const month = returnMonth(date.substring(5, 7));
  const newDate = `${month} ${date.substring(8, 10)}, ${date.substring(0, 4)}`;
  return newDate;
};
