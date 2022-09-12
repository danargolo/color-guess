const balls = document.querySelectorAll('.ball');
const text = document.querySelector('#rgb-color');

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`
}

function randomBall() { 
  return Math.floor(Math.random() * balls.length);
}

window.addEventListener('load', () => {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();    
  }
  randomBall();
  const findBall = balls[randomBall()];
  text.innerText = `${findBall.style.backgroundColor}`;
});
