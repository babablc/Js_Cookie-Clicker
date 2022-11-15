// VARIABLES
// image poussin
var poussin = document.querySelector("#poussin");
// balise image poussin
var clicker = document.querySelector('#clicker');
// nombre oeufs
var counter = document.querySelector('#counter');
//total nombre oeufs
var totaloeuf = document.querySelector('#totaloeuf');
// 
var num = 1;
var oeuf = 0;
var oeuf_depuis_la_nuit_des_temps = 0;
// amélioration
var first_amelioration = document.querySelector('#first_amelioration');


// DEMANDE NOM

window.onload = function () {
    var name = prompt("C'est quoi ton petit nom ?");
    var space = document.getElementById("space");
    
    space.innerHTML = "Poussin de " + name;
}

// POUSSIN SURVOL

document.querySelector("#clicker").addEventListener

// POUSSIN

poussin.addEventListener("mousedown", sourisEnBas)
poussin.addEventListener("mouseup", sourisEnHaut)


function sourisEnBas() {
    poussin.src="images/DuckClick.png";
    clicker.style.width = '53%';
    createNumberOnClicker();
}

function sourisEnHaut() {
    poussin.src="images/Duck.png";
    clicker.style.width = '50%';
}

// AMÉLIORATIONS

// cps
var cursorCost = 15;
var Cursors = 0;

var cursorcost = document.querySelector("#cursorcost");
var cursors = document.querySelector("#cursors");



function buyCursor(){
    if (oeuf >= cursorCost){
        oeuf = oeuf - cursorCost;
        Cursors = Cursors + 1;
        cursorCost = Math.round(cursorCost * 1.5) ;

        counter.innerHTML = "Oeufs : " + oeuf;
        cursorcost.innerHTML = cursorCost;
        cursors.innerHTML = Cursors;
        updateCPS();
    } else {
        alert("Pas assez d'oeufs mon grand");
    }
}


// grandma

var grandmaCost = 30;
var Grandmas = 0;

var grandmacost = document.querySelector("#grandmacost");
var grandmas = document.querySelector("#grandmas");

function buyGrandma(){
    if (oeuf >= grandmaCost){
        oeuf = oeuf - grandmaCost;
        Grandmas = Grandmas + 1;
        grandmaCost = Math.round(grandmaCost * 1.5) ;

        counter.innerHTML = "Oeufs : " + oeuf;
        grandmacost.innerHTML = grandmaCost;
        grandmas.innerHTML = Grandmas;
        updateCPS();
    } else {
        alert("Pas assez d'oeufs mon grand");
    }
}

// multiplier

var multipleCost = 100;
var Multiples = 0;

var multiplecost = document.querySelector("#multiplecost");
var multiples = document.querySelector("#multiples");


function buyMultiple(){
    if (oeuf >= multipleCost){
        oeuf = oeuf - multipleCost;
        Multiples = Multiples + 1;
        multipleCost = Math.round(multipleCost * 1.5) ;

        counter.innerHTML = "Oeufs : " + oeuf;
        multiplecost.innerHTML = multipleCost;
        multiples.innerHTML = Multiples;
        updateCLICK(2);
    } else {
        alert("Pas assez d'oeufs mon grand");
    }
}

// bonus

var bonusCost = 2000;
var TEMPS_DU_COMPTE_A_REBOURS = 10;

var bonuscost = document.querySelector("#bonuscost");

function buyBonus(){
    if (oeuf >= bonusCost){
        oeuf = oeuf - bonusCost;
        bonusCost = Math.round(bonusCost * 1.5) ;

        counter.innerHTML = "Oeufs : " + oeuf;
        bonuscost.innerHTML = bonusCost;
        value_before = clickupdate
        updateCLICK(2);
        setTimeout(function()  {clickupdate = value_before},TEMPS_DU_COMPTE_A_REBOURS * 1000);

        gestion_compte_rebours(TEMPS_DU_COMPTE_A_REBOURS);

    } else {
        alert("Pas assez d'oeufs mon grand");
    }
}


function gestion_compte_rebours(temps){
    var compteRebours = document.querySelector("#compte_rebours");
    compteRebours.innerHTML = "Temps restant : " + temps;

    setInterval(function decremente_compteur() {

        let secondes = temps
        secondes = secondes < 10 ? "0" + secondes : secondes
      
        compteRebours.innerHTML = "Temps restant : " + secondes;
        temps = temps - 1
        if(temps <0){ temps = 0}
        return decremente_compteur
    }(), 1000)
}



// cps update
var blockCPS = 0;
var blockcps = document.querySelector("#cps");

function updateCPS(){
    blockCPS = Cursors + Grandmas * 5;
    blockcps.innerHTML = "par seconde : " + blockCPS; 
}

// click update

var clickupdate = 1;

function updateCLICK(number){
    clickupdate = clickupdate * number;
}

// interval

setInterval(function() {   
    nb_oeufs = Cursors + Grandmas * 5 
    oeuf = oeuf + nb_oeufs; 
    oeuf_depuis_la_nuit_des_temps +=  nb_oeufs; 
    counter.innerHTML = "Oeufs : " + oeuf;
    document.title = oeuf + " Oeufs - Poussin Clicker";
}, 1000); // 1000ms = 1s


poussin.addEventListener("mouseup", nombreoeuf)

function nombreoeuf(){
    oeuf = oeuf + clickupdate*num;
    oeuf_depuis_la_nuit_des_temps += clickupdate*num;
    counter.innerHTML = "Oeufs : " + oeuf;
}

// NOMBRE SUR LE CLIC

var nombreClic = document.querySelector("#nombre-clic-add");

function createNumberOnClicker(){
    nombreClic.textContent = "+" + clickupdate;
    nombreClic.classList.remove('.nombre-clic-add')
    nombreClic.classList.add('.nombre-clic-remove');
}

// SON

const audioElement = new Audio('son/poussin.mp3');

function audio(){
    audioElement.play()
}

// NOMBRE TOTAL OEUF

setInterval( function nbtotaloeuf(){
    totaloeuf.innerHTML = "Total oeufs : " + oeuf_depuis_la_nuit_des_temps;
},1000);