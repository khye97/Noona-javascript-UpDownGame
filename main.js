// 1 ~ 100 사이의 랜덤 숫자 생성 함수
let randomNum = 0;
function makeRandomNum (){
  randomNum = Math.floor((Math.random() * 100) + 1);
  return randomNum;
}
console.log("정답 :", makeRandomNum());


let userNum = 0; // 유저가 선택한 숫자 변수
let userNumList = []; // 유저가 입력한 값을 담을 배열
let userInput = document.getElementById('inputNum');
let count = 3; // 버튼 횟수를 카운트 할 변수
let countArea = document.querySelector('.count'); // html 유저 카운트 횟수
let goBtn = document.querySelector('.go-btn');  // go-btn
let resetBtn = document.querySelector('.reset-btn'); // rest-btn
let resultText = document.querySelector('.inner-text'); // 결과창 텍스트
let resultBtn = document.querySelector('.result-btn'); // 정답 확인 버튼
//let gameOver = false;


function play (){
  userNum = userInput.value;
  console.log(userNum);

  if (userNum < 0 || userNum > 100){
    resultText.innerHTML = "1~100 사이의 값을 입력하세요";
    return;
  }

  if (userNumList.includes(userNum)){
    resultText.innerHTML = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요";
    return;
  }
  
  userNumList.push(userNum);
  console.log(userNumList);

  count -= 1;
  countArea.innerHTML = count;

  if (userNum == randomNum){
    resultText.innerHTML = "정답!";
    goBtn.disabled = true;
  } else if (userNum < randomNum){
    resultText.innerHTML = "Up!";
  } else if (userNum > randomNum){
    resultText.innerHTML = "Down!";
  }

  if (count == 0){
    resultText.innerHTML = `너 탈락 | 정답 : ${randomNum}`;
    goBtn.disabled = true;
  }
}

goBtn.addEventListener('click', function(){
  play();
});

// 인풋 창 클릭시 숫자 지워짐
userInput.addEventListener('focus', function(){
  userInput.value = "";
});


// 리셋
function reset (){
  console.log("정답 :", makeRandomNum());
  count = 3;
  countArea.innerHTML = count;
  userNumList = [];
  resultText.innerHTML = "과연 피해갈 수 있을까?";
  userInput.value = '';
  goBtn.disabled = false;
  console.log(userNumList);
}

// 리셋 버튼 누르면 초기화
resetBtn.addEventListener('click', function(){
  reset();
});

resultBtn.addEventListener('click', function(){
  resultText.innerHTML = `정답 : ${randomNum}`;
});
