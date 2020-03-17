const express = require('express');
const app = express();

app.use(require('./listingsAndReviews'));
app.use(require('./usuario'));
app.use(require('./rentas'));
app.use(require('./customer'));
app.use(require('./login'));
// app.use(require('./upload'));

module.exports = app;