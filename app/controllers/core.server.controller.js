'use strict';

var Work = require('../models/works');
var About = require('../models/about');
var Contact = require('../models/contact');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
/*    var works1 = new Works({image_url: '/img/sc_lamoore.png', work_url: 'http://lamoorebeauty.com/'});
    var works2 = new Works({image_url: '/img/sc_doccomp.png', work_url: 'http://doccomp.thinkfish.org/'});
    var works3 = new Works({image_url: '/img/sc_white-orchid.png', work_url: 'http://www.white-orchid.ca/'});
    var works4 = new Works({image_url: '/img/sc_amorebrewing.png', work_url: 'http://www.amorebrewing.com/'});
    works1.save();
    works2.save();
    works3.save();
    works4.save();*/
    //Works.remove().exec();

    res.render('index', {
        description: "Derek Lin Portfolio Site"
    });
};

/**
*   REST API
*/

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
