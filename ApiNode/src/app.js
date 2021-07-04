'use strict'

const express = require('express');
// const bodyParser = require('body-parser'); 
// const mongoose = require('mongoose');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./Models/Posts');

// const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.listen(8081, function(){
  console.log('Servidor rodando na url http://localhost:8081');
});

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())




// mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=localhost-server&3t.defaultColor=0,120,215&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true');

//Carrega as rotas
// const index = require('./routes/index');
// const product = require('./routes/product-route');

// app.use('/', index);
// app.use('/products', product);

// module.exports = app;

app.get('/', function(req, res){
  res.send('Hello World! Wellcome to my website');
});

app.get('/profile/:name', function(req, res){
    res.send('Hello ' + req.params.name);
});

//Rota para o formulario
app.get('/cad', function(req, res){
  res.render('formulario');
})

app.post('/add', function(req, res){
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
    res.send('Postagem cadastrada com sucesso');
  }).catch(function(err){
    res.send('Erro ao cadastrar a postagem: ' + err);
  });
})

app.get('/del/:id', function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.send('Postagem deletada com sucesso');
  }).catch(function(err){
    res.send('Erro ao deletar a postagem: ' + err);
  });  
});

app.get('/post_all', function(req, res){
  Post.findAll().then(function(posts){
    res.render('home', {posts: posts});
  }).catch(function(err){
    res.send('Erro ao carregar as postagens: ' + err);
  });
});
