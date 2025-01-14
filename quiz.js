
function checkAnswer() {
    var correctAnswer="4";

}
document.querySelector('input[name="quiz"]:checked');
userAnswer = selectedOption.value;
const feedbackElement = document.getElementById("feedback");
if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "Incorrect. Try again!";
  }



