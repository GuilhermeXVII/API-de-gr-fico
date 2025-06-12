//Ṕassando o canvas para o mundo JS
const tela = document.querySelector("canvas");

//Criando o nosso lapis é atribuindo ele a tela é colocando o tipo de tela
//No caso a 2d
const lapis = tela.getContext("2d");

//Definindo a cor do lapis
lapis.fillStyle = "red";

//Pintando de acordo com as coordenadas que a gente quer
lapis.fillRect(0, 0, 200, 300);
//(ponto de partida, ponto de partida, o tanto que eu quero pintar, o tanto que eu quero pintar)
//(x1, y1, x2, y2)
//O mesmo jeito se aplica nos outros

lapis.fillStyle = "white";
lapis.fillRect(200, 0, 200, 300);

lapis.fillStyle = "red";
lapis.fillRect(400, 0, 200, 300);