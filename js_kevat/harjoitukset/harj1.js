console.log("- - - - - - - - uudet tehtävät - - - - - - - -");
console.log("Hello World");

console.log("------------------Tehtävä 1------------------");

function tervehdi(nimi) {
    return `Hei, ${nimi}. Mitä kuuluu?`;
}

console.log(tervehdi("arlet"));

console.log("------------------Tehtävä 2------------------");

function korosta(summa) {
    return Math.pow(summa, 2);
}

console.log("x korostuna 2");
console.log(korosta(4));

console.log("------------------Tehtävä 3------------------");

function ikatesti(ika) {
   if (ika >= 18) {
       return "Olet täysi-ikäinen";
   } else {
       return "Olet ala-ikäinen";
   }
} 

console.log(ikatesti(10));
console.log(ikatesti(20));

console.log("------------------Tehtävä 4------------------");

function suurempi(x, y) {
    if (x > y) {
        return `annetuista luvuista ${x} ja ${y} on suurempi ${x}`;
    } else {
        return `annetuista luvuista ${x} ja ${y} on suurempi ${y}`;
    }
}

console.log(suurempi(4, 5));
console.log(suurempi(8, 3));
console.log(suurempi(-2, -1));

console.log("------------------Tehtävä 5------------------");

function pinta_ala(kanta, korkeus) {
    var ala = kanta * korkeus / 2;
    let x = Math.round(ala*10)/10;
    return `${kanta} * ${korkeus} / 2 = ${x}`
}

console.log(pinta_ala(3,4))
console.log(pinta_ala(23,2.2))

console.log("------------------Tehtävä 6------------------");

function osamäärä(jaettava, jakava) {
    var summa = jaettava / jakava;
    return `${jaettava} / ${jakava} = ${summa}`
}

console.log(osamäärä(0, 2))
console.log(osamäärä(64, 8))

console.log("------------------Tehtävä 7------------------");

function robotti(aalonpituus) {
    let vari = "";
    if (aalonpituus >= 380 && aalonpituus <= 449) {
        vari = "voiletti";
    } else if (aalonpituus >= 450 && aalonpituus <= 489) {
        vari = "sininen";
    } else if (aalonpituus >= 490 && aalonpituus <= 559) {
        vari = "vihreä";
    } else if (aalonpituus >= 560 && aalonpituus <= 589) {
        vari = "keltainen";
    } else if (aalonpituus >= 590 && aalonpituus <= 629) {
        vari = "oranssi";
    } else if (aalonpituus >= 630 && aalonpituus <= 760) {
        vari = "punainen";
    } else {
        vari = "en tiedä";
    } return vari;
}

console.log(robotti(400))
console.log(robotti(675))
console.log(robotti(460))
console.log(robotti(964))

console.log("------------------Tehtävä 8------------------");

function taksimatka(km, pp) {
    let taksa = null; 

    if (pp == 1 || pp == 2) {
        taksa = 1.6;
    } else if (pp == 3 || pp == 4) {
        taksa = 1.9;
    } else if (pp == 5 || pp == 6) {
        taksa = 2;
    } else if (pp >= 6) {
        taksa = 2.2;
    } 
    var lasku = km * taksa + 5.40;
    return `Taksimatka hinta on ${lasku}`
} 

console.log(taksimatka(3, 5))

console.log("------------------Tehtävä 9------------------");

function pyöristä(x) {
    if (x >= 0) {
        return Math.floor(x + 0.5);
    } else {
    return Math.ceil(x - 0.5);
}
}

console.log(pyöristä(3.7))

console.log("------------------Tehtävä 10------------------");

function tuoteen_hinta(euro, alv) {
    ale = null;
    if (euro >= 100 && euro <= 200) {
        ale = 10;
    } else if (euro >= 200 && euro <= 500) {
        ale = 15;
    } else if (euro >= 500) {
        ale = 20;
    } 
    var hinta = euro * ale / 100; 
    var maksaa = euro - hinta;
    maksaa = Math.floor(maksaa * (alv + 1) * 100) / 100;
    return `alennus on ${hinta} ja tuote maksaa ${maksaa}, alv on ${alv}`;
}

console.log(tuoteen_hinta(20, 0.24))
console.log(tuoteen_hinta(143, 0.19))
console.log(tuoteen_hinta(353, 0.24))
console.log(tuoteen_hinta(1862, 0.19))