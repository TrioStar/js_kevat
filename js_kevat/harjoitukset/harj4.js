import { ruokaLista } from "./lista.js";

let ruokaLista2 = document.getElementById("ruokaLista");

function newTextElem(text, type) {
    let myElem = document.createElement(type)
    myElem.textContent = text;
    
    return myElem;
}

ruokaLista.forEach(lista => {
    let elem = newRuokaListaDiv(lista);
    ruokaLista2.appendChild(elem);
});

function newRuokaListaDiv(lista) {
    
    let myDiv = document.createElement("div");
    myDiv.className = "lista";

    let myTitle = newTextElem(lista.päivämäärä + " " + lista.viikonpäivä, "H2")

    myDiv.append(myTitle);

    let myInfoDiv = newInfoDiv(lista);
    myDiv.append(myTitle, myInfoDiv);
    myInfoDiv.style.display = "none";
    
    myTitle.addEventListener("mouseover", () => changeColor(myTitle, "red"));
    myTitle.addEventListener("mouseout", () => changeColor(myTitle, "black"));
    myTitle.addEventListener("click", () => toggleData(myInfoDiv));
    
    return myDiv;
}

function toggleData(item){
    if(item.style.display === "none"){
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}

function changeColor(elem, color) {
    elem.style.color = color;
}

function newInfoDiv(lista) {
    let myDiv = document.createElement("div");
    
    let myRuoka = newTextElem("Lounas: " + lista.pääruoka, "p");
    let myKasvis = newTextElem("Kasvikset: " + lista.kasvisruoka, "p");
    let myJuoma = newTextElem("Juomat: " + lista.juomat, "p");
    let myKuva = document.createElement("img");
    myKuva.src = lista.kuva;

    myDiv.append(myRuoka, myKasvis, myJuoma, myKuva);

    return myDiv;
}