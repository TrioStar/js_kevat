//import { countries } from "./countries-data.js";
let countries = [
    {
        name: "Finland",
        capital: "Helsinki",
        population: 5491817,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png"
    },
    {
        name: "Sweden",
        capital: "Stockholm",
        population: 9894888,
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAHlBMVEUAaqf+zAD/0QAAaKlPfJZggpAAZqpdgZFKepiBj4EDfUmrAAABn0lEQVR4nO3ay43CUBBFwYc9/PJPeIig8IKWkDmVQKvP+q41Y79ul3e26z50/csVB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYFzxNln3O4H4txvQ9c/ZP3NeDwPxHk+hq5/yNqmvG3zqvPl1oEfflZxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kDLLmgTCK1JYWzBe4od8pDiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOFAcKA4UB4oDxYHiQHGgOHCKOP/ItlPLsoEE4gAAAABJRU5ErkJggg=="
    },
    {
        name: "Norway",
        capital: "Oslo",
        population: 5223256,
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAAC/CAMAAADEm+k5AAAASFBMVEW6DC8AIFv///8AAFGor8C4ACPUfooAAE8ADVTCyNSEjKS4ACfMYXDhp6+3AB0AEFQAF1fKXGu1AAvfn6jsxszSeISAiqRXY4aQThytAAABrklEQVR4nO3byUpDQRBA0Wecpzjr//+pwl3o4gkGKpDgOeuGau6ym1qWEbd3m2/Xlydrrm5+nLnfzgw+MDpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdcvwdzkdsn3bt8DwzeMpyMeNlxw6vb0ODhyybeX/pcGh0iA7RITpEh+gQHaJDdIgOWc7mvT+sdnj82MOsKcvpvPUMXyH2MGvK8sud/xsdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDvFeHf8X8Z8VHaJDdIgO0SE6RIfoEB2iQ+xfxD5Ohrabjn8/a4YO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEh+gQHaJDdIgO0SE6RIfoEB2iQ3SIDtEhOkSH6BAdokN0iA7RITpEhxx9h0/AHLeomecbFAAAAABJRU5ErkJggg=="
    },
    {
        name: "Denmark",
        capital: "Copenhagen",
        population: 5717014,
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAALVBMVEXGDDD////EACLfkZrFACbYdIDotLrDABzDABXWbnznsbfBAAPejpjy1NfdjJX1293UAAABYklEQVR4nO3ay01DQRREwdM2mD/5hwsJ4I0fEhZ1EuhRbe/U4T087ucuT8cP/r0QIEAQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQh6A4JTof3/HKF4PXt+MEb63x475crBB+fxw/eWFee+09CgADBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEHznpnh2WT79wrn+7v4XHB8CBAhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAE3R/BF+GGRIscpa+NAAAAAElFTkSuQmCC"
    },
    {
        name: "Iceland",
        capital: "Reykjavík",
        population: 334300,
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAbFBMVEUBOZjWKCf////+/////v/WKCnYJycmSowBOpXVKSXUGx3YlpYANJ3MERLaJyrAEQ7x3t7d6Ou2w88AHogBOJwAJJEBOZcAO5IAIIMDN5wAJ40AM6AAGYkmSY/VhoXSICAAIJImS4kEOHu7xs99SbdjAAAC4ElEQVR4nO3b61LaUBRA4cNJtMHSexpLrfXS93/HcnF1phCQMPsMAdfnHx0MO67JUSFJSjGa9tuXXNe5zlWVP3+YTCf/m378lOsqL78l56/fUxM0d3wsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBJo5oNKtJdaom27YSXmzbw99U4X0TW37Y8BJX6m26479U5vaiIcUWJRb1zSLEZ792tAice7NmhunPQuxtP986JEPqzEn+f7p6C5cVKO9VqJ8UpVmNXzHVYibmicVAd5+RkPKxE1NJKrA6cpMcYkYavjn8WTbpW4ul6VyONcF2vxx0TuOSbWJcYt8G/HSu5dHZQIHhYq8Us/13t6bT64c6P11/uOiTpoUvhG0atj5TxXx/sCfj9MNk2vH0pMCpRuCtgOsVRiUqB0XUJviSKT4qRpCb0likyK4zGBdFVAb4hJiUmBUv9ev0GWgCVgCVgCloAlYAlYApaA/20j/BXYK+Wjx8Up8qq8P0KJSYGij4n1Gti9OsZ7UBR59+6mt0SRSXF8Rxe+y4/4EvvOgY1Z+NnA6mzPBoa3PdtjIvzse+VVAytnfCVJ8PO9+auLlofX+pMDS9T13jP6J+BViHB1wKuVcaIr2GcjvII95I6AY+5qCBkcKOYmkYu40yV1Oz72PLT1rW3bzQbe/bTY5IhJR+3egRsFGXhH3CXfG+hdki8sAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFLwBKwBCwBS8ASsAQsAUvAErAELAFL4PxL/AUATWqJ9P/mvwAAAABJRU5ErkJggg=="
    }]

let countryList = document.getElementById("countryList");

function newTextElem(text, type) {
    let myElem = document.createElement(type)
    myElem.textContent = text;
    
    return myElem;
}

countries.forEach(country => {
    let elem = newCountryDiv(country);
    countryList.appendChild(elem);
});

function newCountryDiv(country) {
    
    let myDiv = document.createElement("div");
    myDiv.className = "country";

    let myTitle = newTextElem(country.name, "H3")

    myDiv.append(myTitle);

    let myInfoDiv = newInfoDiv(country);
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

function newInfoDiv(country) {
    let myDiv = document.createElement("div");

    let myCapital = newTextElem("Pääkaupunki:" + country.capital, "p");
    let myPopulation = newTextElem("Asukasluku:" + country.population, "p");
    let myImage = document.createElement("img");
    myImage.src = country.flag;

    myDiv.append(myCapital, myPopulation, myImage);

    return myDiv;
}