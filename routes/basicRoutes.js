// Importazione Pacchetti
const express = require('express');

// Importazione Controllers
const basicController = require('./../controllers/basicController');

// Settaggio Router di Express
const router = express.Router();

router.route('/')
    .get(basicController.get_home);
// .post(basicController.creaBlocco);

router.route('/:id')
    .get(basicController.readBlocco)
    .patch(basicController.updateBlocco)
    .delete(basicController.deleteBlocco);

// Esportazione intero modulo
module.exports = router;
