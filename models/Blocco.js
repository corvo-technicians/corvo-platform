//titolo, contenuto, contenutoTradotto string
//areeTematiche array
//personaggi array
//note array

const mongoose = require('mongoose');

let bloccoSchema = new mongoose.Schema({
    titolo: String,
    contenuto: String,
    contenutoTradotto: String,
    temi: Array,
    personaggi: Array,
    note: Array
})

let Blocco = mongoose.model('Blocco', bloccoSchema);

module.exports = Blocco;