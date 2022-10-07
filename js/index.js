const showAnswerButton = document.querySelectorAll('[data-js="show-answer-button"]');
const answer = document.querySelectorAll('[data-js="answer"]');
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
const form = document.querySelector('[data-js="form"]');
const newCardList = document.querySelector('[data-js="card-list"]');

console.log(form);

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

function createCard(question, answer, tag) {
  const innerHTML = `
  
    <section class="question-card">
      <button
        type="button"
        class="question-card__bookmark"
        aria-label="Bookmark"
        data-js="bookmark"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2H18C18.5304 2 19.039 2.21074 19.4141 2.58582C19.7891 2.96089 20 3.46957 20 4V21C19.9992 21.1978 19.9397 21.3909 19.8291 21.5549C19.7185 21.7189 19.5617 21.8463 19.3787 21.9213C19.1956 21.9962 18.9946 22.0152 18.8008 21.9758C18.607 21.9364 18.4291 21.8405 18.2898 21.7001L12 17.41L5.70996 21.7001C5.57069 21.8405 5.39279 21.9364 5.19897 21.9758C5.00516 22.0152 4.80413 21.9962 4.62109 21.9213C4.43806 21.8463 4.28122 21.7189 4.17065 21.5549C4.06009 21.3909 4.00083 21.1978 4 21V4C4 3.46957 4.21062 2.96089 4.58569 2.58582C4.96077 2.21074 5.46957 2 6 2Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <p class="question-card__question">
        ${question}
      </p>
      <button type="button" class="question-card__button" data-js="show-answer-button">
        Show Answer
      </button>
      <p class="question-card__answer" data-js="answer">${answer}</p>
      <ul class="question-tags">
        <li class="question-tags__item">#${tag}</li>
      </ul>
    </section>
  
  `;

  return innerHTML;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const inputQuestion = data.question;
  const inputAnswer = data.answer;
  const inputTag = data.tag;

  newCardList.innerHTML += createCard(inputQuestion, inputAnswer, inputTag);
});
