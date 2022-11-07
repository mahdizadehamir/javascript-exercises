//Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let date = new Date(2012, 0, 3); 
const weekdays = ['su','MO',"Tu",'we','th','fr','sa'];
function getWeekDay(dati){
   const dayNumber = dati.getDay() ;
   return weekdays[dayNumber];
}
alert(getWeekDay(date))