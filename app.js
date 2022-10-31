const submit = document.querySelector("#submitBtn");
const rating = document.querySelector(".container");
const thankYou = document.querySelector(".container-hidden");
const btn = document.querySelector(".btn");

submit.addEventListener("click", onSubmit);
btn.forEach((buttons) => {
  buttons.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  rating.classList.add("hidden");
  thankYou.classList.remove("hidden");
}

function handleRatingBtnClick(event) {
  btn.forEach((buttons) => {
    buttons.classList.remove("active");
  });

  if (event.target.classList.contains("btn")) {
    event.target.classList.add("active");
  }
}
