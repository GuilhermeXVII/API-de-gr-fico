//Pegando o canvas é passando para o mundo JS
var tela = document.querySelector("canvas");	

//Como eu posso pintar sem uma lápis pincel algo do tipo?
//Simples vamos criar o pincel é atribuir ele a nossa tela é escolher o tipo de tela
//No caso a tela 2d
//Assim ficando tela.getContext("2d");	
var pincel = tela.getContext("2d");	

//Colocando as cores no pincel	
pincel.fillStyle = "black";


//Os dois primeiros zeros são o ponto de partida, os outros dois são até aonde ele vai pintar.
//pincel.fillRect(x1, y1, x2, y2);
pincel.fillRect(0, 0, 500, 300);

////Colocando as novas cores no pincel	
pincel.fillStyle = "red";

//Definindo as cordenadas aonde ele vai pintar
pincel.fillRect(0, 100, 500, 100);

//Colocando as novascores no pincel	
pincel.fillStyle = "yellow";

//Definindo as cordenadas aonde ele vai pintar
pincel.fillRect(0, 200, 500, 100);