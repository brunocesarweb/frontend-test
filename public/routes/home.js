var jsonFile 		= require("jsonfile");
var dataBase		= './public/json/fazenda.json';

module.exports = function(app){

	app.get('/', function(req,res){

		jsonFile.readFile(dataBase, function(err, obj){

			var dbJsonFazenda = obj;
			res.render('home/index', {
				jsonFazenda: dbJsonFazenda.data
			});

		});//end - jsonFile

	});//end - app.get("/")

};
