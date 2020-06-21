const LINES = sourceLinePairs.length;

let button = document.querySelector("button");
let sonnet = document.querySelector("#sonnet");

(function createLines() {
  for (let i = 0; i < 14; i++) {
    // li Node
    let item = document.createElement("li");
    item.classList.add("line");
    sonnet.appendChild(item);

    // Line Count Node
    lineNumber = Array.from(sonnet.children).filter((el) => el.tagName === "LI")
      .length;
    let lineCount = document.createElement("span");
    lineCount.classList.add("line-count")
    lineCount.textContent = lineNumber;

    // Text Node
    let text = document.createElement("span");
    text.classList.add("line-text");

    // Source Info node
    let soureceInfo = document.createElement("span");
    soureceInfo.classList.add("source-info");

    //Append all nodes
    sonnet.lastChild.appendChild(lineCount);
    sonnet.lastChild.appendChild(text);
    sonnet.lastChild.appendChild(soureceInfo);
  }
  createPoem();
})();

function createPoem() {
  let sonnetLines = Array.from(sonnet.children);
  let linePairs = Array.from({ length: 7 }, () => getRandomInt(LINES - 1)).map(
    (el) => sourceLinePairs[el]
  );

  // There's probably a cleaner/DRYer way to assign these
  sonnetLines.map((element, index) => {
    if (index % 4 < 2 && index !== 13) {
      let linePair = linePairs[Math.ceil(index / 2)];
      element.children[1].textContent = linePair.lineOne.text;
      element.children[2].textContent = `${linePair.SonnetNumber}:${linePair.lineOne.number}`;
    } else if (index % 4 > 1) {
      let linePair = linePairs[Math.ceil(index / 2) - 1];
      element.children[1].textContent = linePair.lineTwo.text;
      element.children[2].textContent = `${linePair.SonnetNumber}:${linePair.lineTwo.number}`;
    } else {
      element.children[1].textContent = linePairs[6].lineTwo.text;
      element.children[2].textContent = `${linePairs[6].SonnetNumber}: ${linePairs[6].lineTwo.number}`;
    }
  });
}

button.addEventListener("click", () => {
  createPoem();
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
