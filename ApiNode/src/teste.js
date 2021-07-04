const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodejs_course', 'root', 'americana2020*', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then((result) => {
    console.log('Conexao realizada com sucesso!')
}).catch((err) => {
    console.log('Falha na conexao: ' + err)
});


const Postagens = sequelize.define('postagens', {
   titulo: {
       type: Sequelize.STRING
   },
   conteudo: {
       type: Sequelize.TEXT 
   }
});

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
       type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Cria as tabelas no banco de dados
// Postagens.sync({force: true});
// Usuarios.sync({force: true});

Postagens.create({
    titulo: "Primeiro Post",
    conteudo: "sdgkhfdlghjkfsdgljkfdhdlfkhjggfvhfgjhjfghj"
});

Usuarios.create({
    nome: "Paulo",
    sobrenome: "Ronchini",
    idade: 24,
    email: "gabriel.ronchini@gmail.com"
})