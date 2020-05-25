// Carregando modulos
    const express = require("express");
    const app = express();
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const path = require("path")

// Configurações


    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Public - Framework Bootstrap
        app.use(express.static(path.join(__dirname, "public")))
// Rotas

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/options', (req, res) => {
        res.render('options')
    })

    app.get('/options/page1', (req, res) => {
        res.redirect('/options')
    })
    

    app.get('/options/page2', (req, res) => {
        res.render('options2')
    })

    app.get('/options/page3', (req, res) => {
        res.render('options3')
    })

    app.get("/404", (req, res) => {
        res.send("Error 404!")
    })


// Outros
    const PORTA = process.env.PORT || 1501

    app.listen(PORTA, function(){
        console.log("O servidor está rolando na url http://localhost:1501!")
    });

    //Usuario
