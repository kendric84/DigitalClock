let displayTime = document.getElementById("time-display");
let displayDate = document.getElementById("date-display");
const MILITARY_TIME = "Military Time"
const STANDARD_TIME = "12hr Time"

const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", function (e) {
  toggleButton.value =
    toggleButton.value == STANDARD_TIME ? MILITARY_TIME : STANDARD_TIME;
  setDateTime();
});

function setDateTime() {
  const currentDate = new Date();
  let currentHour = currentDate.getHours();
  let amPm = "";

  let d = new Array(7);
  d[0] = "Sunday";
  d[1] = "Monday";
  d[2] = "Tuesday";
  d[3] = "Wednesday";
  d[4] = "Thursday";
  d[5] = "Friday";
  d[6] = "Saturday";

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

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  if (toggleButton.value == STANDARD_TIME) {
    amPm = currentHour >= 12 ? "PM" : "AM";
    currentHour = currentHour >= 13 ? currentHour - 12 : currentHour;
  } else {
    amPm = "";
    currentHour = formatTime(currentHour);
  }

  displayTime.textContent = 
  `${currentHour}:${formatTime(currentDate.getMinutes())}:
  ${formatTime(currentDate.getSeconds())} 
  ${amPm}`;

  displayDate.textContent = 
  `${d[currentDate.getDay()]}, 
  ${m[currentDate.getMonth()]} 
  ${currentDate.getDate()}, 
  ${currentDate.getFullYear()}`;
}

setDateTime();

setInterval(setDateTime, 1000);
