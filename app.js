/*var app         = require('connect')()
var serveStatic = require('serve-static')

app.use(serveStatic('public'))

console.log(' ➜   Open: http://localhost:7007')
app.listen(7007)
*/
var app = require("./config/express")();

var http = require('http').Server(app);

//Verifica porta do ambiente do heroku ou a 3000 de ambiente local
var porta = 7007;

//Sobe o servidor
http.listen(porta, function(){
	console.log("Running server :-)");
});
