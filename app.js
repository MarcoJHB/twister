const colors = ["red", "blue", "green", "yellow"];
const bodyParts = ["🖐️", "🦶"];
const bodySide = ["left", "right"];

// console.log(movesList[1]);

const moveDisplay = document.querySelector(".container");
const nextPosition = document.querySelector(".next-position");
const nextPart = document.querySelector(".next-part");
const nextColor = document.querySelector(".next-color");
const moveBtn = document.querySelector(".next-btn");
const blackTap = document.querySelector(".black-bg");
const whiteTap = document.querySelector(".white-bg");
const body = document.querySelector("body");

document.addEventListener("click", () => {
  let randBodySide = bodySide[Math.floor(Math.random() * bodySide.length)];
  let randBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
  let randCol = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randCol;
  if (
    randCol == "blue" || randCol == "green" || randCol == "red"
      ? (body.classList.add("color-alt"),
        blackTap.classList.add("hidden"),
        whiteTap.classList.remove("hidden"))
      : (body.classList.remove("color-alt"),
        blackTap.classList.remove("hidden"),
        whiteTap.classList.add("hidden"))
  );
  nextPart.innerHTML = randBodyPart;
  nextPosition.innerHTML = randBodySide;
  nextColor.innerHTML = randCol;
});
