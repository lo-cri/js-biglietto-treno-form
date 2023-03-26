// const prezzo = 0.21;
// const sconto_minori = 0.2;
// const sconto_anziani = 0.4; 


// const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
// const age = parseInt(prompt("Quanti anni hai?"));


// let price = km * prezzo;


// if (age < 18) {
//   price = price - (price * sconto_minori);
// } else if (age >= 65) {
//   price = price - (price * sconto_anziani);
// }


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // previene l'invio del form

    var km = document.getElementById("km").value;
    var eta = document.getElementById("eta").value;

    // Effettua il calcolo del prezzo del biglietto
    var prezzo = km * 0.21; // costo base
    if (eta < 18) {
        prezzo *= 0.2; // sconto 20% per i minori di 18 anni
    } else if (eta >= 65) {
        prezzo *= 0.4; // sconto 40% per gli over 65
    }

    document.getElementById("risposta").innerHTML="Il prezzo del tuo biglietto è: " + prezzo.toFixed(2) + "€";
});