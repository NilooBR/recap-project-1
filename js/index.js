document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('[data-js="card__button"]');
  const answer = document.querySelector('[data-js="card__answer"]');

  button.addEventListener("click", () => {
    if (answer.style.display === "block") {
      answer.style.display = "none";
      button.textContent = "Show Answer";
    } else {
      answer.style.display = "block";
      button.textContent = "Hide Answer";
    }
  });

  const bookmark = document.querySelector('[data-js="card__bookmark"]');

  bookmark.addEventListener("click", (event) => {
    event.preventDefault();
    bookmark.classList.toggle("card__bookmark--selected");
  });
});
