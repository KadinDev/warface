const express = require('express');
const routes = express.Router();

const multer = require('../src/app/middlewares/multer');

routes.get('/', function (req, res) {
    return res.redirect('/Pages');
} );

routes.get('/Pages', function (req, res) {
    return res.render('Pages/index');
});

routes.get('/players', function (req, res) {
    return res.render('Pages/pagePlayers');
});

routes.get('/Login', function (req, res) {
    return res.render('Pages/login');
});

routes.get('/player', ( req, res ) => {
    return res.render('Pages/player');
});


module.exports = routes;