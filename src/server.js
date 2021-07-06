const { urlencoded } = require('express');

const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

// POST, PUT
const methodOverride = require('method-override');

const server = express();

// enable req body
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

// Para ver as infos e enviar para as rotas, sempre antes do use(routes)
server.use(methodOverride('_method'));

server.use(routes);
server.set('view engine', 'njk');

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(1000, () => {
    console.log('Server Start')
})