# Ecoleta ♻️
A website that's designed to make the connection of recycling companies and people. Built in the Next Level Week.

## Pre Requirements
- Node
```bash
 $ sudo apt install nodejs
 ```
 - Npm
 ```bash
 $ sudo apt install npm
 ```
 - Nodemon
 ```bash
 $ npm install -g nodemon
 ```
 - Express
 ```bash
 $ npm install -g express
 ```
 - SQlite3
 ```bash
 $ npm install sqlite3
 ```

## How to use
- Clone this repository and enter it
```bash
 $ git clone https://github.com/Gabsop/nlw && cd nlw
 ```
- Start the server
```bash
 $ npm start
 ```
 - Leave the terminal opened
 - Go to your favorite browser and enter in the localhost
 ```
 localhost:3000
 ```
 - Then your in!
 - I've included two example colecting points, just search for "Angra dos reis" or "Rio do Sul".
 
 ## Technologies used 🖥
- [Node](https://nodejs.org/en/) - Build the backend
- [Nodemon](https://nodemon.io/) - Process Manager used in the development
- [Express](https://expressjs.com/) - Application Router
- [SQlite3](https://www.sqlite.org/) - Database
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Template Engine for JavaScript

#### The states and cities of Brazil information to register the colecting points where taken using the IBGE API.
- https://servicodados.ibge.gov.br/api/v1/localidades/distritos
