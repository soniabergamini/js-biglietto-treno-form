// Il click sul pulsante 'Crea Biglietto' determina l'inizio del programma:
document.getElementById('createTicket').addEventListener("click",
    function createTicket(event) {

        console.warn("Interaction: Click on CreateTicket Button.");

        // Rimozione Dettagli di Viaggio (per chi cambia i valori nel form a biglietto già creato).
        document.getElementById('viewMyTicket').style.display = 'none';

        // Variabile Nome e Cognome (yourname)
        var yourname = document.getElementById('formNameSurname').value;

        // Verifica la validità dei dati nella Variabile Nome e Cognome (yourname)
        if (yourname == null || yourname == "" || yourname.length < 4) {

            // In caso la variabile Nome e Cognome (yourname) contenga dati mancanti, nulli o non validi:
            console.error(`'Invalid data for variable yourname. User input: ${yourname}`);
            document.getElementById('guideText').innerText = ("Il valore inserito per il nome non è valido. Riprova.");
            document.getElementById('guideText').style.display = 'block';

        } else {

            // In caso la variabile Nome e Cognome (yourname) contenga dati corretti
            // console.log(`User declared the name: ${yourname}. The value is valid.`);

            // Variabile Età del Passeggero (age)
            let age = document.getElementById('formAge').value;
            // console.log(`User declared the age: ${age}. The value is valid.`);

            // Variabile Chilometri (kilometres)
            let kilometres = Number( document.getElementById('formKm').value );
            
            // Verifica la validità dei dati nella Variabile Chilometri (kilometres)
            if (kilometres < 1 || isNaN(kilometres) == true) {

                // In caso la variabile Chilometri (kilometres) contenga dati mancanti, nulli o non validi:
                console.error(`Invalid data for variable kilometres. User input: ${kilometres}`);
                document.getElementById('guideText').innerText = ("Il valore inserito per la distanza in km non è corretto. Riprova.");
                document.getElementById('guideText').style.display = 'block'
                
            } else {
                // In caso la variabile Chilometri (kilometres) contenga dati corretti, l'utente può procedere.
                // console.log(`User declared the kilometres: ${kilometres}. The value is valid.`);

                // Dichiarazione Informazioni di viaggio
                document.getElementById("title").innerText = `Benvenuto ${yourname}!`;
                document.getElementById("finalText").innerText = "ExpressTrain ti augura buon viaggio";
                document.getElementById("ticketDetails").innerText = "I dettagli del tuo viaggio:";
                document.getElementById("ticketName").innerText = `${yourname}`;
                document.getElementById("ticketAge").innerText = `${age}`;
                document.getElementById("ticketKm").innerText = `${kilometres}`;
                document.getElementById('ticketInfo').style.display = 'block'

                // Biglietto: Calcolo Prezzo Base
                let ticketPrice = 0.21 * kilometres;

                // Biglietto: Calcolo Prezzo Condizionale
                if (age == "Minorenne") {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 20% minorenni
                    ticketPrice *= 0.8;
                    // console.log("Ticket for Under18 users. Discount applied.");

                } else if (age == "Più di 65 Anni") {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 40% dedicato agli over 65 anni
                    ticketPrice *= 0.6;
                    // console.log("Ticket for Over65 users. Discount applied.");

                } // Non è necessario specificare un else vuoto.

                // Dichiarazione del Prezzo del biglietto per tutti gli utenti che hanno inserito dati validi
                ticketPrice = ticketPrice.toFixed(2);
                document.getElementById("ticketPrice").innerText = `€${ticketPrice}`; 
                console.log(`Ticket successfully created. The price for ${yourname}'s Ticket, who wishes to travel ${kilometres}km, is: €${ticketPrice}.`);

                // Visibilità dei dati nel form post-creazione Biglietto
                event.preventDefault();

                // Click sul Pulsante 'Il Mio Biglietto' "myTicket":
                document.getElementById('myTicket').addEventListener("click",
                    function viewMyTicket() {

                        // Variabile Carrozza Treno
                        let ticketCoach = Math.floor(Math.random() * 11);
                        
                        // Variabile Codice Biglietto
                        let ticketCode = Math.floor(Math.random() * 10001);

                        // Visualizzazione Biglietto:
                        document.getElementById('myTicketName').innerText = (`${yourname}`);
                        document.getElementById('myTicketCoach').innerText = (`${ticketCoach}`);
                        document.getElementById('myTickedCode').innerText = (`${ticketCode}`);
                        document.getElementById('viewMyTicket').style.display = 'flex';
                    }
                )
            }
        }
    }
);

// Click sul pulsante 'Cancella':
document.getElementById('resetTicket').addEventListener("click",
    function(){

        // Rimozione testo di errore:
        document.getElementById('guideText').style.display = 'none';

        // Rimozione Dettagli di Viaggio
        document.getElementById('viewMyTicket').style.display = 'none';
        document.getElementById('ticketInfo').style.display = 'none';
    }
);

// Click su input "fornNameSurname":
document.getElementById('formNameSurname').addEventListener("click",
    function () {

        // Rimozione testo di errore:
        document.getElementById('guideText').style.display = 'none';
    }
);

// Click su input "formKm":
document.getElementById('formKm').addEventListener("click",
    function () {

        // Rimozione testo di errore:
        document.getElementById('guideText').style.display = 'none';
    }
);