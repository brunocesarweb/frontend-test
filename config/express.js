var express 	= require("express");
var load 		= require("express-load");
var bodyParser  = require("body-parser");

module.exports = function(){

	var app = express();

	app.use(express.static('./public/assets'));
	app.set("view engine", "ejs");
	app.set("views", "./public/view");

	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());

	load("routes", {cwd: "public"})
		//.then("infra")
		.into(app);

		app.use(function(req,res,next){
			res.status(404).render('erros/erro404');
			next();
		});

	//Retorna o app
	return app;
} //end - module.exports
