### Projeto frontend-test R7.com


Preparando o ambiente, é necessário ter instalado o [nodejs](https://nodejs.org/en/), [npm](https://www.npmjs.com/) e o [gulpjs](http://gulpjs.com/).

Primeiros passos para rodar o projeto.

1- Baixar o projeto do github.

2- Pelo terminal acessar a pasta do projeto e executar o comando:

```sh
$ sudo npm install
```

Serão instalados todos os módulos do npm para rodar o projeto.

3- Depois que os módulos foram instalados usar o comando:

```sh
$ sudo gulp watcher
```

Esse comando vai fazer a minificação do css e do javascript e a otimização da pasta de imagens, essas pastas se encontram dentro da pasta /dev/assets e serão gerados os arquivos dentro de /public/assets/ e ficará com o log rodando no terminal ele ficará assistindo as mudanças que ocorrerão no css, javascript e na imagens e irá atualizar na pasta public.

4- Abra uma nova tela do terminal na mesma pasta do projeto, rode o comando:

```sh
$ sudo npm start
```

Esse comando sobe o servidor no endereço local e gera uma url para ser acessado no browser, ele também gera uma tela com o log no terminal.

Estrutura de pastas do projeto:

Módulos do node:
node_modules/  

Pasta contendo os módulos do node que foram instalados para uso no projeto.

Express, esse projeto utiliza o framework expressjs e nessa pasta o arquivo express é configurado
config/  
	express.js  

Aqui são carregados os módulos do express e o load para o carregamento da página, e são setados as rotas que serão usadas nesse projeto.

Pasta onde ficam os assets que serão usados para o desenvolvimento:
dev/  
	assets/  
		imagens/  
		javascripts/  
		stylesheets/  

Os assets da pasta dev são os que serão alterados pelo desenvolvedor para serem gerados os arquivos minificados depois pelo gulpjs.

Requisitos do projeto:
requisitos-projeto/  

A pasta contém as informações do projeto, psd e imagens de exemplo.

Pasta que subirá com o servidor:
public/  
	assets/  
		imagens/  
		javascripts/  
		stylesheets/  
	json/  
		fazenda.json  
	routes/  
		home.js
	view/  
		home/  
			index.ejs

A pasta public é a pasta que irá subir para o servidor no endereço local, dentro dela estão várias outras pastas.

Assets com os arquivos minificados e otimizados;

Json com o arquivo json com as informações para serem consumidas pela página;

Routes essa pasta contém o arquivos home.js onde é feita a requisição ao json com os dados da fazenda e suas validações como ordenar a ordem dos candidados, verificar se os dados são válidos, e faz a renderização para a view;

View é a pasta onde irão conter as views do projeto que é gerada pela engine ejs.

Arquivo app,js é o arquivo que seta as configurações do express e sobe o servidor para ser acessado local;

Arquivo gulpfile.js nele estão as configurações do gulp para minificação do código e otimização das imagens;

O package.json é o arquivo com os módulos usados nesse projeto.

