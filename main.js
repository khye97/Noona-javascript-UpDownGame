// 1 ~ 100 사이의 랜덤 숫자 한 개를 만듦
let randomNum = Math.floor((Math.random() * 100) + 1); 
console.log(randomNum);

// 유저가 선택한 숫자 변수
let userNum = 0;

// 버튼 횟수를 카운트 할 변수
let count = 5;

// 유저가 입력한 값을 담을 배열
let userNumList = [];


// 남은 기회 카운트
function countFunc (){
  count -= 1;
  document.querySelector('.count').innerHTML = count;
  console.log(count);

  // 남은 기회가 0이 되면 go 버튼 비활성화
  if (count == 0){
    document.querySelector('.go-btn').disabled = true;
    document.querySelector('.inner-text').innerHTML = "게임 오버!"; // 실행 안됨
  }
}

// 유저가 입력한 값 체크
function checkUserNum (){
  userNum = document.getElementById('inputNum').value;
  console.log(userNum);

  if (userNum < 0 || userNum > 100){
    document.querySelector('.inner-text').innerHTML = "1~100 사이의 값을 입력하세요";
  } else if (userNum == randomNum){
    document.querySelector('.inner-text').innerHTML = "정답!";
    document.querySelector('.go-btn').disabled = true;
  } else if (userNum < randomNum){
    document.querySelector('.inner-text').innerHTML = "Up!";
  } else if (userNum > randomNum){
    document.querySelector('.inner-text').innerHTML = "Down!";
  }
}

// 숫자 중복 검사
function checkDuplicate (){
  if (userNumList.includes(userNum)){
    console.log('이미 값이 있음');
    document.querySelector('.inner-text').innerHTML = "이미 입력한 값입니다.";
  }
}

document.querySelector('.go-btn').addEventListener('click', function(){
  // 유저가 입력한 값 배열에 담기
  userNumList.push(userNum);
  console.log(userNumList);

  countFunc(); // 클릭 횟수 count 함수
  checkUserNum(); // 유저 정답 확인 함수
  checkDuplicate();
});


// 리셋
function reset (){
  count = 5;
  document.querySelector('.count').innerHTML = count;
  userNumList = [];
  document.querySelector('.inner-text').innerHTML = "과연 당신의 운명은?";
  console.log(userNumList);
}

// 리셋 버튼 누르면 초기화
document.querySelector('.reset-btn').addEventListener('click', function(){
  reset();
});