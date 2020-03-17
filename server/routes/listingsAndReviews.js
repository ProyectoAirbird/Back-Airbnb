const express = require('express');
const _ = require('underscore');
const app = express();

const ListingsAndReviews = require('../models/listingsAndReviews');
app.get('/listingsAndReviews', (req, res) => {
    ListingsAndReviews.find((err, listingsAndReviewsDB) => {

        console.log('Buscando...');

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        console.log(listingsAndReviewsDB);


        ListingsAndReviews.countDocuments((err, conteo) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                conteo,
                listingsAndReviewsDB
            })
        })
    })



});
module.exports = app;

app.post('/listingsAndReviews', (req, res) => {
    let body = req.body;

    let listingsAndReviews = new ListingsAndReviews({
        name: body.name,
        listing_url: body.listing_url,
        summary: body.summary,
        description: body.description,
        notes: body.notes,
        price: body.price
    });

    listingsAndReviews.save((err, listingsAndReviewsDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            listingsAndReviewsDB
        });

    });

});

app.put('/listingsAndReviews/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'listing_url', 'reviewer_id', 'summary', 'description', 'notes', 'price']);

    listado.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, listingsAndReviewsDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            listingsAndReviewsDB
        });
    });
});
app.delete('/listingsAndReviews/:id', (req, res) => {
    let id = req.params.id;
    Libro.findByIdAndUpdate(id, { status: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
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