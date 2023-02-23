// 모듈 가져오기
import AnalogClock from "./AnalogClock.js";

// "analog-clock" 클래스를 가진 모든 요소에 대해 AnalogClock 함수를 호출
// AnalogClock의 매개변수인 $container에는 document.querySelectorAll(".analog-clock")가 전달
document.querySelectorAll(".analog-clock").forEach(AnalogClock);
