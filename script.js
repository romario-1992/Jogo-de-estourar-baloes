function addBola() {
	// Criar bola
	var bola = document.createElement("div");
	//Adiciando  class Bola à Div.
	bola.setAttribute("class", "bola");
	// Calcular duas posições para aparecer a bola.
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	// Inserindo os números gerado à div bola.
	bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
	//Criando ação de click para estourar a bola.
	bola.setAttribute("onclick", "estourar(this)");
	//Mostrar na tela o elemento criado.
	document.body.appendChild(bola);
}

// função estourara balão.
function estourar(elemento) {
	// Removendo elemento da tela
	document.body.removeChild(elemento);
}
// Função para adiconar bola de tempo e tempo. OBS: O tempo é em mile segundos.

function iniciar() {
	setInterval(addBola, 1000);
}


