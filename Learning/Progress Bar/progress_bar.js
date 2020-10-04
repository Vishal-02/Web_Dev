const prev = document.getElementById("prev_button");
const next = document.getElementById("next_button");
const finish = document.getElementById("finish_button");
const content = document.getElementById("content");
const bullets = [...document.querySelectorAll(".bullet")];

const max_steps = 4;
let current_step = 1;

next.addEventListener('click', () => {
  bullets[current_step - 1].classList.add('completed');
  current_step++;
  prev.disabled = false;
  if (current_step === max_steps) {
    next.disabled = true;
    finish.disabled = false;
  }
  content.innerHTML = `Step Number ${current_step}`;
});

prev.addEventListener('click', () => {
  bullets[current_step - 2].classList.remove('completed');
  current_step--;
  next.disabled = false;
  finish.disabled = true;
  if (current_step === 1) {
    prev.disabled = true;
  }
  content.innerHTML = `Step Number ${current_step}`;
});

finish.addEventListener('click', () => {
  location.reload();
});