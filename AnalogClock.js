// 매개변수 $container를 가진 함수를 AnalogClock 변수에 할당
const AnalogClock = ($container) => {
  // 필요한 HTML 요소들를 생성
  // 첫 번째 클래스 할당
  for (let i = 0; i < 15; i++) {
    let div = document.createElement("div");
    if (i <= 2) {
      div.classList.add("hand");
    } else div.classList.add("time");
    // ??
    $container.appendChild(div);
  }

  // "hand" 클래스의 두 번째 클래스 할당
  const hand = $container.querySelectorAll(".hand");
  hand[0].classList.add("hour");
  hand[1].classList.add("minute");
  hand[2].classList.add("second");

  // "time" 클래스의 두 번째 클래스 할당
  const time = $container.querySelectorAll(".time");
  for (let i = 0; i < time.length; i++) {
    time[i].classList.add(`time${i + 1}`);
    time[i].innerText = "|";
  }

  // 1초 간격으로 실행될 함수를 정의
  setInterval(function () {
    // 날짜값을 가져와 시침, 분침, 초침의 각도를 계산
    // 시침, 분침, 초침 클래스의 스타일 속성 "--deg"에 계산한 각도를 할당
    let date = new Date();
    let hourDeg =
      (date.getHours() % 12) * 30 +
      (30 * date.getMinutes()) / 60 +
      (0.5 * date.getSeconds()) / 60;
    let minuteDeg = date.getMinutes() * 6 + (6 * date.getSeconds()) / 60;
    let secondDeg = date.getSeconds() * 6;
    hand[0].style.setProperty("--deg", hourDeg);
    hand[1].style.setProperty("--deg", minuteDeg);
    hand[2].style.setProperty("--deg", secondDeg);
  }, 1000);
};

// 모듈 하나 내보내기
export default AnalogClock;
