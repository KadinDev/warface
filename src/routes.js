const express = require('express');
const routes = express.Router();

const multer = require('../src/app/middlewares/multer');

routes.get('/', function (req, res) {
    return res.redirect('/Pages')
} );

routes.get('/Pages', function (req, res) {
    return res.render('Pages/index')
});

routes.get('/home', function (req, res) {
    return res.render('Pages/home')
});


module.exports = routes;