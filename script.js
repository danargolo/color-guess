const balls = document.querySelectorAll('.ball');
const text = document.querySelector('#rgb-color');

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
}

window.addEventListener('load', loadgame);

const chosenOne = document.getElementsByClassName('select');
const result = document.getElementById('answer');

function answer() {
  if (chosenOne[0].style.backgroundColor === guessBall.style.backgroundColor) {
    result.innerText = 'Acertou!';
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
