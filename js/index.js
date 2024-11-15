document.addEventListener("click", () => {
  const button = document.querySelector(".card__button");
  const answer = document.getElementById("answer1");

  button.addEventListener("click", () => {
    answer.hidden = !answer.hidden;
  });
});
