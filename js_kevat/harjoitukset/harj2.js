let opiskelijat = ["Tiina", "Pekka", "Minna"];
console.log(opiskelijat);
opiskelijat.push("janne");

console.log(opiskelijat);
console.log(opiskelijat.length);
console.log(opiskelijat.pop())

for (i = 0; i < opiskelijat.length; i++) {
    console.log(`${i} : ${opiskelijat[i]}`);

}

opiskelijat.forEach((element, i) => {
    console.log(`${i} : ${element}`);
});

let opiskelija = opiskelijat.toString();
console.log("toString opiskelijat " + opiskelija);
let akuankka = { nimi: "aku ankka", ika: 32, sahkoposti: "aku@ankka.net" };

function tulostaankka(akuankka) {
    return (`nimi: ${akuankka.nimi}, ikä: ${akuankka.ika} sähköposti: ${akuankka.sahkoposti}`);
}

console.log(tulostaankka(akuankka))