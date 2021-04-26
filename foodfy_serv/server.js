const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const cards = require('./data');

server.listen(5000, function() {
    console.log('server is running')
});
nunjucks.configure('views', { 
    express: server,
    autoescape: false,
    noCache: true,
});
server.set('view engine', 'njk');
server.use(express.static('public'));
server.get('/', function(req, res){
    return res.render('about', { items:cards});
});
server.get('/sobre', function(req, res) {
    return res.render('sobre')
});
server.get('/receitas', function(req, res) {
    return res.render('receitas', { items:cards })
});