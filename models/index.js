var db = require('./_db')
var Place = require('./place');
var Hotel = require('./hotel');
var Activity = require('./activity');
var Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;