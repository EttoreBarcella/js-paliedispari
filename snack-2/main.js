// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// funzione random number 
function rrandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione se è pari
function isEven(num){
    return num%2===0;
}



let userWin;
do{
    userWin = prompt("Pari o Dispari?");
    userWin = userWin.toLocaleLowerCase();
} while( userWin !== "pari" &&  userWin !== "dispari")

let userNumber;
do{
    userNumber = Number(prompt("inserisci un numero tra 1 e 5!"));
} while((userNumber<1 || userNumber>5) || isNaN(userNumber)) 

const sum = userNumber + rndRangeNumber(1,6);
console.log(userWin,userNumber, numCPU, sum);

if((isEven(sum) && userWin==="pari") || (!isEven(sum) && userWin==="dispari")){ 
    console.log("hai vinto!");
} else { 
    console.log("hai perso!");
}
