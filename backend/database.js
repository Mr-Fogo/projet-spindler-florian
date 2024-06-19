const Sequelize = require('sequelize');
const POSTGRE_KEY = process.env.DB_CONNECTION_STRING;


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: true
  });
  const user = require("./models/user.js")(sequelize, Sequelize);
  const album = require("./models/album.js")(sequelize, Sequelize);
  
 module.exports.User = user;
 module.exports.Album = album;
 module.exports.sequelize = sequelize; 
  

 //EN HAUT DE LA PAGE
  // const sequelize = new Sequelize(POSTGRE_KEY, {
  //   dialect: 'postgres',
  //   protocol: 'postgres',
  //   dialectOptions: {
  //       ssl: true,
  //       native:true
  //   }
  // });