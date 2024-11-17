document.addEventListener("DOMContentLoaded", function () {
  const form = document.createElement("form");

  // "Question"
  const questionLabel = document.createElement("label");
  questionLabel.textContent = "Question";
  questionLabel.setAttribute("id", "label");
  questionLabel.setAttribute("for", "question");

  const questionTextarea = document.createElement("textarea");
  questionTextarea.setAttribute("id", "question");
  questionTextarea.setAttribute("name", "question");
  questionTextarea.setAttribute("maxlength", "150");

  const questionCounter = document.createElement("div");
  questionCounter.classList.add("characters");
  questionCounter.setAttribute("id", "question-counter");
  questionCounter.textContent = "0/150";

  // "Answer"
  const answerLabel = document.createElement("label");
  answerLabel.textContent = "Answer";
  answerLabel.setAttribute("id", "label");
  answerLabel.setAttribute("for", "answer");

  const answerTextarea = document.createElement("textarea");
  answerTextarea.setAttribute("id", "answer");
  answerTextarea.setAttribute("name", "answer");
  answerTextarea.setAttribute("maxlength", "150");

  const answerCounter = document.createElement("div");
  answerCounter.classList.add("characters");
  answerCounter.setAttribute("id", "answer-counter");
  answerCounter.textContent = "0/150";

  // "Tag"
  const tagLabel = document.createElement("label");
  tagLabel.textContent = "Tag";
  tagLabel.setAttribute("id", "label");
  tagLabel.setAttribute("for", "tag");

  const tagInput = document.createElement("input");
  tagInput.setAttribute("id", "tag");
  tagInput.setAttribute("name", "tag");
  tagInput.setAttribute("type", "text");

  // Submit button
  const createButton = document.createElement("button");
  createButton.textContent = "Create";
  createButton.setAttribute("id", "submit");
  createButton.setAttribute("type", "submit");

  // Append to the form
  form.appendChild(questionLabel);
  form.appendChild(questionTextarea);
  form.appendChild(questionCounter);
  form.appendChild(answerLabel);
  form.appendChild(answerTextarea);
  form.appendChild(answerCounter);
  form.appendChild(tagLabel);
  form.appendChild(tagInput);
  form.appendChild(createButton);

  // Append the form to the page
  const formContainer = document.getElementById("form-container");
  formContainer.appendChild(form);

  // Create a card container without displaying it
  const card = document.createElement("article");
  card.classList.add("card");
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("bookmark-container");
  const hyperlink = document.createElement("a");
  hyperlink.classList.add("bookmark-icon");
  hyperlink.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="var(--secondary)" stroke="var(--black)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  `;
  iconContainer.appendChild(hyperlink);

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");

  const showAnswer = document.createElement("button");
  showAnswer.classList.add("card__button");
  showAnswer.textContent = "Show Answer";
  showAnswer.setAttribute("data-js", "card__button");

  const cardAnswer = document.createElement("div");
  cardAnswer.classList.add("card__answer");
  cardAnswer.setAttribute("hidden", "true");
  cardAnswer.setAttribute("data-js", "card__answer");

  const cardTags = document.createElement("div");
  cardTags.classList.add("card__tags");
  const tagsText = document.createElement("p");
  tagsText.classList.add("tag");
  cardTags.appendChild(tagsText);

  card.appendChild(iconContainer);
  card.appendChild(cardQuestion);
  card.appendChild(showAnswer);
  card.appendChild(cardAnswer);
  card.appendChild(cardTags);

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = questionTextarea.value;
    const answer = answerTextarea.value;
    const tags = tagInput.value;

    cardQuestion.textContent = question;
    cardAnswer.textContent = answer;
    tagsText.textContent = tags;

    showAnswer.addEventListener("click", () => {
      if (cardAnswer.style.display === "block") {
        cardAnswer.style.display = "none";
        showAnswer.textContent = "Show Answer";
      } else {
        cardAnswer.style.display = "block";
        showAnswer.textContent = "Hide Answer";
      }
    });

    // Show the card in the container
    formContainer.appendChild(card);
  });

  // Update character count
  function updateCharCount(textarea, counter, maxLength) {
    const remainingChars = maxLength - textarea.value.length;
    counter.textContent = `${remainingChars} characters left`;
  }

  questionTextarea.addEventListener("input", () => {
    updateCharCount(questionTextarea, questionCounter, 150);
  });

  answerTextarea.addEventListener("input", () => {
    updateCharCount(answerTextarea, answerCounter, 150);
  });
});
