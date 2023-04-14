// Il click sul pulsante 'Crea Biglietto' determina l'inizio del programma:
document.getElementById('createTicket').addEventListener("click",
    function createTicket(event) {

        console.warn("Interaction: Click on CreateTicket Button.");

        // Richiesta dati: Variabile Nome e Cognome (yourname)
        let yourname = document.getElementById('formNameSurname').value;

        // Verifica la validità dei dati nella Variabile Nome e Cognome (yourname)
        if (yourname == null || yourname == "" || yourname.length < 2) {

            // In caso la variabile Nome e Cognome (yourname) contenga dati mancanti, nulli o non validi:
            alert("Sembra che il nome inserito non sia valido. Riprova, il tuo viaggio ti attende!");
            console.error(`'Invalid data for variable yourname. User input: ${yourname}`);

        } else {

            // In caso la variabile Nome e Cognome (yourname) contenga dati corretti, l'utente può procedere:
            document.getElementById("title").innerText = `Benvenuto su ExpressTrain ${yourname}!`;
            console.log(`User declared the name: ${yourname}. The value is valid.`);

            // Richiesta dati: Variabile Età del Passeggero (age)
            let age = document.getElementById('formAge').value;
            console.log(`User declared the age: ${age}. The value is valid.`);

            // Richiesta dati: Variabile Chilometri (kilometres)
            let kilometres = document.getElementById('formKm').value;
            
            // Verifica la validità dei dati nella Variabile Chilometri (kilometres)
            if (kilometres == null || kilometres == "" || kilometres < 1 || isNaN(kilometres) == true) {
                // In caso la variabile Chilometri (kilometres) contenga dati mancanti, nulli o non validi:
                alert("Il valore inserito non è valido. Riprova, il tuo viaggio ti attende!");
                console.error(`Invalid data for variable kilometres. User input: ${kilometres}`);
                
            } else {
                // In caso la variabile Chilometri (kilometres) contenga dati corretti, l'utente può procedere:
                console.log(`User declared the kilometres: ${kilometres}. The value is valid.`);

                // Biglietto: Calcolo Prezzo Base
                let ticketPrice = 0.21 * kilometres;

                // Biglietto: Calcolo Prezzo Condizionale
                if (age == "under18") {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 20% minorenni
                    ticketPrice *= 0.8;
                    console.log("Ticket for Under18 users. Discount applied.");

                } else if (age == "over65") {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 40% dedicato agli over 65 anni
                    ticketPrice *= 0.6;
                    console.log("Ticket for Over65 users. Discount applied.");

                } else {

                    // Biglietto: Sconto non applicabile per gli adulti 
                    console.log("Ticket for Adult users. Discount not applied.");

                }

                // Dichiarazione del Prezzo del biglietto per tutti gli utenti che hanno inserito dati validi
                console.log(`Ticket successfully created. The price for ${yourname}'s Ticket, who wishes to travel ${kilometres}km, is: €${ticketPrice.toFixed(2)}.`);

                // Visibilità dei dati nel form post-creazione Biglietto
                event.preventDefault();
            }
        }
    }
);



