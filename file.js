const costToKm = 0.21;
const maxAge = 60;
const minAge = 18;

/*Calcolo il prezzo dai dati input km inseriti dal clt */
function calcolatePrice(km, priceToKm) {
    const TotalPrice = km * priceToKm;
    return TotalPrice;
};



/*Mi Calcolo Lo sconto */
function calcolatediscount(price, age, km) {
    if (age <= minAge) {
        let totalDiscount = price * 0.2;
        let totalPrice = price - totalDiscount;
        return totalPrice.toFixed(2)
    } else if (age >= maxAge) {
        let totalDiscount = price * 0.4;
        let totalPrice = price - totalDiscount;
        return totalPrice.toFixed(2)
    } else {
        let totalPrice = km * costToKm;
        return totalPrice.toFixed(2)
    }
};

/*Inserisco i dati nel HTML */
function insertIntoHTML(endPrice) {
    let div = document.getElementById("divC");
    div.innerHTML = `<p> ${endPrice}€</p>`;
};

/*In questa funzione prendo il valore presente all'interno degli input li controllo e se non sono vuoti procedo con la stampa nel HTML */
function populateHTMl() {
    const inputEta = document.getElementById("inputEta").value;
    const inputKm = document.getElementById("inputKm").value;

    if (inputEta == "" || inputKm == "") {
        alert("non hai inserito alcun dato");
    } else {
        let price = calcolatePrice(inputKm, costToKm);
        let scontoFInale = calcolatediscount(price, inputEta, inputKm)
        return insertIntoHTML(scontoFInale);
    };
}
/*Preso il bottone dal HTML lo lego all'evento del "click echiamo la funzione che mi poopola l?HTML" */
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    populateHTMl()
});

/*Cancello i dati dopo l'utilizzo al caricamento della pagina */
window.addEventListener("load", (e) => {
    document.getElementById("inputEta").value = "";
    document.getElementById("inputKm").value = "";
   
})


