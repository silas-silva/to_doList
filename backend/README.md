# API AvaFilmes
## Projeto hospedado no Heroku
### FrontEnd consumindo essa API
* Para Acessar o projeto frontend online [Clique Aqui](https://silas-silva.herokuapp.com/todoList)
* Para Acessar o projeto frontend no GitHub [Clique Aqui](https://github.com/silas-silva/to_doList)
## Informações Gerais 
* API Simples para pratica de conhecimentos
* API para cadastro, update, remoção e listagem de to-dos
* A API foi desenvolvida em NodeJS 

## Rotas
## GET
### Rota de Listagem
* /listTodo
* O que retorna nessa rota.

    ```json
    {
        "todos":[
            
            {
                "id": 12,
                "description": "Descrição do to-do ",
                "checked": 1
            },

        ]
    
    }
    ```
## POST
### Rota para inserir novo to-do
* /todo
* é Necessário passar um arquivo JSON na seguinte forma no corpo da requisição

    ```Json
    {
        "description": "descrição to-do",
        "checked": 0 //0 para false, 1 para true
    }
    ```

## DELETE
### Rota para apagar to-do
* /todo/:id -> id é o item a ser deletado. 

## PUT
### Rota para apagar to-do
* /todo/:id -> id é o item a ser atualizado.
* é Necessário passar um arquivo JSON na seguinte forma no corpo da requisição

    ```Json
    {
        "description": "descrição to-do",
        "checked": 0 //0 para false, 1 para true
    } 

 
## Conhecimentos Obtidos 
* Express
* Cors
* Construção de API
* Knex para gerenciar banco de dados
* Mysql
* Deploy

## Iniciando o Projeto
* Clone ou baixe o projeto
* Execute o seguinte comando na pagina do projeto
    ```npm
     npm install
    ```
* Instale o nodemon globalmente na maquina
    ```npm
     npm install -g nodemon
    ```
* Instale o banco de dados MySQL, e copie o banco que está em "src/scriptsDB" no diretório backend 

* mude os dados de conexão com o banco em "src/connection/database.js"
* Execute o comando
    ```npm
     npm run dev
    ```
* A API estará sendo executada na porta 3030 : localhost:3030