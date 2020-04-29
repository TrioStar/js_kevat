console.log("- - - - - - - - uudet tehtävät - - - - - - - -");
console.log("▐");
console.log("Hello World");

console.log("------------------Tehtävä 1------------------");

function tervehdi(nimi) {
    return `Hei, ${nimi}. Mitä kuuluu?`;
}

console.log(tervehdi("Star"));

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

console.log(osamäärä(2, 2))
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

console.log(robotti(398))
console.log(robotti(675))
console.log(robotti(964))

console.log("------------------Tehtävä 8------------------");

function taksimatka(lasku) {
    
}

console.log(taksimatka())

console.log("------------------Tehtävä 9------------------");

function pyöristä(pyöristys) {
    desi = 0,5;
    let x = pyöristys;
    var answer = x + desi;
    return `${x} + ${desi} = ${answer}`;
}

console.log(pyöristä(3))

console.log("------------------Tehtävä 10------------------");

function tuoteen_hinta(hinta) {
    
}

console.log(tuoteen_hinta())