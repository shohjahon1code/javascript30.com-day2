const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const time = new Date();

  const seconds = time.getSeconds();
  const secDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  const minutes = time.getMinutes();
  const minDeg = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hours = time.getHours();
  const hourDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
