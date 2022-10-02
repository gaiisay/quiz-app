const showAnswerButton = document.querySelectorAll('[data-js="show-answer-button"]');
const answer = document.querySelectorAll('[data-js="answer"]');

for (let count = 0; count < answer.length; count++) {
  showAnswerButton.item(count).addEventListener("click", () => {
    answer.item(count).classList.toggle("answer--active");
  });
}
