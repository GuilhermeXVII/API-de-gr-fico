const quadroBranco = document.querySelector("canvas");
const caneta = quadroBranco.getContext("2d");

function parteVermelha(){
    caneta.fillStyle="red";
    caneta.fillRect(0, 0, 600, 400);

}

function parteHorizontal(){
    caneta.fillStyle ="white";
    caneta.fillRect(130, 170, 350, 90);

}

function parteVertical(){
    caneta.fillStyle="white";
    caneta.fillRect(250, 50, 110, 310);

}

function criandoContornoEmVolta(){
    caneta.strokeStyle="black";
    caneta.strokeRect(0, 0, 600, 400);

}


parteVermelha();
parteHorizontal();
parteVertical();
criandoContornoEmVolta();