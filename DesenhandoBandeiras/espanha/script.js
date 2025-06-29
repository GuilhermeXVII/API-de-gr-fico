const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function primeiraFaixaVermelha(){
    lapis.fillStyle = "red";
    lapis.fillRect(0, 0, 600, 130);

}

function segundaFaixaAmarela(){
    lapis.fillStyle="#DAA520";
    lapis.fillRect(0, 130, 600, 170);

}

function terceiraFaixaVermelha(){
    lapis.fillStyle="red";
    lapis.fillRect(0, 290, 600, 400);

}


function adicionandoLogo(){
    const foto = new Image();
    foto.onload = function(){
        lapis.drawImage(foto, 95, 130, 150, 150);
    }

    foto.src="espanha.png";

}

function criandoContorno(){
    lapis.strokeStyle = "black";
    lapis.strokeRect(0, 0, 600, 400);

}

function exibirBandeiraDaEspanha(){
    primeiraFaixaVermelha();
    segundaFaixaAmarela();
    terceiraFaixaVermelha();
    adicionandoLogo();
    criandoContorno();

}

exibirBandeiraDaEspanha();