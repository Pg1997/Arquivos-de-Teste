const Sequelize = require('sequelize');

//Faz a conexão com o BD
const sequelize = new Sequelize('nodejs_course', 'root', 'americana2020*', {
    host: "localhost",
    dialect: "mysql"
});


module.exports = {
   Sequelize: Sequelize,
   sequelize: sequelize
}
