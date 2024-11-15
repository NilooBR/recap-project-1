document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".card__button");
  const answer = document.getElementById("answer1");

  if (button) {
    button.addEventListener("click", () => {
      answer.hidden = !answer.hidden;
    });
  }

  const bookmark = document.querySelector('[data-js="card__bookmark"]');
  
  if (bookmark) {
    bookmark.addEventListener("click", (event) => {
      event.preventDefault();
      bookmark.classList.toggle("card__bookmark--selected");
    });
  }
});