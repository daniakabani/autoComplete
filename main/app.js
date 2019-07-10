// third party packages
const express = require('express');
const app = express();

// routes
const getBooks = require('./routes');

app.use('/api/v1/', getBooks);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: 'page not found'
    })
});
app.use(function (err, req, res) {
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;