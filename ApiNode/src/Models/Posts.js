const db = require('../db'); 

const Postagens = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT 
    }
 });

 module.exports = Postagens;

//  Postagens.sync({force: true});