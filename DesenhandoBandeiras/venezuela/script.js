const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function imagem(){
    const foto = new Image();
    foto.onload = function(){
        lapis.drawImage(foto, 140, 50, 300, 300);

    }

    foto.src="venezuela-removebg-preview.png";

}

function faixaAmarela(){
    lapis.fillStyle = "yellow";
    lapis.fillRect(0, 0, 600, 130);

}

function faixaAzul(){
    lapis.fillStyle="blue";
    lapis.fillRect(0, 0, 600, 270);

}

function faixaVermelha(){
    lapis.fillStyle="red";
    lapis.fillRect(0, 0, 600, 400);

}

function contornoBandeira(){
    lapis.strokeStyle = "#FF8C00";
    lapis.strokeRect(0, 0, 600, 400);

}

function exibirBandeira(){
    imagem();
    faixaVermelha();
    faixaAzul();
    faixaAmarela();
    contornoBandeira();
}

exibirBandeira();