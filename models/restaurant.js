var db = require('./_db');
var Sequelize = require('sequelize');

var Restaurant = db.define('restaurant', {
   name: Sequelize.STRING,
   cuisine: Sequelize.STRING,
   price: { 
       type: Sequelize.INTEGER,
       validate: {
           min: 1,
           max: 5
       }
   },
})



module.exports = Restaurant;