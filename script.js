const balls = document.querySelectorAll('.ball');
const text = document.querySelector('#rgb-color');
const chosenOne = document.getElementsByClassName('select');
const result = document.getElementById('answer');
const score = document.querySelector('#score');

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function randomBall() {
  return Math.floor(Math.random() * balls.length);
}
const guessBall = balls[randomBall()];

function loadgame() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();
  }
  randomBall();
  text.innerText = `${guessBall.style.backgroundColor}`.replace('rgb', '');
  result.innerText = 'Escolha uma cor.';
}
window.addEventListener('load', loadgame);

function answer() {
  if (chosenOne[0].style.backgroundColor === guessBall.style.backgroundColor) {
    result.innerText = 'Acertou!';
    score.innerText = parseInt(score.innerText, 10) + 3;
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
}

function select(ref) {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].classList.remove('select');
    ref.target.classList.add('select');
  }
  answer();
}

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', select);
}

document.getElementById('reset-game').addEventListener('click', loadgame);
