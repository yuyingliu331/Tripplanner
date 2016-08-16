var db = require('./_db');
var Sequelize = require('sequelize');

var Place = db.define('place', {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.FLOAT,
})

module.exports = Place;
