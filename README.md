# Typescript e mongodb

Projeto typescript com Mongodb desenvolvido acompanhando video aula do Diego Fernandes da rockeseat

https://www.youtube.com/watch?v=aTf8QTjw4RE 

Adicionei algumas modificações ao projeto

## Pre requisitos

* Node.js
* Vscode
* yarn
* insomnia ou postman 
* mongodb

## Instalação

Para instalar faça um git clone para a sua maquina deste repositorio,

rode o comando yarn para instalar as dependencias, inicie o mongo

configure as variaveis de ambiente e rode o comando yarn dev para iniciar aplicação

vá ao insomnia na rota localhost:3333/users e envie requisições post para adicionar novos usuarios:

{
	"email": "teste@teste2",
	"firstName": "nome2",
	"lastName": "sobrenome2"
}

va ao navegador e veja os usuarios cadastrados ou pelo metodo get no insomnia

