let myNimesi = document.getElementById("nimesi");
let myName = document.getElementById("name");
let myGo1 = document.getElementById("go1");

let myIkäText = document.getElementById("ikä");
let myIkaNum = document.getElementById("ika");
let myGo2 = document.getElementById("go2");

let myAlaraja = document.getElementById("alaraja");
let myYläraja = document.getElementById("yläraja");
let myArvaa = document.getElementById("arvaa");
let myLotto = document.getElementById("lotto");
let myGo3 = document.getElementById("go3");



function nimesi() {
    let name = myName.value;
    myNimesi.innerText = "Hei, " + name + " oletko valmin aloittamaan?";
}

myGo1.addEventListener("click", nimesi);


let ika = myIkaNum.value;
function ikä() {
    ika = myIkaNum.value;
    if (ika < 18) {
        myIkäText.innerText =
            ika + " vuotias on liian nuori";
    } else if (ika >= 18 && ika < 129) {
        myIkäText.innerText =
            ika + " vuotias on täysi-ikainen";
    } else if (ika > 130) {
        myIkäText.innerText =
            "älä valehtele et ole " + ika + " vuotias";
    } else {
        myIkäText.innerText =
            ika + " ei ole numero";
    }
}
myGo2.addEventListener("click", ikä);

function lotto() {
    if (ika >= 18) {

        let alaraja = Number(myAlaraja.value);
        let yläraja = Number(myYläraja.value);
        let arvaa = Number(myArvaa.value);

        let result = Math.random() * (yläraja - alaraja + 1) + alaraja;
        let s = Math.ceil(result);
        if (alaraja == null || yläraja == null) {
            myLotto.innerHTML =
                "ala- tai yläraja on null";
        } else if (alaraja == yläraja) {
            myLotto.innerHTML =
                "alaraja ja yläraja ei voi olla samat";
        } else if (alaraja < 0 || yläraja < 0) {
            myLotto.innerHTML =
                "alaraja tai yläraja ei voi olla negatiivinen luku";
        }  else if (arvaa == s) {
            myLotto.innerHTML =
                "arvasit oikein";
        } else if (alaraja > yläraja) {
            myLotto.innerHTML =
                "alaraja oli isompi kuin yläraja";
        } else if (arvaa < alaraja) {
            myLotto.innerHTML =
                "arvaus meni " + alaraja + " alle";
        } else if(arvaa > yläraja) {
            myLotto.innerHTML =
                "arvaus meni " + yläraja + " yli";
        } else if (arvaa != s) {
            myLotto.innerHTML =
                "arvasit väärin tulos oli " + s;
        }
    }else if (ika < 18) {
            myLotto.innerHTML =
                "et ole täysi-ikäinen";
        }
}

myGo3.addEventListener("click", lotto);