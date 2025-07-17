const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function corBranca(){
    lapis.fillStyle = "white";

}

function corVermelha(){
    lapis.fillStyle = "red";

}

function corAzul(){
    lapis.fillStyle="blue";

}

function primeiraFaixa(){
    corVermelha();
    lapis.fillRect(0, 0, 600, 150);

}

function segundaFaixa(){
    corBranca();
    lapis.fillRect(0, 150, 600, 150);

}

function terceiraFaixa(){
    corAzul();
    lapis.fillRect(0, 280, 600, 400);
}

function paraguaiLogo(){
    const foto = new Image();
    foto.onload = function(){
        lapis.drawImage(foto, 225, 150, 130, 130);

    }

    foto.src="paraguaiLogo.png";

}


function linhaEmVoltaDaBandeira(){
    lapis.strokeStyle = "black";
    lapis.strokeRect(0, 0, 600, 400);

}

primeiraFaixa();
segundaFaixa();
terceiraFaixa();
paraguaiLogo();
linhaEmVoltaDaBandeira();