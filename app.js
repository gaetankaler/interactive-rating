const submit = document.querySelector("#submitBtn");
const rating = document.querySelector(".container");
const thankYou = document.querySelector(".container-hidden");
const btn = document.querySelectorAll(".btn");
let score = document.querySelector(".score");
let score_start = 3;

submit.addEventListener("click", onSubmit);
btn.forEach((buttons) => {
  buttons.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  rating.classList.add("hidden");
  score.textContent = score_start;
  thankYou.classList.remove("hidden");
}

function handleRatingBtnClick(event) {
  btn.forEach((buttons) => {
    buttons.classList.remove("active");
  });

  if (event.target.classList.contains("btn")) {
    event.target.classList.add("active");
  } else {
    event.target.parentElement.classList.add("active");
  }
  score_start = event.target.textContent;
}
