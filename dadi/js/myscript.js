const button = document.querySelector(".button")

let numeroutente = document.getElementById("numeroutente")

button.addEventListener("click",
    function () {
        let inputnumeroutente = numeroutente.value;

        let numerocpu = Math.floor(Math.random() * 6) + 1;
        document.getElementById("numerocpu").innerHTML = numerocpu
        
        if (inputnumeroutente > numerocpu) {
            document.querySelector(".risultato").innerHTML = "Complimenti! Hai vinto!"
        } else if (inputnumeroutente < numerocpu) {
            document.querySelector(".risultato").innerHTML = "Hai perso! Ritenta!"
        } else {
            document.querySelector(".risultato").innerHTML = "Wow, tu e la cpu avete intesa!"
        }
    }

);