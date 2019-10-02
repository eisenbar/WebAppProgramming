const convertResponseToJson = function (r) {
    return r.json();
}

const el = document.getElementById("goBtn");
el.addEventListener("click", (ev) => {
    const inp = document.getElementById("numInput");

    const theParent = document.getElementById("orderedList");
    const len = Number(inp.value);

    let victims = document.querySelectorAll("tr");
    for (x of victims) {
        theParent.removeChild(x);
    }

    /*for( let k = 0; k < len; k++){
        let li = document.createElement('li');
        let text = document.createTextNode(len);
        li.appendChild(text);
        theParent.appendChild(li);
    }*/

    fetch(`https://randomuser.me/api?results=${len}`)
        .then(convertResponseToJson)
        .then((d) => {
            const theParent = document.getElementById("orderedList");
            // Be sure to use a comma below, NOT a plus
            for (let j = 0; j < d.results.length; j++) {
                let li = document.createElement('tr');

                let td1 = document.createElement("td");
                let name = document.createTextNode(d.results[j].name.first + " " + d.results[j].name.last);
                td1.appendChild(name);

                let td2 = document.createElement("td");
                let phone = document.createTextNode(d.results[j].cell);
                td2.appendChild(phone);
                
                let td3 = document.createElement("td");
                let dob = document.createTextNode(d.results[j].dob.date);
                td3.appendChild(dob);
                
                let td = document.createElement("td");
                let img = document.createElement("img");
                img.setAttribute("src", d.results[j].picture.thumbnail);
                td.appendChild(img);

                li.appendChild(td1);
                li.appendChild(td2);
                li.appendChild(td3);
                li.appendChild(td);
                theParent.appendChild(li);
            }
            console.log("Got some data", d);
        });

});