function nimesi() {
    let nimi = prompt("anna nimesi");
    document.getElementById("txttulos").innerHTML =
        "Hei, " + nimi + " oletko valmin aloittamaan?";
}

function ikä() {
    let ikä = prompt("anna ikäsi");
    
    if(ikä < 18){
        document.getElementById("txttulos2").innerHTML =
        ikä + " vuotias on liian nuori";
    }else if(ikä >= 18 && ikä < 129) {
        document.getElementById("txttulos2").innerHTML =
        ikä + " vuotias on täysi-ikäinen";
    } else if (ikä > 130) {
        document.getElementById("txttulos2").innerHTML =
        "älä valehtele et ole " + ikä + "vuotias";
    } else {
        document.getElementById("txttulos2").innerHTML =
        ikä + " ei ole numero";
    }
    
}

function lotto() {
    let alaraja = prompt("anna alaraja");
    let yläraja = prompt("anna yläraja");
    let arvaa = prompt("arvaa " + alaraja + " ja " + yläraja + " välillä");

    let result = Math.random() * (eval(yläraja) - eval(alaraja) + 1) + eval(alaraja);
    let s = Math.floor(result);
    if(alaraja == yläraja){
        document.getElementById("txtlotto").innerHTML =
        "alaraja ja yläraja ei voi olla samat";
    } else if(arvaa == s) {
        document.getElementById("txtlotto").innerHTML =
        "arvasit oikein";
    } else if(alaraja > yläraja){
        document.getElementById("txtlotto").innerHTML =
        "alaraja oli isompi kuin yläraja";
    }else if(arvaa < alaraja || arvaa > yläraja){
        document.getElementById("txtlotto").innerHTML =
        "et arvannu " + alaraja + " tai " + yläraja + " välillä";
    } else if(arvaa != s) {
        document.getElementById("txtlotto").innerHTML =
        "arvasit väärin tulos oli " + s;
    }
}