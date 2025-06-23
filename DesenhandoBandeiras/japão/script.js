const tela = document.querySelector("canvas");
const lapis = tela.getContext("2d");

function corBrancaDaBandeira(){
    lapis.fillStyle = "white";
    lapis.fillRect(0, 0, 600, 400);

}

function corVermelhaRedondaDaBandeira(){
    lapis.fillStyle = "red";
    lapis.beginPath();
    lapis.arc(300, 200, 100, 0, 2 * 3.14);
    lapis.fill();

}

function bandeiraDoJapao(){
    corBrancaDaBandeira();
    corVermelhaRedondaDaBandeira();
    
}

bandeiraDoJapao();