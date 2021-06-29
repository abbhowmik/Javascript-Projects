console.log("This is a Alarm Project");

// through the internet

let submit = document.getElementById("submit");
submit.addEventListener("click", setAlarm);

function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  let alarmDate = new Date(alarm.value);
  console.log(`alarm set for ${alarmDate}`);
  now = new Date();
  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);

  if (timeToAlarm >= 0) {
    setTimeout(() => {
      ringAlarm();
      console.log("ringing....");
    }, timeToAlarm);
  } else {
    console.log("please enter a valid date time");
  }
}

let audio = new Audio("audio.mp3");

function ringAlarm() {
  audio.play();
}

// let date = new Date("2020-12-23 12:23:34");
// console.log(date);
