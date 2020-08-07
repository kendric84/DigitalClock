// Get elements from UI
let displayTime = document.getElementsByClassName("time-display");
let timeStyleButtonValue = document.getElementsByClassName("military-time-button");
let displayDate = document.getElementsByClassName("date-display");

// Set variables for all date & time elements
// Find necessary values for displaying date and time in proper format
function setDateTime() {

let currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();
let currentDay = currentDate.getDate();
let currentWeekDayNumber = currentDate.getDay();
let currentMonthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let currentSecondString = currentSecond.toString();
let currentMinuteString = currentMinute.toString();
let currentWeekDayText = "";
let currentMonthText = "";
let AmPm = "";

// Find the day of the week as text
let d = new Array(7);
d[0] = "Sunday";
d[1] = "Monday";
d[2] = "Tuesday";
d[3] = "Wednesday";
d[4] = "Thursday";
d[5] = "Friday";
d[6] = "Saturday";

currentWeekDayText = d[currentWeekDayNumber];

// Find the month value as text
let m = new Array(12);
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

currentMonthText = m[currentMonthNumber];

// Add leading zero if the current second or minute value is only one character
if (currentSecondString.length == 1) {
  currentSecondString = "0" + currentSecondString;
}

if (currentMinuteString.length == 1) {
    currentMinuteString = "0" + currentMinuteString;
  }

// Set the selected time format
if (timeStyleButtonValue[0].value == "Military Time") {

    if (currentHour >= 12) {

        AmPm = " PM"

    } else {

        AmPm = " AM"
    }

    if (currentHour >= 13) {

        currentHour = currentHour -12
    }

} else {
    AmPm = ""
    if (currentHour < 10) {
        currentHour = "0" + currentHour
    }
}

// Update UI elements with correct date and time
displayTime[0].textContent =
  currentHour + ":" + currentMinuteString + ":" + currentSecondString + AmPm;

  displayDate[0].textContent = currentWeekDayText + ", " + currentMonthText + " " + currentDay + ", " + currentYear

}

// When button is pressed, update button text and run setDateTime funciton
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

// Refresh screen every 1 second
setInterval(setDateTime, 1000);
