// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que irá operar o banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//Utilizar o objeto de banco de dados para realizar operações
db.serialize(() => {
    //Comandos SQL:
    // Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT,
        );
    `)

    // Inserir dados na tabela
    db.run(`
            INSERT INTO places (
                image,
                name
            ) VALUES ();
    `)


    // Consultar os dados da tabela

    // Deletar um dado da tabela
})