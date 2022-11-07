//European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

//wrong solution
// let date = new Date(2012, 0, 3);
// const weekDays = [
//   "Monday",
//   "Tuesday",
//   "Thursday",
//   "WednesDay",
//   "Saturday",
//   "Friday",
//   "Sunday",
// ];
// function getLocalDay(localDate){
//    return weekDays[localDate.getDay()]
// }
// alert(getLocalDay(date));

//true solution
let date = new Date(2012, 0, 3);
let localDate = date.getDay();
function getLocalDay(Date) {
  if (Date == 0) {
    Date = 7;
  }
  return Date
}
alert(getLocalDay(localDate));
