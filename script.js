	//Criando uma váriavel chamda tela é colocando o canvas que criamos dentro do Js.
	var tela = document.querySelector("canvas");
    
	//Criando uma váriavel chamada pincel é colocando o tipo de gráfico que vai ser, nesse aqui vai ser o 2d.
	var pincel = tela.getContext("2d");
	
	//Definindo a cor do pincel
    pincel.fillStyle = "blue";         
	
	//É o tanto que ele vai pintar.
	pincel.fillRect(0, 0, 600, 400);
	