// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalin() {  
  
    // raccolgo la lunghezza della parola  
    const length = userWord.length;  
  
    // divido la parola in 2
    for (let i = 0; i < length / 2; i++) {  
   
        if (userWord[i] !== userWord[length - 1 - i]) {  
            alert("non è palindroma");  
        }else{
            alert("è palindroma")
        }  
    }   
}  
  
// inserisco la funzione e il prompt all'interno del risultato 
const userWord = prompt("inserisci una parola");  

const result = isPalin(userWord);  