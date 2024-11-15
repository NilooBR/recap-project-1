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

  // "Answer"
  const answerLabel = document.createElement("label");
  answerLabel.textContent = "Answer";
  answerLabel.setAttribute("id", "label");
  answerLabel.setAttribute("for", "answer");

  const answerTextarea = document.createElement("textarea");
  answerTextarea.setAttribute("id", "answer");
  answerTextarea.setAttribute("name", "answer");

  //"Tag"
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
  form.appendChild(answerLabel);
  form.appendChild(answerTextarea);
  form.appendChild(tagLabel);
  form.appendChild(tagInput);
  form.appendChild(createButton);

  // Append the form to the page
  const formContainer = document.getElementById("form-container");
  formContainer.appendChild(form);
});
