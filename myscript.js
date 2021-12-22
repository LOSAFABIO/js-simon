// Descrizione:
// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete 
// bisogno per realizzare il programma.


let numeriArr = [];

const tabellaNumeri = document.getElementById("tabella");

const numVisibili = document.getElementById("numerivisibili");

generaNumeroRandom(5);

function generaNumeroRandom(numero){
    
    while(numeriArr.length < numero){
        let numero = Math.floor(Math.random() * 20) + 1;
        if(!numeriArr.includes(numero)){
            numeriArr.push(numero);
        }
        tabellaNumeri.innerHTML = numeriArr + " ";
    }
}
console.log(numeriArr);



setTimeout(myfunction, 3000)

function myfunction(){
    tabellaNumeri.classList.add("my_d-none");
    let numeriUtente = [];
    for(i=0; i<5; i++){
        let numUtente = parseInt(prompt("inserisci numero"));

        if (numUtente == numeriArr[i]){
            numeriUtente.push(numUtente);
            console.log(numUtente);
            console.log(numeriUtente);

        } else {
            console.log(numeriUtente);
        }

    }
    numVisibili.classList.add("numerivisibili");
    numerivisibili.innerHTML = "Numeri indovinati :" + " " + numeriUtente.length + " " + " i numeri che hai indovinato sono :" + numeriUtente;
}
