const express = require("express")
const server = express()

//Pegar o bando de dados
const db = require("./database/db.js")

//Configurar pasta pública
server.use(express.static("public"))

//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar caminhos da aplicação
//Página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {

    // req.query: Query strings da url
    console.log(req.query)


    return res.render("create-point.html")
})

server.post("/save-point", (req,res) => {
    return res.send("ok")
})

server.get("/search", (req, res) => {

    //Pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err,rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        //Mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total})
    })
})

//Ligar o servidor
server.listen(3000)