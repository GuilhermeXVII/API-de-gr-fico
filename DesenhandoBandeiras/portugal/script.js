const telaBranca = document.querySelector("canvas");
const pincel = telaBranca.getContext("2d");



function parteVermelha(){
    pincel.fillStyle = "red";
    pincel.fillRect(0, 0, 600, 400);

}

function parteVerde(){
    pincel.fillStyle = "green";
    pincel.fillRect(0, 0, 170, 400);

}

function desenhoBandeira(){
    const foto = new Image;
    foto.onload = function(){
        pincel.drawImage(foto, 70, 100, 200, 200);

    }

    foto.src="fundo.png";
    

}

function criandoContorno(){
    pincel.strokeStyle = "red";
    pincel.strokeRect(0, 0, 600, 400);

}


function bandeiraDePortugal(){
    desenhoBandeira();
    parteVermelha();
    parteVerde();
    criandoContorno();

}

bandeiraDePortugal();