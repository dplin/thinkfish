'use strict';

var Service = require('../models/services');
var Work = require('../models/works');
var About = require('../models/about');
var Contact = require('../models/contact');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
    res.render('index', {
        description: "Derek Lin Portfolio Site"
    });
};

/**
*   REST API
*/

// Services
exports.listServices = function(req, res) {
    Service.find({}, function(err, results){
        res.json(results);
    });
};

// Works
exports.listWorks = function(req, res) {
    Work.find({}, function(err, results){
        res.json(results);
    });
};

// About
exports.listAbout = function(req, res) {
    About.find({}, function(err, results){
        res.json(results);
    });
};

// Contact
exports.listContact = function(req, res) {
    Contact.find({}, function(err, results){
        res.json(results);
    });
};
