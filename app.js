var app = require("./config/express")();

var http = require('http').Server(app);

//Verifica porta do ambiente do heroku ou a 3000 de ambiente local
var porta = 7007;

//Sobe o servidor
http.listen(porta, function(){
	console.log("Open: http://localhost:" + porta);
});
