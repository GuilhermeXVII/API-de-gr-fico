const telaQuadro = document.querySelector("canvas");
const lapis = telaQuadro.getContext("2d");

function corVerde(){
	lapis.fillStyle = "green";
	lapis.fillRect(0, 0, 600, 400);

	lapis.fillStyle = "yellow";
	lapis.beginPath();
	lapis.moveTo(70, 200);

}

function corAmarela(){
	lapis.lineTo(300, 370);
	lapis.lineTo(530, 200);
	lapis.fill();

	lapis.fillStyle = "yellow";
	lapis.beginPath();
	lapis.moveTo(70, 200);

	lapis.lineTo(300, 30);
	lapis.lineTo(530, 200);

	lapis.fill();

}

function corAzul(){

	lapis.fillStyle = "blue";

	//Começa um novo caminho
	lapis.beginPath();

	lapis.arc(300, 200, 100, 0, 2 * 3.14);
	lapis.fill();

}

function faixaBranca(){
	lapis.fillStyle = "white";
	lapis.fillRect(200, 200, 200, 10 );

}

function bandeiraDoBrasil(){
	corVerde();
	corAmarela();
	corAzul();
	faixaBranca();

}

bandeiraDoBrasil();