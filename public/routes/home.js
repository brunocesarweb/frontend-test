var jsonFile 		= require("jsonfile");
var dataBase		= './public/json/fazenda.json';

module.exports = function(app){

	app.get('/', function(req,res){

		//Busca o json com os dados do candidato
		jsonFile.readFile(dataBase, function(err, obj){

			//Inicia um array
			var arrayConcorrentes = [];

			//Monta o array com os dados dos Concorrentes
			for (var i = 0; i < obj.data.length; i++) {
				arrayConcorrentes.push([
					obj.data[i].name,
					validaCaracteres(obj.data[i].description),
					obj.data[i].picture,
					validaVotos(obj.data[i].positive, obj.data[i].negative, true),
					validaVotos(obj.data[i].positive, obj.data[i].negative, false)
				]);
			}
			
			//Classifica os concorrentes
			arrayConcorrentes = arrayConcorrentes.sort(classifica);

			//Insere os dados da posição do concorrente e se seu número é par ou impar, para atribuir como classe
			var posicao = 1;
			for (var i = 0; i < arrayConcorrentes.length; i++) {
				arrayConcorrentes[i].push([posicao]);
				arrayConcorrentes[i].push([verificaParImpar(posicao)]);
				posicao++;
			}

			//Faz a renderização no html
			res.render('home/index', {
				retornoFazenda: arrayConcorrentes
			});

		});//end - jsonFile

	});//end - app.get("/")

};//end - module.exports

//Function que verifica se a posição do candidato é par ou ímpar
function verificaParImpar(numero){

	numero % 2 === 0 ? numero = "cor-par" : numero = "cor-impar";
	return numero;

}

//Function que faz a validação de caracteres especiais
function validaCaracteres(valorString){

	var retornaString = valorString.replace("&ordm;","º ");
	return retornaString;

}

//Function que faz a validação de votos
function validaVotos(votosPositivos, votosNegativos, flagVotosPositivos){

	//Valida se os dados que vem do json são numeros válidos
	if ( votosPositivos == null || votosPositivos == undefined || votosPositivos == '') {

		return votosPositivos = 0;

	}else if( votosNegativos == null || votosNegativos == undefined || votosNegativos == '' ){

		return votosNegativos = 0;

	}

	var positive = parseInt(votosPositivos);
	var negative = parseInt(votosNegativos);
	var total = positive + negative;

	//Calcula a porcentagem de votos
	if (flagVotosPositivos) {

		positive = (positive * 100)/total;
		return positive.toFixed();

	}else {

		negative = (negative * 100)/total;
		return negative.toFixed();

	}

}

//Function que faz a classificação de acordo com os votos positivos
function classifica(positivo1,positivo2) {
	if (positivo2[3] < positivo1[3])
     return -1;
  if (positivo2[3] > positivo1[3])
    return 1;
  return 0;
}
