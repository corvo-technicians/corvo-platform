const Blocco = require('./../models/Blocco');
const mongoose = require('mongoose');

exports.get_home = (req, res) => {
    const id = '5e19a9eb174afd3cc8044d53';
    Blocco.findById(id, (err, data) => {
        if (err) res.send(err);
        console.log('Data --> ' + data);
        res.render('home', { data: data });
    })
}

exports.creaBlocco = (req, res) => {
    const newBlocco = {
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        contenutoTradotto: req.body.contenutoTradotto,
        temi: req.body.temi,
        personaggi: req.body.personaggi,
        note: req.body.note
    };

    Blocco.create(newBlocco, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Something is wrong...'
            });
        }
        res.status(201).json({
            status: 'success',
            data: data
        });
    });
};

exports.readBlocchi = (req, res) => {
    console.log('fra sono quiiiii');

    Blocco.find((err, data) => {
        if (err) {
            res.send(err);
        }
        console.log(data);
        res.render('home', { data: data });
    });
};

/*da modificare*/
exports.readBlocco = (req, res) => {
    Blocco.find((err, data) => {
        if (err) {
            res.send(err);
        }
        console.log(data);
        res.render('home', { data: data });
    });
}

exports.deleteBlocco = (req, res) => {
    //elimina per parametro
    Blocco.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Somethin is wrong'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    });
};

exports.updateBlocco = (req, res) => {
    let updatedBlocco = {
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        contenutoTradotto: req.body.contenutoTradotto,
        temi: req.body.temi,
        personaggi: req.body.personaggi,
        note: req.body.note
    }
    Blocco.findById({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(404).json({
                status: 'fail',
                message: 'Something is wrong...'
            });
        } else {
            Blocco.replaceOne(updatedBlocco, err => {
                if (err) {
                    return res.status(500).json({
                        status: 'fail',
                        message: 'Failed to update new blocco'
                    });
                }
                else {
                    res.status(200).json({
                        status: "success"
                    })
                }

            });
        }
    });
} 