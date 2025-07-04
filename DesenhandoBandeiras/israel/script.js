const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function corBranca(){
    lapis.fillStyle = "white";
    lapis.fillRect(0, 0, 600, 400);

}

function faixasAzuis(){
    lapis.fillStyle="blue";
    lapis.fillRect(0, 20, 600, 50);

    lapis.fillRect(0, 330, 600, 50);

}

function iconeDaBandeira(){
    const foto = new Image();
    foto.onload = function(){
        lapis.drawImage(foto, 200, 100, 200, 200);
    }

    foto.src="estrelaIsrael-removebg-preview.png";

}

function contornoBandeira(){
    lapis.strokeStyle="blue";
    lapis.strokeRect(0, 0, 600, 400);

}


iconeDaBandeira();
corBranca();
faixasAzuis();
contornoBandeira();