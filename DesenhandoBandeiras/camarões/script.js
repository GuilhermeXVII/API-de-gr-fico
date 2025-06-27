const telaEmBranco = document.querySelector("canvas");
const lapis = telaEmBranco.getContext("2d");

function faixaVerde(){
    lapis.fillStyle = "#228B22 	";
    lapis.fillRect(0, 0, 200, 400);

}

function faixaVermelha(){
    lapis.fillStyle = "#FF0000";
    lapis.fillRect(200, 0, 400, 400);

}

function faixaAmarela(){
    lapis.fillStyle="#FFD700";
    lapis.fillRect(400, 0, 400, 400);

}

function estrela(){
    const foto = new Image();
    foto.onload=function(){
        lapis.drawImage(foto, 250, 150, 100, 100);

    }
    foto.src="estrela-removebg-preview.png"

}

function contorno(){
    lapis.strokeStyle = "#FF1493"
    lapis.strokeRect(0, 0, 600, 400);

}


faixaVerde();
faixaVermelha();
faixaAmarela();
estrela();
contorno();