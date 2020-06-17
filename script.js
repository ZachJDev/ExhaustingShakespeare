let button = document.querySelector("button");
let sonnet = document.querySelector("#sonnet");

(function createLines() {
  for (let i = 0; i < 14; i++) {
    if (i % 4 === 0) {
      let lineBreak = document.createElement("p");
      sonnet.appendChild(lineBreak);
    }
    let item = document.createElement("li");
    sonnet.appendChild(item);
  }
  createPoem();
})();

function createPoem() {
  let sonnetLines = Array.from(sonnet.children).filter((el) => {
    return el.tagName === "LI";
  });
  let linePairs = Array.from({ length: 7 }, () =>
    getRandomInt(sourceLinePairs.length - 1)
  ).map((el) => sourceLinePairs[el]);


  sonnetLines.map((element, index) => {
      if(index % 4 < 2 && index !== 13) {
      element.textContent = linePairs[Math.ceil(index/2)].lineOne.text;
      } else if(index % 4 > 1) {
          element.textContent = linePairs[Math.ceil(index/2) - 1].lineTwo.text;
      } else {
        element.textContent = linePairs[6].lineTwo.text;
      }
  })
}

button.addEventListener("click", () => {
  createPoem();
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
