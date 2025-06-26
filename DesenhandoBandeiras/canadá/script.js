const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function corVermelhaprimeiroLado(){
    lapis.fillStyle = "red";
    lapis.fillRect(0, 0, 200, 400);

}

function corVermelhasegundoLado(){
    lapis.fillStyle = "red";
    lapis.fillRect(400, 0, 200, 400);

}

function corBranca(){
    lapis.fillStyle = "white";
    lapis.fillRect(200, 0, 200, 400);

}

function logoBandeira(){
    const logo = new Image();
    logo.onload = function() {
        lapis.drawImage(logo, 200, 100, 200, 200); 
    };

    logo.src = "foto.png";
    
}


function contornoDaBandeira(){
    lapis.fillStyle = "black";
    lapis.strokeRect(0, 0, 600, 400);

}

corVermelhaprimeiroLado();
corBranca();
corVermelhasegundoLado();
logoBandeira();
contornoDaBandeira();