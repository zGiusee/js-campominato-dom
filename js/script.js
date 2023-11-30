// CREO LA FUNZIONE CHE GENERI 16 NUMERI CASUALI NON UGUALI TRA LORO
function rngUnique(bombs_array){

    // Creo la flag
    let check_num = false;
    let random_num;

    // Eseguo un ciclo di verifica per i numeri che andranno dentro l'array
    while(!check_num){

        // Genero i numeri randomici
        random_num = Math.floor(Math.random() * 100 + 1);

        // Definisco la condizione della verifica, 
        // in questo caso = Se l'array non ha nessun elemento uguale al numero randomico allora = true
        if(!bombs_array.includes(random_num)){
            check_num = true;
        }
    }

    return random_num;

}

// CREO LA FUNZIONE CHE GENERI LE BOMBE
function bombGen(num_of_bombs){

    // Definisco l'array dove andranno inserite le bombe
    let bombs = [ ];

    // Creo il ciclo che generi le bombe
    for(i = 1; i<num_of_bombs; i++){

        bombs.push(rngUnique(bombs));
    }

    return bombs;

}


// CREO LA FUNZIONE CHE FACCIA IL SINGOLO QUADRATO DELLA GRIGLIA
function createSquare(num){

    // Creo il quadrato
    const square = document.createElement('div');

    // Aggiungo la classe di presonalizzazione
    square.classList.add('square');

    // Aggiungo il numero dentro il quadrato 
    square.innerText = num;

    // Faccio tornare il risultato
    return square;
}

// CREO LA FUNZIONE CHE ESEGUA UN CICLO E CHE MOLTIPLICHI LA QUANTITà 
// DI QUADRATI CHE VOGLIO AVERE NELLA GRIGLIA
function generateGrid(){

    const num_of_bombs = 16;

    griglia.innerHTML = "";

    for(let i = 1; i< 100; i++){

        // Richiamo la funzione con la variabile square
        let square = createSquare(i);
    
        // Aggiungo le condizioni di gioco
        square.addEventListener('click', function(){

            if(!bombs.includes(i)){
                this.classList.add('clicked')
            }
            else{
                this.classList.add('bomb')
            }

        })

        // Appendo i quadrati alla griglia
        griglia.appendChild(square);
    }    

    const bombs = bombGen(num_of_bombs);
    console.log(bombs)
}

// RECUPERO IL CONTENITORE DEI QUADRATI/GRIGLIA
const griglia = document.getElementById('griglia');

// RECUPERO IL BOTTONE CHE GENERERà LA GRIGLIA
let playButton = document.getElementById('play');

// AGGIUNGO AL BOTTONE LA FUNZIONE PRECEDENTEMENTE CREATA
playButton.addEventListener('click', function(){

    generateGrid();
})