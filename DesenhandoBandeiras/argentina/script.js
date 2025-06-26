const telaEmBranco = document.querySelector("canvas");
const lapisParaPintar = telaEmBranco.getContext("2d");

function corPrimeiraFaixa(){
    //Atribuindo a cor da primeirafaixa
    lapisParaPintar.fillStyle = "#1E90FF";
    lapisParaPintar.fillRect(0, 0, 600, 120);

}

function corDaSegundaFaixa(){
    lapisParaPintar.fillStyle = "#ffffff";
    lapisParaPintar.fillRect(0, 120, 600, 200);

}

function corDaTerceiraFaixa(){
    lapisParaPintar.fillStyle = "#1E90FF";
    lapisParaPintar.fillRect(0, 300, 600, 120);

}

function imagem(){
    const logo = new Image();
        logo.onload = function(){
        lapisParaPintar.drawImage(logo, 200, 123, 200, 170);
             
    }
    logo.src = "logoArgentino.webp";      

}
  
function criandoContornoDessaBandeiraMaldita(){
    //strokeStyle para strokeRect
    //fillStyle para fillRect
    lapisParaPintar.strokeStyle = "#1E90FF";
    lapisParaPintar.strokeRect(0, 0, 600, 400);

}


corPrimeiraFaixa();
corDaSegundaFaixa();
corDaTerceiraFaixa();
imagem();

//Coloquei esse nome por conta que na hora de adicionar a imagem eu fiquei confuso foi com a bandeira,
//Mas não pensei na poha dessa imagem kkkkkkkkkkkkkkkkkkkk
criandoContornoDessaBandeiraMaldita();



