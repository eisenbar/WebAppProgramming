// Sample Code for #part0
let zero = document.querySelector("#part00");
let hello = document.createTextNode("Hello world!");
zero.appendChild(hello);
/*--- begin answer part00 ---*/
let myname = "Ryan Eisenbarth"
/*--- end answer part00 ---*/
if (typeof myname !== "undefined") {
  let textBefore = document.createTextNode("My name is ");
  zero.appendChild(textBefore);
  let boldNode = document.createElement("b");
  let name = document.createTextNode(myname);
  zero.appendChild(boldNode);
  boldNode.appendChild(name);
  let textAfter = document.createTextNode(". This work is solely mine! ");
  zero.appendChild(textAfter);

  zero.appendChild(
    document.createTextNode(
      "I understand that " +
        "copying someone else's code and claiming to be my own work " +
        "or sharing my code with someone else is a "
    )
  );
  let honesty = document.createElement("b");
  honesty.appendChild(document.createTextNode("violation"));
  zero.appendChild(honesty);
  zero.appendChild(document.createTextNode(" of academic honesty."));
}

// Code for part 1
let atoms = [
  "Aluminum",
  "Barium",
  "Carbon",
  "Dubnium",
  "Erbium",
  "Fluor",
  "Gallium",
  "Hydrogen",
  "Helium",
  "Iron",
  "Krypton",
  "Lithium",
  "Magnesium",
  "Nitrogen",
  "Oxygen",
  "Palladium",
  "Radon",
  "Silicon",
  "Titanium",
  "Uranium",
  "Vanadium",
  "Xenon",
  "Zinc"
];

let N = atoms.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atoms[pos1];
  atoms[pos1] = atoms[pos2];
  atoms[pos2] = tmp;
}

/*--- begin answer part01 ---*/
let orderedList = document.createElement("ol");
let one = document.querySelector("#part01");

atoms.forEach(function(element){
  //creating text node
  let node = document.createTextNode(element);

  //creating list element
  let listElement = document.createElement("li");

  //attaching text node to list element
  listElement.appendChild(node);

  //attaching list element to ordered list
  orderedList.appendChild(listElement);
});
one.appendChild(orderedList);
/*--- end answer part01 ---*/

// Code for part 2
// Don't rename the following two variables!
/*--- begin answer part02 ---*/
const myDomesticTravel = {
  destination: "Sedona, Arizona",
  dateOfVisit: "June 2018",
  isAbroad: false
};
const myInternationalTravel = {
  destination: "Honduras",
  dateOfVisit: "March 2016",
  isAbroad: true
};

let two = document.querySelector("#part02");

const createParagraphs = function(travelData){
  let sentence = "When I went to, " + travelData.destination + " I had a blast. Time has flown by since I traveled there in " + travelData.dateOfVisit  + ".";
  let p = document.createElement("p");
  let textNode = document.createTextNode(sentence);
  p.appendChild(textNode);
  return p;
};

let domParagraph = createParagraphs(myDomesticTravel);
let interParagraph = createParagraphs(myInternationalTravel);

domParagraph.classList.add("domestic");
interParagraph.classList.add("international");

two.appendChild(domParagraph);
two.appendChild(interParagraph);

/*--- end answer part02 ---*/

// Code for part 3
let atomObjects = [
  { name: "Aluminum", weight: 26.982 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Dubnium", weight: 268 },
  { name: "Erbium", weight: 167.26 },
  { name: "Fluor", weight: 18.988 },
  { name: "Gallium", weight: 69.723 },
  { name: "Hydrogen", weight: 1.008 },
  { name: "Helium", weight: 4.0026 },
  { name: "Iron", weight: 55.845 },
  { name: "Krypton", weight: 83.798 },
  { name: "Lithium", weight: 6.94 },
  { name: "Magnesium", weight: 24.305 },
  { name: "Nitrogen", weight: 14.007 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Palladium", weight: 106.42 },
  { name: "Radon", weight: 222 },
  { name: "Silicon", weight: 28.085 },
  { name: "Titanium", weight: 47.867 },
  { name: "Uranium", weight: 238.03 },
  { name: "Vanadium", weight: 50.942 },
  { name: "Xenon", weight: 131.29 },
  { name: "Zinc", weight: 65.38 }
];
N = atomObjects.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atomObjects[pos1];
  atomObjects[pos1] = atomObjects[pos2];
  atomObjects[pos2] = tmp;
}

/*--- begin answer part03 ---*/
let atomObjectList = document.createElement("ol");
let three = document.querySelector("#part03");

atomObjects.forEach(function(element){
  let list = document.createElement("li");
  let textNode = document.createTextNode(element.name + "(weight: " + element.weight.toFixed(1) + ")");
  
  list.classList.add(element.weight > 150 ? "heavy" : "light");
  list.appendChild(textNode);
  atomObjectList.append(list);
});

three.append(atomObjectList);
/*--- end answer part03 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
let four = document.querySelector("#part04");
let atomTable = document.createElement("table");
let tableBody = document.createElement('tbody');

function tableCreate(){

  for(let i = 0; i < atomObjects.length + 1; i++ ){
      let tr = document.createElement('tr');
    for(let j = 0; j < 2; j++){
      if(i == (atomObjects.length + 1) && j == 1){
        break;
      }
      else{
        if(i == 0 && j == 0){
          let th = document.createElement('th');
          th.appendChild(document.createTextNode("Atom"));
          tr.appendChild(th);
        }
        else if(i == 0 && j == 1){
          let th = document.createElement('th');
          th.appendChild(document.createTextNode("Weight"));
          tr.appendChild(th);
        }
        else{
          let td = document.createElement('td');
          if(j == 0){
            td.appendChild(document.createTextNode(atomObjects[i-1].name))
          }
          else{
            td.appendChild(document.createTextNode(atomObjects[i-1].weight))
          }
          tr.classList.add(atomObjects[i-1].weight > 150 ? "heavy" : "light");
          tr.appendChild(td);
        }
      }
    }
    tableBody.appendChild(tr);
  }
  atomTable.appendChild(tableBody);
};

four.appendChild(atomTable);
tableCreate();

/*--- end answer part04 ---*/

// Code for part 5 (Extra credit)
/*--- begin answer part05 ---*/
/*--- end answer part05 ---*/
