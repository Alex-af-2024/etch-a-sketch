const container = document.querySelector("#grid-container");

function createGrid(size) {
  container.innerHTML = "";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  const totalSquares = size * size;
  const squareSize = 100 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    container.appendChild(square);
  }
}

createGrid(16); // inicio con 16*16

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = "green";
    console.log(e.target);
  }
});

const btnReset = document.querySelector("#btn-reset");

btnReset.addEventListener("click", () => {
  let newSize = prompt("¿Cuántos por lado? (max 100)");

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  }
});
