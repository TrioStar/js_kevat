console.log("------------------uudet tehtävät------------------");

console.log("------------------Tehtävä 1------------------");

let opiskelijat = ["Tiina","Pekka","Minna"];
console.log(opiskelijat)

opiskelijat.push("Janne")
console.log(opiskelijat)

opiskelijat.push("Aku Ankka")
console.log(opiskelijat)

console.log(opiskelijat.lenght)

console.log(opiskelijat.pop())

for(let i=0; i < opiskelijat.lenght; i++) {
    console.log(`${i}, " : ",${opiskelijat[i]}`);
}

opiskelijat.forEach((element, i) => {
    console.log(`${i}, " : ",${element[i]}`);
});

let opiskelija1 = {nimi: "Tiina", ikä: 47, sähköposti: "testi@testi.net"}
let opiskelija2 = {nimi: "Pekka", ikä: 33, sähköposti:  "testi1@testi.net"}
let opiskelija3 = {nimi: "Minna", ikä: 22, sähköposti:  "testi2@testi.net"}
let opiskelija4 = {nimi: "Aku Ankka",osoite: "tampere",puh:000111222333, ikä: 33, sähköposti: "aku.ankka@ankkalinna.com"}

let olio_opiskelijat = [opiskelija1, opiskelija2, opiskelija3, opiskelija4];

function tulostaOpiskelja() {
    return (`Nimi: ${opiskelija1.nimi}, osoite: ${opiskelija4.osoite}, ikä: ${opiskelija2.ikä}, sähköposti: ${opiskelija3.sähköposti}`);
}

olio_opiskelijat.forEach(opiskelija => {
    console.log(tulostaOpiskelja(opiskelija));
});