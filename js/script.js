// DEFINISCO LA FUNZIONE CHE GENERI 16 NUMERI CASUALI NON UGUALI TRA LORO
function rngUnique(bombs_array, squareNum){

    // Creo la flag
    let check_num = false;
    let random_num;

    // Eseguo un ciclo di verifica per i numeri che andranno dentro l'array
    while(!check_num){

        // Genero i numeri randomici
        random_num = Math.floor(Math.random() * squareNum + 1);

        // Definisco la condizione della verifica, 
        // in questo caso = Se l'array non ha nessun elemento uguale al numero randomico allora = true
        if(!bombs_array.includes(random_num)){
            check_num = true;
        }
    }

    return random_num;

}

// DEFINISCO LA FUNZIONE CHE GENERI LE BOMBE
function bombGen(num_of_bombs, squareNum){

    // Definisco l'array dove andranno inserite le bombe
    let bombs = [ ];

    // Creo il ciclo che generi le bombe
    for(i = 1; i < num_of_bombs; i++){

        bombs.push(rngUnique(bombs, squareNum));
    }

    return bombs;

}

// DEFINISCO LA FUNZIONE CHE FACCIA IL SINGOLO QUADRATO DELLA GRIGLIA
function createSquare(num, squarePerRow){

    // Creo il quadrato
    const square = document.createElement('div');

    // Aggiungo la classe di presonalizzazione
    square.classList.add('square');

    // Modifico la grandezza dei quadrati usando i calcoli precedentementi fatti nella funzione 'generateGridContent'
    square.style.width = `calc(100% / ${squarePerRow} - 8px)`;
    square.style.height = square.style.width;

    // Aggiungo il numero dentro il quadrato 
    square.innerText = num;

    // Faccio tornare il risultato
    return square;
}

// DEFINISCO LA FUNZIONE CHE GENERI LA GRIGLIA IN BASE ALLA DIFFICOLTà
function generateGridContent(){

    // Creo lo switch per i livelli di difficolta della griglia
    const difficulty = document.getElementById('difficulty');

    // Creo la variabile per indicare la difficoltà del livello
    const livello = parseInt(difficulty.value);

    // Constante delle bombe
    const num_of_bombs = 16;
    
    // Bonus = il gioco si interrompe quando si trova una bomba
    // Creo la flag
    let gameOver = false;
    
    // Creo la variabile del punteggio
    let points = 0;
    
    // Creo la variabile del messaggio di vittoria o sconfitta della parita
    let result = document.getElementById('result');
    

    // Creo le due variabili per i quadrati la 1' per quelli totali e la 2' per quelli per riga
    let squareNum;
    let squarePerRow;
 
    switch(livello){
         case 1:
            squareNum = 100;
            break;
         case 2:
            squareNum = 81;
            break;
         case 3:
            squareNum = 49;
            break;
         default:
            alert('seleziona isadoin')
            return;
            
    }

    // Effettuo il calcolo della radice quadrati di 'squareNum' per avere il numero delle righe
    squarePerRow = Math.sqrt(squareNum);

    // Richiamo la funzione delle bombe
    const bombs = bombGen(num_of_bombs, squareNum);
    console.log(bombs);

    // Reset della griglia
    griglia.innerHTML = "";

        for(let i = 1; i <=squareNum; i++){
 
            // Richiamo la funzione con la variabile square
            let square = createSquare(i, squarePerRow);
        
            // Aggiungo le condizioni di gioco
            square.addEventListener('click', function(){           

                if(!gameOver){
                    if(!bombs.includes(i)){
                        
                        // Condizione per un solo click per quadrato
                        if(!this.classList.contains('clicked')){

                            this.classList.add('clicked');

                            points++;
                            
                            // Indico dove far visualizzare il punteggio
                            document.getElementById('punteggio').innerText = `Il tuo punteggio è di : ${points}`;
                        }

                    }
                    else{

                        // Recupero i quadrati
                        const square = document.querySelectorAll('.square');

                        // Ciclo i quadrati
                        for(let i = 0; i < square.length; i++){

                            // Creo la condizione di ricerca dei quadrati con l'array delle bombe
                            if(bombs.includes(parseInt(square[i].innerText))){

                                square[i].classList.add('bomb');
                            }

                        }                        

                        this.classList.add('bomb')

                        // Attivo la variabile flag precedentemente dichiarata
                        gameOver = true;
                        
                        // Fornisco il messagio di partita persa indicandolo nel dom
                        result.innerText = 'BOOM! Hai preso una mina! Premi su Play per avviare una nuova parita!';
                    }

                }

            })

            // Appendo i quadrati alla griglia
            griglia.appendChild(square);
        }    

    // Eseguo il reset delle scritte in caso di nuova partita
    document.getElementById('punteggio').innerText = ' ';
    result.innerText = ' ';

}


// RECUPERO IL CONTENITORE DEI QUADRATI/GRIGLIA
const griglia = document.getElementById('griglia');

// RECUPERO IL BOTTONE CHE GENERERà LA GRIGLIA
let playButton = document.getElementById('play');

// AGGIUNGO AL BOTTONE LA FUNZIONE PRECEDENTEMENTE CREATA
playButton.addEventListener('click', function(){
    generateGridContent();
})