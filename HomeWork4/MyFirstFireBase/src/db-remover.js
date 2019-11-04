import { AppDB } from "./db-init.js";

let userSelections = [];

export default function(changeEvent) {
  // The ID of the checkbox is also the key of the record in Firebase
  const whichKey = changeEvent.target.id;
  if (changeEvent.target.checked) {
    userSelections.push(whichKey);
  } else {
    userSelections = userSelections.filter(id => id != whichKey);
  }
}

const theDelButton = document.getElementById("remove");

theDelButton.addEventListener("click", (event) => {
  userSelections.forEach((victimKey) => {
    AppDB.ref("budget")
  .child(victimKey)
  .remove();
  });
});