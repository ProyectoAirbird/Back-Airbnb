const express = require('express');
const _ = require('underscore');
const app = express();

const Rentas = require('../models/rentas');

// app.get('/rentas', (req, res) => {
//     Rentas.find({ status: true })
//         .exec((err, rentas) => {
//             if (err) {
//                 return res.status(400).json({
//                     ok: false,
//                     err
//                 });
//             }
//             return res.status(200).json({
//                 ok: true,
//                 count: rentas.length,
//                 rentas
//             })
//         });
// });


app.get('/rentas', (req, res) => {
    Rentas.find({ status: true })
        .exec((err, rentas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: rentas.length,
                rentas
            })
        });
});


app.post('/rentas', (req, res) => {
    let body = req.body;

    let rentas = new Rentas({
        _id: body._id,
        customer: body.customer,
        name: body.name,
        departureDate: body.departureDate,
        returnDate: body.returnDate

    });

    rentas.save((err, rentasDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            rentasDB
        });

    });

});


app.put('/rentas/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['_id', 'customer', 'name']);

    Rentas.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, rentasDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            rentasDB
        });
    });
});

app.delete('/rentas/:id', (req, res) => {
    let id = req.params.id;
    Rentas.findByIdAndUpdate(id, { status: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            resp
        });
    });
});
module.exports = app;