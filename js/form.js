const form = document.querySelector('[data-js="form"]');
const newCardList = document.querySelector('[data-js="card-list"]');
const questionAmountLeft = document.querySelector('[data-js="amountLeft-question"]');
const answerAmountLeft = document.querySelector('[data-js="amountLeft-answer"]');
const maxLength = form.question.getAttribute("maxlength");

function createCard(question, answer, tag) {
  const cardSection = document.createElement("section");
  const cardBookmarkButton = document.createElement("button");
  const cardQuestion = document.createElement("p");
  const cardSHowAnserButton = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTagListItem = document.createElement("li");

  cardSection.classList.add("question-card");
  cardBookmarkButton.classList.add("question-card__bookmark");
  cardQuestion.classList.add("question-card__question");
  cardSHowAnserButton.classList.add("question-card__button");
  cardAnswer.classList.add("question-card__answer", "answer--active");
  cardTagList.classList.add("question-tags");
  cardTagListItem.classList.add("question-tags__item");

  cardBookmarkButton.innerHTML += `<svg
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
          />`;

  cardQuestion.textContent = question;
  cardSHowAnserButton.textContent = "Show Answer";
  cardAnswer.textContent = answer;
  cardTagListItem.textContent = "#" + tag;

  cardSection.append(
    cardBookmarkButton,
    cardQuestion,
    cardSHowAnserButton,
    cardAnswer,
    cardTagList
  );
  cardTagList.append(cardTagListItem);
  newCardList.append(cardSection);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const inputQuestion = data.question;
  const inputAnswer = data.answer;
  const inputTag = data.tag;

  createCard(inputQuestion, inputAnswer, inputTag);
});

const updateAmount = (target, event) => {
  target.innerText = maxLength - event.target.value.length;
};

form.question.addEventListener("input", (event) => {
  updateAmount(questionAmountLeft, maxLength - event.target.value.length);
});
form.answer.addEventListener("input", (event) => {
  updateAmount(answerAmountLeft, maxLength - event.target.value.length);
});
