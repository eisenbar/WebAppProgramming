import { AppDB } from "./db-init.js";

const myHandler = function(event) {
  const descriptionField = document.getElementById("what").value;

  const amountField = document.getElementById("amt").value;
  const amount = Number(amountField); // convert string to number

  const dateField = document.getElementById("when").value;

  const categoryField = document.getElementById("cat").value;


  AppDB.ref("budget")
  .push()
  .set({ description: descriptionField, amount: amount, date: dateField, category: categoryField });
};

const theButton = document.querySelector("button");
theButton.addEventListener("click", myHandler);
