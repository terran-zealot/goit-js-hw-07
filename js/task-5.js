function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.body.classList.add("background");
const message = document.querySelector(".color");
// const randomColor = getRandomHexColor();

const btn = document.querySelector(".change-color");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  message.textContent = getRandomHexColor();
  
}