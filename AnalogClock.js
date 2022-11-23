const AnalogClock = ($container) => {
  // do something!
  for (let i = 0; i < 15; i++) {
    let div = document.createElement("div");
    if (i <= 2) {
      div.classList.add("hand");
    } else div.classList.add("time");
    $container.appendChild(div);
  }

  const hand = document.querySelectorAll(".hand");
  hand[0].classList.add("hour");
  hand[1].classList.add("minute");
  hand[2].classList.add("second");

  const time = $container.querySelectorAll(".time");
  for (let i = 0; i < time.length; i++) {
    time[i].classList.add(`time${i + 1}`);
    time[i].innerText = "|";
  }

  setInterval(function () {
    let date = new Date();
    let hourHandDeg =
      (date.getHours() % 12) * 30 +
      (30 * date.getMinutes()) / 60 +
      (0.5 * date.getSeconds()) / 60;
    let minuteHandDeg = date.getMinutes() * 6 + (6 * date.getSeconds()) / 60;
    let secondHandDeg = date.getSeconds() * 6;
    hand[0].style.setProperty("--deg", hourHandDeg);
    hand[1].style.setProperty("--deg", minuteHandDeg);
    hand[2].style.setProperty("--deg", secondHandDeg);
  }, 1000);
};

export default AnalogClock;
