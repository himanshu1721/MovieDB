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

//return refactored date including name of month.
export const refactorDate = (date: string): string => {
  const month = returnMonth(date.substring(5, 7));
  const newDate = `${month} ${date.substring(8, 10)}, ${date.substring(0, 4)}`;
  return newDate;
};

//Get only the year from YYYY/MM/DD formatted string
export const getYear = (date: string): string => {
  return date.substring(0, 4);
};

//Refactor date from YYYY/MM/DD formatted string
export const returnDateMMDDYYYY = (date: string): string => {
  return `${date.substring(5, 7)}/${date.substring(8, 10)}/${date.substring(
    0,
    4
  )}`;
};

export const convertMinsToHrsMins = (mins: number): string => {
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  const a = h < 10 ? +h : h;
  const b = m < 10 ? "0" + m : m;
  return `${a}h ${b}m`;
};
