const quadro = document.querySelector("canvas");
const pincel = quadro.getContext("2d");

function corVermelha(){
    pincel.fillStyle = "red";
    pincel.fillRect(0, 0, 600, 200);

}

function corBranca(){
    pincel.fillStyle = "white";
    pincel.fillRect(0, 200, 600, 200);

}

function corPreta(){
    pincel.fillStyle = "black";
    pincel.fillRect(0, 400, 600, 200);

}

function contorno(){
    pincel.strokeStyle = "white";
    pincel.strokeRect(0, 0, 600, 600);

}

function imagemDaBandeira(){
    const foto = new Image();
    foto.onload = function(){
        pincel.drawImage(foto, 160, 200, 300, 200);

    }
    foto.src="passaro.png";


}

function bandeiraDoEgito(){
    corVermelha();
    corBranca();
    corPreta();
    contorno();
    imagemDaBandeira();

}

bandeiraDoEgito();