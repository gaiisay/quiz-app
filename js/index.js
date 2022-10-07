const showAnswerButton = document.querySelectorAll('[data-js="show-answer-button"]');
const answer = document.querySelectorAll('[data-js="answer"]');
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

for (let count = 0; count < answer.length; count++) {
  showAnswerButton.item(count).addEventListener("click", () => {
    answer.item(count).classList.toggle("answer--active");
  });
}
console.log(bookmarks);

for (let count = 0; count < bookmarks.length; count++) {
  bookmarks.item(count).addEventListener("click", (event) => {
    bookmarks.item(count).classList.toggle("bookmark--active");
  });
}
