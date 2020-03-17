const express = require('express');
const _ = require('underscore');
const app = express();

const Customer = require('../models/customer');

app.get('/customer', (req, res) => {
    Customer.find({ status: true })
        .exec((err, customers) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: customers.length,
                customers
            });
        });
});

app.post('/customer', (req, res) => {
    let body = req.body;

    let customer = new Customer({
        _id: body.id,
        firstname: body.firstname,
        lastname: body.lastname,
        address: body.address,
        city: body.city,
        country: body.country,
        district: body.district

    });

    customer.save((err, customerDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            customerDB
        });

    });

});


app.put('/customer/:id', (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['id', 'firstname', 'lastname', 'address', 'city', 'country', 'district']);

    Customer.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, customerDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            customerDB
        });
    });
});

app.delete('/customer/:id', (req, res) => {
    let id = req.params.id;
    Customer.findByIdAndUpdate(id, { status: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
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