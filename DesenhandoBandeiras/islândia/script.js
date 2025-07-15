const quadro = document.querySelector("canvas");
const lapis = quadro.getContext("2d");

function parteAzul(){

    lapis.fillStyle = "#191970";
    lapis.fillRect(0, 0, 600, 400);
}

function corVermelha(){
    lapis.fillStyle="#B22222 	";
    lapis.fillRect(150, 0, 50, 400);
}

function segundCorVermelha(){
    lapis.fillStyle="#B22222 	";
    lapis.fillRect(0, 150, 600, 50);
}

function parteBranca(){
    lapis.fillStyle="white";
    lapis.fillRect(135, 0, 80, 400);
}

function segundaParteBranca(){
    lapis.fillStyle="white";
    lapis.fillRect(0, 135, 600, 90);
}

function contornoBandeira(){
    lapis.strokeStyle = "black";
    lapis.strokeRect(0, 0, 600, 400);

}

function bandeiraIslandia(){
    parteAzul();
    parteBranca();
    segundaParteBranca();
    corVermelha();
    segundCorVermelha();
    contornoBandeira();
}

bandeiraIslandia();
