const quadro = document.querySelector("canvas");
const lapis = quadro.getContext("2d");


function trianguloVerde(){
    lapis.fillStyle = "#008000";
    lapis.beginPath();
    lapis.moveTo(250, 200);
    lapis.lineTo(0, 0);
    lapis.lineTo(0, 400);
    lapis.fill();

}

function trianguloAmarelo(){
    lapis.fillStyle = "#DAA520";
    lapis.beginPath();
    lapis.moveTo(190, 200);
    lapis.lineTo(0, 80);
    lapis.lineTo(0, 340);
    lapis.fill();
}

function trianguloPreto(){
    lapis.fillStyle = "black";
    lapis.beginPath();
    lapis.moveTo(170, 200);
    lapis.lineTo(0, 100);
    lapis.lineTo(0, 320);
    lapis.fill();


}

function retanguloVerde(){
    lapis.fillStyle="#008000";
    lapis.fillRect(210, 175, 600, 50);
    
}

function parteBrancaDeCima(){
   lapis.fillStyle="white";
   
   lapis.save();
   
   lapis.translate(45, 45);
   
   lapis.rotate(Math.PI / 4.7);
   
   lapis.fillRect(-75, -25, 295, 20);
   
   lapis.restore();
}

function parteBrancaDeBaixo(){
    lapis.fillStyle="white";
   
   lapis.save();
   
   lapis.translate(45, 200);
   
   lapis.rotate(Math.PI / -4.7);
   
   lapis.fillRect(-170, 120, 280, 20);
   
   lapis.restore();

}

function linhaBrancaDeCima(){
    lapis.fillStyle="white";
    lapis.fillRect(220, 155.4, 600, 22);

}

function linhaBrancaDeBaixo(){
    lapis.fillStyle="white";
    lapis.fillRect(206, 225.4, 600, 22);
}

function parteVermelha(){
    lapis.fillStyle="red";
    lapis.fillRect(20, 0, 600, 220,);

}

function parteAzul(){
    lapis.fillStyle="#00008B";
    lapis.fillRect(20, 230, 600, 220,);
}

function contornoBandeira(){
    lapis.strokeStyle="black";
    lapis.strokeRect(0, 0, 600, 400);
    
}


parteAzul();
parteVermelha();
trianguloVerde();
trianguloAmarelo();
trianguloPreto();
retanguloVerde();
parteBrancaDeCima();
parteBrancaDeBaixo();
linhaBrancaDeCima();
linhaBrancaDeBaixo();
contornoBandeira();