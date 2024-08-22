const containerDiv = document.getElementById("container");
const button = document.getElementById("button");

let squares = 16;

function createGrid(squares) {
  containerDiv.innerHTML = "";
  const gridSize = squares * squares;
  const squareWidth = 500 / squares;
  const squareHeight = 500 / squares;

  for (let i = 1; i < squares * squares + 1; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.id = `div${i}`;
    innerDiv.className = "grid";

    innerDiv.style.width = `${squareWidth}px`;
    innerDiv.style.height = `${squareHeight}px`;

    innerDiv.addEventListener("mouseover", draw);

    containerDiv.appendChild(innerDiv);
  }
}

function draw(event) {
  event.target.style.backgroundColor = "black";
}

function resize() {
  const newSize = parseInt(prompt("Please enter grid size"));
  squares = newSize;
  createGrid(squares);
  console.log(squares);
}

button.addEventListener("click", resize);

createGrid(squares);
