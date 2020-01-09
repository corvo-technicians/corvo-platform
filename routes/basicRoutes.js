// Importazione Pacchetti
const express = require('express');

// Importazione Controllers
const basicController = require('./../controllers/basicController');

// Settaggio Router di Express
const router = express.Router();

router.route('/').get(basicController.get_home);

// Esportazione intero modulo
module.exports = router;
