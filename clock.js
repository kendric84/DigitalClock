var displayTime = document.getElementsByClassName("timeDisplay");
var timeStyleButtonValue = document.getElementsByClassName("MilitaryTimeButton");
var displayDate = document.getElementsByClassName("dateDisplay");
function setDateTime() {

var currentDate = new Date();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();
var currentDay = currentDate.getDate();
var currentWeekDayNumber = currentDate.getDay();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var currentSecondString = currentSecond.toString();
var currentMinuteString = currentMinute.toString();
var AmPm = ""

var d = new Array(7);
d[0] = "Sunday";
d[1] = "Monday";
d[2] = "Tuesday";
d[3] = "Wednesday";
d[4] = "Thursday";
d[5] = "Friday";
d[6] = "Saturday";

var currentWeekDayText = d[currentWeekDayNumber];

var m = new Array(12);
m[0] = "January";
m[1] = "February";
m[2] = "March";
m[3] = "April";
m[4] = "May";
m[5] = "June";
m[6] = "July";
m[7] = "August";
m[8] = "September";
m[9] = "October";
m[10] = "November";
m[11] = "December";

var currentMonthText = m[currentMonth];

if (currentSecondString.length == 1) {
  currentSecondString = "0" + currentSecondString;
}

if (currentMinuteString.length == 1) {
    currentMinuteString = "0" + currentMinuteString;
  }

if (timeStyleButtonValue[0].value == "Military Time") {

    if (currentHour >= 13) {

        currentHour = currentHour -12
        AmPm = " PM"
    } else {
        AmPm = " AM"
    }

} else {
    AmPm = ""
    if (currentHour < 10) {
        currentHour = "0" + currentHour
    }
}

displayTime[0].textContent =
  currentHour + ":" + currentMinuteString + ":" + currentSecondString + AmPm;

  displayDate[0].textContent = currentWeekDayText + ", " + currentMonthText + ", " + currentDay + ", " + currentYear

}

function changeTimeFormat() {

    if (timeStyleButtonValue[0].value == "12hr Time") {
        timeStyleButtonValue[0].value = "Military Time"
        setDateTime();

    } else {
        timeStyleButtonValue[0].value = "12hr Time"
        setDateTime();
    }

}

setDateTime();

setInterval(setDateTime, 1000);
