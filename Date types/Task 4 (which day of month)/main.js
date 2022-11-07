// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:
//my solution
// let date = new Date(2015, 0, 2);

// function getDateAgo(myDate,numberOfDays){
//     const std = (24 * 60 * 60 * 1000) * numberOfDays;
//     const milisecOfDay = myDate.getTime();
//     return new Date(milisecOfDay - std);

// }
// alert( getDateAgo(date, 1).getDate() );
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//javascript.info solution
function getDateAgo(date ,days){
  let copyDate = new Date(date);
  copyDate.setDate(copyDate.getDate() - days);
  return copyDate.getDate()
}
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)