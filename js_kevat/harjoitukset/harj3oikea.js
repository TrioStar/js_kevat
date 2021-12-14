function nimesi() {
    let nimi = prompt("anna nimesi");
    document.getElementById("txttulos").innerHTML =
        "Hei, " + nimi + " oletko valmin aloittamaan?";
}
let ika = 0;
function ikä() {
    ika = prompt("anna ikasi");

    if (ika < 18) {
        document.getElementById("txttulos2").innerHTML =
            ika + " vuotias on liian nuori";
    } else if (ika >= 18 && ika < 129) {
        document.getElementById("txttulos2").innerHTML =
            ika + " vuotias on täysi-ikainen";
    } else if (ika > 130) {
        document.getElementById("txttulos2").innerHTML =
            "älä valehtele et ole " + ika + "vuotias";
    } else {
        document.getElementById("txttulos2").innerHTML =
            ika + " ei ole numero";
    }

}

function lotto() {
    if (ika >= 18) {

        let alaraja = prompt("anna alaraja");
        let yläraja = prompt("anna yläraja");
        let arvaa = prompt("arvaa " + alaraja + " ja " + yläraja + " välillä");

        let result = Math.random() * (eval(yläraja) - eval(alaraja) + 1) + eval(alaraja);
        let s = Math.floor(result);
        if (alaraja == null || yläraja == null) {
            document.getElementByI("txtlotto").innerHTML =
                "ala- tai yläraja on null";
        } else if (alaraja == yläraja) {
            document.getElementById("txtlotto").innerHTML =
                "alaraja ja yläraja ei voi olla samat";
        } else if (alaraja < 0 || yläraja < 0) {
            document.getElementById("txtlotto").innerHTML =
                "alaraja tai yläraja ei voi olla negatiivinen luku";
        }  else if (arvaa == s) {
            document.getElementById("txtlotto").innerHTML =
                "arvasit oikein";
        } else if (alaraja > yläraja) {
            document.getElementById("txtlotto").innerHTML =
                "alaraja oli isompi kuin yläraja";
        } else if (arvaa < alaraja || arvaa > yläraja) {
            document.getElementById("txtlotto").innerHTML =
                "et arvannu " + alaraja + " tai " + yläraja + " välillä";
        } else if (arvaa != s) {
            document.getElementById("txtlotto").innerHTML =
                "arvasit väärin tulos oli " + s;
        }
    }else if (ika < 18) {
            document.getElementById("txtlotto").innerHTML =
                "et ole täysi-ikäinen";
        }
}