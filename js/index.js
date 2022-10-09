const showAnswerButton = document.querySelector('[data-js="show-answer-button"]');
const answer = document.querySelector('[data-js="answer"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

showAnswerButton.addEventListener("click", (event) => {
  answer.classList.toggle("answer--active");

  if (answer.classList.contains("answer--active")) {
    event.target.textContent = "Hide Answer";
  } else {
    event.target.textContent = "Show Answer";
  }
});

bookmark.addEventListener("click", (event) => {
  bookmark.classList.toggle("bookmark--active");
});
