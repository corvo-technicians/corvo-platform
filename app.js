// Importazione Pacchetti
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Importazione Routers
const basicRouter = require('./routes/basicRoutes');

// Inizializzazione App
const app = express();

// Settaggio directory che serve i files statici
app.use(express.static(__dirname + '/public'));

// Settaggio di Morgan per visualizzare il log delle richieste in console a server acceso
app.use(morgan('dev'));

// Importazione del modello JSON per Express
app.use(express.json());

// Settaggio di EJS come motore di rendering
app.set('view engine', 'ejs');

// Settaggio BodyParser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', basicRouter);

module.exports = app;
