//Bài B: Xây dựng Quiz app đơn giản về thể thao với API cho sẵn.
let $tellUser = document.querySelector(`#tell-user`);
let $questionTxt = document.querySelector(`#question-txt`);
let $questionContentTxt = document.querySelector(`#question-content-txt`);
let $answers = document.querySelectorAll(`.answer-pair .answer`);
let $answerBlock = document.querySelector(`#answer-block`);
let score = 0;
let index = 0;
let isUserClick = false;
let dataArr;
$tellUser.textContent = "";
let p = fetch(
  `https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`
);
p.then((resolve) => {
  let jP = resolve.json();
  jP.then((resolve) => {
    console.log(resolve);
    dataArr = resolve.results;
    quizProgram();
  });
});
function randomAToMax(a, MAX) {
  return Math.floor(Math.random() * (MAX - a)) + a;
}
function shuffleArray(arr) {
  let resultArr = [...arr];
  let randomArr = [...arr];
  for (let i = 0; i < resultArr.length; ++i) {
    let r = randomAToMax(0, randomArr.length);
    resultArr[i] = randomArr[r];
    randomArr = randomArr.filter((item) => {
      return item != randomArr[r];
    });
  }
  return resultArr;
}
function onclickAnswers(rightAns) {
  for (let i = 0; i < $answers.length; ++i) {
    $answers[i].onclick = () => {
      console.log($answers[i].textContent);
      if (!isUserClick) {
        isUserClick = true;
        if ($answers[i].textContent == rightAns) {
          $tellUser.textContent = `Congratulations! You got the correct answer!`;
          setTimeout(() => {
            score++;
            index++;
            quizProgram();
            $tellUser.textContent = ``;
          }, 1500);
        } else {
          $tellUser.textContent = `Sorry! The correct answer is ${rightAns}`;
          setTimeout(() => {
            index++;
            quizProgram();
            $tellUser.textContent = ``;
          }, 1500);
        }
      } else {
      }
    };
  }
}
function quizProgram() {
  isUserClick = false;
  if (index < dataArr.length) {
    $questionContentTxt.onclick = () => {};
    $questionContentTxt.style.visibility = `visible`;
    $tellUser.style.visibility = `visible`;
    $answerBlock.style.visibility = `visible`;
    $questionContentTxt.style.backgroundColor = "inherit";

    $questionTxt.textContent = `Question number ${index + 1}:`;
    $questionContentTxt.textContent = dataArr[index].question;
    let correctAnswer = dataArr[index].correct_answer;
    let incorrectAnswers = dataArr[index].incorrect_answers;
    let answersTxt = [correctAnswer, ...incorrectAnswers];
    let shuffleAnswerTxt = shuffleArray(answersTxt);
    for (let i = 0; i < shuffleAnswerTxt.length; ++i) {
      $answers[i].textContent = shuffleAnswerTxt[i];
    }
    onclickAnswers(correctAnswer);
  } else {
    $tellUser.style.visibility = `hidden`;
    $answerBlock.style.visibility = `hidden`;
    $questionTxt.textContent = `You got ${score} correct answer(s)`;
    $questionContentTxt.textContent = `Play again!`;
    $questionContentTxt.style.backgroundColor = "lightblue";
    $questionContentTxt.onclick = () => {
      score = 0;
      index = 0;
      quizProgram();
    };
  }
}
