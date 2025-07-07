const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function corDominanteBranca(){
    lapis.fillStyle = "white";
    lapis.fillRect(0, 0, 600, 400);

}

function faixaVemelhaHorizontal(){
    lapis.fillStyle = "red";
    lapis.fillRect(270, 0, 60, 400);

}

function faixaVemelhaVertical(){
    lapis.fillRect(0, 170, 600, 60);

}

function contornoBandeira(){
    lapis.strokeStyle = "red";
    lapis.strokeRect(0, 0, 600, 600);

}

function exibirBandeira(){
    corDominanteBranca();
    faixaVemelhaHorizontal();
    faixaVemelhaVertical();
    contornoBandeira();

}
exibirBandeira();