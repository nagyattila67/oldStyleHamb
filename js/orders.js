





let changeRadioValue = function (el) {
    console.log("elllllllllllllll", el, "el.id", el.id);
    el.value = "on"
    if (el.id == "cheese") { document.querySelector("#double-cheese").value = "off" }
    if (el.id == "double-cheese") { document.querySelector("#cheese").value = "off" }
}

let userData = new Object;
let methodOfPayment = new Array;
let basket = new Object;
let order = 0;

let displayUserData = function (elem, ev) {
    console.log(elem);
    ev.preventDefault();
    console.log(elem);
    console.log(ev)
    let name = ev.path[2][1]["value"]; if (name == "") { name = "nincs adat" }
    let email = ev.path[2][2]["value"]; if (email == "") { email = "nincs adat" }
    let phone = ev.path[2][3]["value"]; if (phone == "") { phone = "nincs adat" }
    let address = ev.path[2][4]["value"]; if (address == "") { address = "nincs adat" }
    let comment = ev.path[2][5]["value"]; if (comment == "") { comment = "-" }
    userData = { name: `${name}`, email: `${email}`, phone: `${phone}`, address: `${address}`, comment: `${comment}` }
    console.log(userData);


    let place = document.querySelector("#userData");
    place.innerHTML = `név: ${name} <br> email: ${email} <br> telefonszám: ${phone} <br>
     cím: ${address} <br> megjegyzés: ${comment}`;
    displayMethodPayment(elem, ev);
}

let displayMethodPayment = function (elem, ev) {
    let method = String();
    if (ev.path[2][7].value == "on") { method = "bankkártyával" }
    if (ev.path[2][8].value == "on") { method = "kiszállításkor" }
    if (ev.path[2][7].value == "off" && ev.path[2][8].value == "off") { method = "nincs kiválasztva" }
    console.log(method);
    place = document.querySelector("#methodOfPayment");
    place.innerHTML = method;
    methodOfPayment[0] = `${ev.path[2][7].value}`;
    methodOfPayment[1] = `${ev.path[2][8].value}`;
    console.log(methodOfPayment);
    ev.path[2][7].value = "off";
    ev.path[2][8].value = "off";
    console.log(ev.path[2][7].value);
    console.log(ev.path[2][8].value);
}


displayBasket = function (ev) {
    event.preventDefault();
    order = order + 1;
    console.log(order);
    if (order == 1) { displayItems(ev); }
    if (order > 1) {
        displayMoreItems(ev);
    }
}

displayMoreItems = function (ev) {
    place = document.querySelector("#containOfBasket");
    
        let line = document.createElement("hr");
        place.appendChild(line);

    


}






displayItems = function (ev) {


    //event.preventDefault();
    let item = ev.path[1].children[5].value
    let place = document.querySelectorAll("#containOfBasket span")[1];

    place.setAttribute("style", "color:#0000ff")
    place.innerHTML = `${item} adag `;

    place = document.querySelector("#containOfBasket");
    let newSpan = document.createElement("span");
    place.appendChild(newSpan);
    place = document.querySelector("#containOfBasket").lastElementChild;
    place.setAttribute("style", "color:#0000ff");
    place.innerHTML = "hamburger";
    console.log("place", place);

    for (let i = 0; i < 8; i++) {
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0]["value"] == "on" && i == 0) {
            console.log("sziaaaaaaa");
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", dupla hússal";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off";
        }

        if (ev.path[1].children[1].children[0].children[i].children[0].children[0]["value"] == "on" && i == 1) {
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", csirkemájjal";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off";
        };
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0].value == "on" && i == 2) {
            place.innerHTML = ", sajttal";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off"
        };
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0].value == "on" && i == 3) {
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", dupla sajttal";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off"
        };
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0].value == "on" && i == 4) {
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", sült szalonnával";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off"
        };
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0].value == "on" && i == 5) {
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", trópusi salátakoktéllal";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off"
        };
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0].value == "on" && i == 6) {
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", tükörtojással";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off"
        };
        if (ev.path[1].children[1].children[0].children[i].children[0].children[0].value == "on" && i == 7) {
            place = document.querySelector("#containOfBasket");
            let newSpan = document.createElement("span");
            place.appendChild(newSpan);
            place = document.querySelector("#containOfBasket").lastElementChild;
            place.innerHTML = ", hagyma nélkül";
            ev.path[1].children[1].children[0].children[i].children[0].children[0].value = "off"
        };
    }

    let sauce = ev.path[1].children[3].value;
    if (sauce == "mustár") { sauce = "mustárral" }
    if (sauce == "kecsöp") { sauce = "kecsöppel" }
    if (sauce == "majonéz") { sauce = "majonézzel" }
    if (sauce == "nem kérek szószt") { sauce = "szósz nélkül" }
    console.log("szósz", sauce);

    place = document.querySelector("#containOfBasket");
    newSpan = document.createElement("span");
    place.appendChild(newSpan);
    place = document.querySelector("#containOfBasket").lastElementChild;
    place.innerHTML = `, ${sauce}`;

    console.log(ev)
}












hambPrice = function () {
    console.log("hello");
}

