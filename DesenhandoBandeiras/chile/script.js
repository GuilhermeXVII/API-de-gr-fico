const telaEmBranco = document.querySelector("canvas");
const lapis = telaEmBranco.getContext("2d");

function corBranca(){
    lapis.fillStyle = "white";
    lapis.fillRect(200, 0, 600, 200);

}
function corVermelha(){
    lapis.fillStyle="red";
    lapis.fillRect(0, 200, 600, 200);

}

function corAzul(){
    lapis.fillStyle="DarkBlue"
    lapis.fillRect(0, 0, 200, 200);

}

function estrela(){
    const foto = new Image();
    foto.onload = function(){
        lapis.drawImage(foto, 50, 50, 100, 100);

    }

    foto.src="cc-removebg-preview.png";

}

function contornoDaBandeira(){
    lapis.strokeStyle = "black";
    lapis.strokeRect(0, 0, 600, 400);

}

function chile(){
    corBranca();
    corVermelha();
    corAzul();
    estrela();
    contornoDaBandeira();

}

chile();