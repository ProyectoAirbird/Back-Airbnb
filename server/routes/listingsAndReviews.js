const express = require('express');
const _ = require('underscore');
const app = express();

const ListingsAndReviews = require('../models/listingsAndReviews');

app.get('/listingsAndReviews', (req, res) => {
    ListingsAndReviews.find({ status: true }).limit(10)
        .exec((err, listingsAndReviews) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                count: listingsAndReviews.length,
                listingsAndReviews
            })
        });
});

//get id
app.get('/listingsAndReviews/:id', (req, res) => {
    let id = req.params.id;
    ListingsAndReviews.find({ status: true, _id: id })
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por id",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});

//get por nombre
app.get('/listingsAndReviews/nombre/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    ListingsAndReviews.find({ status: true, name: nombre })
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por nombre",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});

//get por price lt
app.get('/listingsAndReviewslt/', (req, res) => {
    let price = req.params.price;
    ListingsAndReviews.find({ status: true, price: price }).where('price').lt(1000).limit(2)
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por country",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});


//get por price gt
app.get('/listingsAndReviewsgt/', (req, res) => {
    let price = req.params.price;
    ListingsAndReviews.find({ status: true, price: price }).where('price').gt(5000).limit(2)
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por country",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});



/////////////////////////////////////////////////////////////////////////////////


//get por price gt
app.get('/listingsAndReviewsgt/', (req, res) => {
    let type = req.params.type;
    ListingsAndReviews.find({ status: true, property_type: type }).where('price').gt(5000).limit(2)
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por country",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});



//get por price rango
app.get('/listingsAndReviewsRango/', (req, res) => {
    let price = req.params.price;
    ListingsAndReviews.find({ status: true, price: price }).where('price').gt(1000).lt(8000).limit(10)
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por country",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});



//get por tipo departamento
app.get('/listingsAndReviews/:type', (req, res) => {
    let type = req.params.type;
    ListingsAndReviews.find({ status: true, property_type: type }).where('property_type').equals(type).limit(10)
        .exec((err, listingsAndReviews) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    msg: "No se mostro el tipo de departamento",
                    cont: err
                });
            }
            console.log(req.listingsAndReviews);
            return res.status(200).json({
                ok: true,
                status: 200,
                msg: "Se mostro el departamento correctamente por tipo",
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});

/////////////////////////Propiedades/////////////////////////
// app.get('/listingsAndReviews', async(req, res) => {
//     const listingsAndReviews = await ListingsAndReviews.find().limit(10);
//     res.render('listingsAndReviews', {
//         listingsAndReviews
//     });
// });

// app.get('/listingsAndReviews/:kind', async(req, res) => {
//     var { kind } = req.params;
//     console.log(kind)
//     const listingsAndReviews = await ListingsAndReviews.find({}).where('property_type').equals(kind).limit(100);
//     res.render('listingsAndReviews', {
//         listingsAndReviews
//     });
// });

// app.get('/listingsAndReviewslt/', async(req, res) => {
//     const propiedades = await Propiedades.find({}).where('price').lt(1000).limit(100);
//     res.render('propiedades', {
//         propiedades
//     });
// });


// app.get('/listingsAndReviewsgt/', async(req, res) => {
//     const propiedades = await Propiedades.find({}).where('price').gt(4000).limit(100);
//     res.render('propiedades', {
//         propiedades
//     });
// });


// app.get('/listingsAndReviewsid', async(req, res) => {
//     const propiedades = await Propiedades.find({}).where('price').gt(1000).lt(4000).limit(100);
//     res.render('propiedades', {
//         propiedades
//     });
// });
//////////////////////////////Busqquedas///////////////////
////////////////////////////////////////////////////////////////////////////////

app.post('/listingsAndReviews', (req, res) => {
    let body = req.body;

    let listingsAndReviews = new ListingsAndReviews({
        name: body.name,
        listing_url: body.listing_url,
        property_type: body.property_type,
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
    let body = _.pick(req.body, ['name', 'property_type', 'description']);

    ListingsAndReviews.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, listingsAndReviewsDB) => {
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