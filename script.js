let front = document.querySelector(".front");
let back = document.querySelector(".back");

let submit = document.getElementById("submit");
let star_number = document.getElementById("star_number");

submit.addEventListener("click", () => {
  let stars = document.querySelector('input[name="stars"]:checked');
  star_number.textContent = stars.value;

  front.style.display = "none";
  back.style.display = "flex";
});
