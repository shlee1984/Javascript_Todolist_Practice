const form = document.querySelector(".js-form"),
  JJAMPPONG = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const UL = "CU", // 두번째 실행코드에서 가지고오는 값
  SHOWING_CN = "showing";

function saveName(Photato) {
  // 여섯번째 실행코드
  localStorage.setItem(UL, Photato); // UL값을 PHOTATO로 지정
}

function handleSubmit(cake) {
  // 네번째 실행코드
  cake.preventDefault(); // 기본설정값 무효화
  const CV = JJAMPPONG.value; // CV 값은 input의 value 값이라는 건가?
  paintGreeting(CV); // 다섯번째 실행코드
  saveName(CV);
}

function askForName() {
  form.classList.add(SHOWING_CN); //세번째 코드 실행되며 input 값에 SHOWING_CN의 값을 입력
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(Photato) {
  // 다섯번째 실행코드
  form.classList.remove(SHOWING_CN); // FORM의 SHOWUNG_CN 값 지움
  greeting.classList.add(SHOWING_CN); // 그아래 GREETING에 SHOWING값 추가
  greeting.innerText = `Hello ${Photato}`; // GREETING INNER TEXT값 PHOTATO로 지정
}

function loadName() {
  const CU = localStorage.getItem(UL); //두번째 실행코드
  if (CU === null) {
    askForName(); //세번째 실행코드
    // she is not
  } else {
    paintGreeting(CU);

    //she is
  }
}

function init() {
  loadName(); // 첫번째 실행코드
}

init();
