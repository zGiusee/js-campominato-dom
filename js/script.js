// CREO LA FUNZIONE CHE FACCIA IL SINGOLO QUADRATO DELLA GRIGLIA
function createSquare(num){

    // Creo il quadrato
    const square = document.createElement('div');

    // Aggiungo la classe di presonalizzazione
    square.classList.add('square');

    // Aggiungo il numero dentro il quadrato 
    square.innerText = num;

    // BONUS AL CLICK CAMBIA COLORE
    square.addEventListener('click', function(){
        this.classList.toggle('clicked')

        // Mostro a video quale cella sia stata cliccata
        console.log(`Numero della cella: ${this.innerText}`)
    })

    // Faccio tornare il risultato
    return square;
}

// CREO LA FUNZIONE CHE ESEGUA UN CICLO E CHE MOLTIPLICHI LA QUANTITà 
// DI QUADRATI CHE VOGLIO AVERE NELLA GRIGLIA
function generateGrid(){

    griglia.innerHTML = "";

    for(let i = 0; i< 100; i++){

        // Richiamo la funzione con la variabile square
        let square = createSquare(i+1);
    
        // Appendo i quadrati alla griglia
        griglia.appendChild(square);
    }    
}

// RECUPERO IL CONTENITORE DEI QUADRATI/GRIGLIA
const griglia = document.getElementById('griglia');

// RECUPERO IL BOTTONE CHE GENERERà LA GRIGLIA
let playButton = document.getElementById('play');

// AGGIUNGO AL BOTTONE LA FUNZIONE PRECEDENTEMENTE CREATA
playButton.addEventListener('click', function(){

    generateGrid();
})