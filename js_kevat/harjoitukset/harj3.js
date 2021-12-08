function teht1() {
    let nimi = prompt("Please enter your name");
    let date = prompt("Please enter date");
    alert(nimi + ", " + date);
}

function teht2() {
    num1 = prompt("anna numero");
    num2 = prompt("anna toinen numero");

    yht = eval(num1) + eval(num2);
    alert(num1 + " + " + num2 + " = " + yht);
}

let add1 = 0;
function teht3() {
    add1++;
    alert(add1);
}

function teht4() {
    let num1 = prompt("anna numero");
    let num2 = prompt("anna toinen numero");
    if (num1 > num2) {
        alert(num1 + " on isompi kuin " + num2);
    } else if (num2 > num1) {
        alert(num2 + " on isompi kuin " + num1);
    } else {
        alert("numerot ovat samat")
    }
}
function teht5() {
    let ika = prompt("anna ikä");
    if (ika == ""){
        alert("kirjoita numero");
    } else if (ika < 18) {
        alert("et ole 18+");
    } else if (ika <= 18) {
        alert("täysi-ikäinen");
    }
}
function lisa1(){
    let kanta = prompt("anna kanta");
    let korkeus = prompt("anna korkeus");

    yht = Math.floor(eval(kanta) + eval(korkeus)/2);
    alert(kanta + " * " + korkeus + " / 2 = " + yht);
}

function lisa2(){
    let adj = prompt("anna adjektiivi");
    let nimi = prompt("anna nimi");
    let verbi = prompt("anna verbi");
    let paikka = prompt("missä?")

    alert("Eilen " + adj + " " + nimi + " oli " + verbi + " " + paikka);
}