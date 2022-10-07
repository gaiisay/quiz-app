const showAnswerButton = document.querySelectorAll('[data-js="show-answer-button"]');
const answer = document.querySelectorAll('[data-js="answer"]');
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

for (let count = 0; count < answer.length; count++) {
  showAnswerButton.item(count).addEventListener("click", () => {
    const currentAnswer = answer.item(count);
    const currentButton = showAnswerButton.item(count);

    currentAnswer.classList.toggle("answer--active");

    if (currentButton.textContent === "Hide Answer") {
      currentButton.textContent = "Show Answer";
    } else {
      currentButton.textContent = "Hide Answer";
    }
  });
}
console.log(bookmarks);

for (let count = 0; count < bookmarks.length; count++) {
  bookmarks.item(count).addEventListener("click", (event) => {
    bookmarks.item(count).classList.toggle("bookmark--active");
  });
}
