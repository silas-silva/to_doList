const express = require("express");
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3030;

const database = require("./connection/database");

app.use(express.urlencoded({ extended: true })); // Allow object nesting which is the way JSON works
app.use(express.json()); // accept data in JSON

app.use((request, response, next) => { //configure in cors what can access the backend
    // * -> allow all URLs to access
    // 'url' -> permite 1 url acessar
    // ['url', 'url'] -> allow one or more URLs to access
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"); // Release which methods will be allowed access
    app.use(cors());
    next();
})

//Routes

// List to-dos
app.get("/listTodo", (request, response) => {
    // fetch to-dos of DB
    database.select().table("todos").then(todos => {
        return response.status(200).send({todos});

    }).catch(err => {
        return response.status(500).send(false);
    });
})

// Add to-do
app.post("/todo", async (request, response) => {
    const { description, checked } = request.body;
    try {
        //Add in DB
        await database.insert({ description, checked }).into('todos')
        return response.status(200).send(true);
    } catch (error) {
        return response.status(500).send(false);
    }
})

// Update to-do
app.put("/todo/:id", async (request, response) => {
    const {id} = request.params;
    const { description, checked } = request.body;
    try {
        //Update in DB
        await database.update({ description, checked }).into('todos').where({id : id})
        return response.status(200).send(true);
    } catch (error) {
        return response.status(500).send(false);
    }
})

// Delete to-do
app.delete("/todo/:id", (request, response) => {
    const {id} = request.params;
    //Delete in DB
    database.delete().table("todos").where({id: id}).then(() => {
        return response.status(200).send(true);
    }).catch(err => {
        return response.status(500).send(false);
    });
})

//End of Routes

app.listen(port, (err) => {
    if (err) {
        console.log("❌ Não foi possível iniciar o servidor ❌");
    }
});