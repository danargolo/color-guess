const balls = document.querySelectorAll('.ball');

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`
}

//   
//   return


window.addEventListener('load', () => {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();    
  }
});
