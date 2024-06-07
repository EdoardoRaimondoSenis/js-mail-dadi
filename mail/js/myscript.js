const mailvalide = ["gigino@gmail.com", "gigetto@gmail.com", "pinco@gmail.com", "pallino@gmail.com", "giechino@gmail.com", "puntino@gmail.com"];

const mail = document.getElementById("risultato");

const button = document.querySelector("button");

button.addEventListener("click",
    function () {
        let inputmail = mail.value
        console.log(inputmail)
        for (let i = 0; i <= mailvalide.length; i++) {
            if (mailvalide[i] == inputmail) {
                console.log(i)
                console.log(inputmail)
                document.querySelector(".messi").innerHTML = "Benvenuto " + inputmail;
            } else {
                document.querySelector(".messerr").innerHTML = "Email errata";
            }
        }
        
    }
);