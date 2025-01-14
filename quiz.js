
function checkAnswer() {
    var correctAnswer="4";

}
document.querySelector('input[name="quiz"]:checked');
userAnswer = selectedOption.value;
const feedbackElement = document.getElementById("feedback");
if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "Incorrect. That's incorrect. Try again!";

  }
  submitButton.addEventListener("click", function () {
    console.log("Submit Answer button clicked!");
    // Add your logic here, such as checking the user's answer
  });
  submitButton.addEventListener("click", checkAnswer);



