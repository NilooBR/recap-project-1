document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('[data-js="card__button"]');
  const answer = document.querySelector('[data-js="card__answer"]');

  button.addEventListener("click", () => {
    answer.hidden = !answer.hidden;
  });

  const bookmark = document.querySelector('[data-js="card__bookmark"]');

  bookmark.addEventListener("click", (event) => {
    event.preventDefault();
    bookmark.classList.toggle("card__bookmark--selected");
  });
});
