import "./styles.css";

const endDate = new Date("April 6, 2023, 00:00");
const daysEl = document.querySelector(".day-value");
const hoursEl = document.querySelector(".hour-value");
const minEl = document.querySelector(".min-value");
const secEl = document.querySelector(".sec-value");
const countdownGenerator = () => {
  const currentDate = new Date();
  const timeUntilNewYear = endDate - currentDate;

  const totalSeconds = Math.floor(timeUntilNewYear / 1000);
  const mins = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const secs = Math.floor(totalSeconds) % 60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = mins;
  secEl.innerHTML = secs;
};

setInterval(countdownGenerator, 1000);
