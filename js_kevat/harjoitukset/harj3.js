console.log("- - - - - - - - uudet tehtävät - - - - - - - -");

function fritename() {
    var firstname = document.getElementById("firstname").value;
    alert(firstname);
    document.getElementById("result").innerHTML = firstname;
}

function age_check() {
    alert("mois");
    var check_age = document.getElementById("txt_age_check").value;
    alert(check_age);
    //document.getElementById("result2").innerHTML = check_age;
    if (check_age < 16) {
        alert("olet liian nuori pelaamaan tätä peliä");
    } else {
        alert("hyvä, jatketaan");
         ("hyvä, jatketaan");
    }
}