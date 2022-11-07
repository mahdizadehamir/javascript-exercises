// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

function getDateAgo(myDate,numberOfDays){
    const std = (24 * 60 * 60 * 1000) * numberOfDays;
    const milisecOfDay = myDate.getTime();
    return new Date(milisecOfDay - std);
}
alert( getDateAgo(date, 1) );