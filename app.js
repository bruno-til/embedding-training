console.log("Hello Back To School!");
const viz = document.getElementById("tableauViz");

let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

const oregonWashingtonButton = document.getElementById("onw");
const clearFilterButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// Logging workbook information

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is : ${element.name}`);
  });
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is : ${element.name}`);
  });
}

function oregonWashingtonFunction() {
  console.log(oregonWashingtonButton.value);

  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Oregon", "Washington"], "replace");
  });
}

function clearFunction() {
  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

function undoFunction() {
  viz.undoAsync();
}

oregonWashingtonButton.addEventListener("click", oregonWashingtonFunction);
clearFilterButton.addEventListener("click", clearFunction);
undoButton.addEventListener("click", undoFunction);

viz.addEventListener("firstinteractive", logWorkbookInformation);
