var jsonFile 		= require("jsonfile");
var dataBase		= './public/json/fazenda.json';

module.exports = function(app){

	app.get('/', function(req,res){

		jsonFile.readFile(dataBase, function(err, obj){

			var arr = [];
			for (var i = 0; i < obj.data.length; i++) {
				arr.push([
					obj.data[i].name,
					validaCaracteres(obj.data[i].description),
					obj.data[i].picture,
					validaVotos(obj.data[i].positive, obj.data[i].negative, true),
					validaVotos(obj.data[i].positive, obj.data[i].negative, false)
				]);
			}
			//console.log("result-> " + arr.sort(classifica) );
			obj = arr.sort(classifica);
			res.render('home/index', {
				retornoFazenda: obj
			});

		});//end - jsonFile

	});//end - app.get("/")

};//end - module.exports

function validaCaracteres(valorString){
	var retornaString = valorString.replace("&ordm;","º ");
	return retornaString;
}

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

	if (flagVotosPositivos) {
		positive = (positive * 100)/total;
		return positive.toFixed();
	}else {
		negative = (negative * 100)/total;
		return negative.toFixed();
	}

}

function classifica(positivo1,positivo2) {
	if (positivo2[3] < positivo1[3])
     return -1;
  if (positivo2[3] > positivo1[3])
    return 1;
  return 0;
}
