import { AppDB } from "./db-init.js";
import selectionHandler from "./db-remover.js";

const showIndividualRecord = function(snapshot) {
  const expenseRecord = snapshot.val();

  let tBody = document.getElementById("tb");
  let tRow = document.createElement("tr");
  tRow.setAttribute("id", "ROW" + snapshot.key);

  //Adding Description
  let descTd = document.createElement("td");
  let descText = document.createTextNode(expenseRecord.description);
  descTd.appendChild(descText);

  //Adding Amount
  let amTd = document.createElement("td");
  let amText = document.createTextNode(expenseRecord.amount);
  amTd.appendChild(amText);

  //Adding Date
  let dateTd = document.createElement("td");
  let dateText = document.createTextNode(expenseRecord.date);
  dateTd.appendChild(dateText);

  //Adding Category
  let catTd = document.createElement("td");
  let catText = document.createTextNode(expenseRecord.category);
  catTd.appendChild(catText);

  //Adding Select option
  let checkBox = document.createElement("input");
  checkBox.setAttribute("id", snapshot.key);
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", selectionHandler);

  //Appending all to table
  tRow.appendChild(descTd);
  tRow.appendChild(amTd);
  tRow.appendChild(dateTd);
  tRow.appendChild(catTd);
  tRow.appendChild(checkBox);
  tBody.appendChild(tRow);
};

const showSummary = function(snapshot) {
  const data = snapshot.val();
  //alert(`SUMMARY: key is ${snapshot.key}`);
  let total = 0;
  for (let key in data) {
    total += data[key].amount;
    console.log("Item is", total);
  }

  let tfoot = document.getElementById("tfoot");
  let fData = document.createElement("td");
  fData.setAttribute("id", "footChild");
  let fDataText = document.createTextNode("Total " + total);

  if (tfoot.childElementCount > 0) {
    let child = document.getElementById("footChild");
    tfoot.removeChild(child);
  }

  fData.appendChild(fDataText);
  tfoot.appendChild(fData);
};

const whichOneIsGone = function(snapshot) {
  const whichKey = snapshot.key;
  // This would be the key of the deleted record in Firebase
  let tBody = document.getElementById("tb");
  let tRow = document.getElementById("ROW" + snapshot.key);
  tBody.removeChild(tRow);
};

// Attach two different listeners to the "budget" node
// value listener and child_added listener

AppDB.ref("budget").on("child_added", showIndividualRecord);
AppDB.ref("budget").on("value", showSummary);
AppDB.ref("budget").on("child_removed", whichOneIsGone);
