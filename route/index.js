var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

var Hotel = require('../models/hotel');
var Activity = require('../models/activity');
var Restaurant = require('../models/restaurant');
var Place = require('../models/place');



router.get('/', function(req, res, next){
    //res.send("hello world");
   var outerScopeContainer = {};
   Hotel.findAll()
        .then(function (dbHotels) {
        outerScopeContainer.dbHotels = dbHotels;
        return Restaurant.findAll();
        })
        .then(function (dbRestaurants) {
        outerScopeContainer.dbRestaurants = dbRestaurants;
        return Activity.findAll();
        })
        .then(function (dbActivities) {
        res.render('index', {
              
            templateHotels: outerScopeContainer.dbHotels,
            templateRestaurants: outerScopeContainer.dbRestaurants,
            templateActivities: dbActivities
        });
})
.catch(next);
})

module.exports = router;

