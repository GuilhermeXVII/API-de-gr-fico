
//Dom
document.body.style.backgroundColor = "darkgrey";
document.title="Animações em java script";

//Começando com as animações

const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function quadrado(event){
    x = event.pageX - tela.offsetLeft;
    y = event.pageY - tela.offsetTop;


    lapis.fillStyle="green";
    lapis.fillRect(x, y, 20, 20);

    lapis.strokeStyle = "red"
    lapis.strokeRect(x, y, 20, 20);

    
}

tela.onclick = quadrado;

function boasVinda(){
    alert("Olá");

}

//Uso do setInterval
//setInterval(boasVinda, 3000);

y = 10
function quadradoAzul(){
    lapis.fillStyle="red";
    lapis.fillRect(y, 30, 20, 20);
   

}

while(y <= 500){
    lapis.fillStyle="red";
    lapis.fillRect(y, 30, 20, 20);
    y+=10;
}

quadradoAzul();



function quadradoAmarelo(){
    lapis.fillStyle="yellow";
    lapis.fillRect(30, 100, 40, 40);
    

}

quadradoAmarelo();


function desenhaCirculo(x, y, raio){
    lapis.fillStyle="purple";
    lapis.beginPath();
    lapis.arc(x, y, raio, 0, 2 * Math.PI)
    lapis.fill();

}

function limparTela(){
    lapis.clearRect(0, 0, 600, 400);

}

let x = 20;
function atualizarTela(){
    limparTela();
    desenhaCirculo(x, 30, 10);
    x++;
}

setInterval(atualizarTela, 10);