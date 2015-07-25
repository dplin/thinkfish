'use strict';

var Service = require('../models/services');
var Work = require('../models/works');
var About = require('../models/about');
var Contact = require('../models/contact');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
/*    var service1 = new Service({title: 'Web/UI Design', description: 'Design beautiful web/mobile interfaces that are visually engaging and simple to use.'});
    var service2 = new Service({title: 'HTML/CSS', description: 'Utilizing HTML5, CSS3, JavaScript and RWD I build each project to meet the needs of the client.'});
    var service3 = new Service({title: 'Research', description: 'Understanding the needs of each individual client and business is vital in deliverying the perfect user experience.'});


    service1.save();
    service2.save();
    service3.save();
*/
    //Works.remove().exec();

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
