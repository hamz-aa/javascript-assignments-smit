let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let value = document.querySelector("h1");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  value.textContent = count;
});
