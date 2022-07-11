const movesList = [
  "left hand blue",
  "left hand red",
  "left hand green",
  "left hand yellow",
  "right hand blue",
  "right hand red",
  "right hand green",
  "right hand yellow",
  "left foot blue",
  "left foot red",
  "left foot green",
  "left foot yellow",
  "right foot blue",
  "right foot red",
  "right foot green",
  "right foot yellow",
];

const colors = ["red", "blue", "green", "yellow"];
const bodyParts = ["hand", "foot"];
const bodySide = ["left", "right"];

console.log(movesList[1]);

const moveDisplay = document.querySelector(".container");
const nextMove = document.querySelector(".next-move");
const moveBtn = document.querySelector(".next-btn");

moveBtn.addEventListener("click", () => {
  let randBodySide = bodySide[Math.floor(Math.random() * bodySide.length)];
  let randBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
  let randCol = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randCol;
  nextMove.innerHTML = `${randBodySide} ${randBodyPart} ${randCol}`;
});
