'use strict';

var Work = require('../models/works');
var About = require('../models/about');
var Contact = require('../models/contact');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
/*    var about = new About({description: "Hello, my name is Derek. I'm a passionate web developer based in Toronto, Canada. I love making beautiful, responsive and user-friendly web site with a preference towards clean, simple, minimalistic design."});
    var contact1 = new Contact({name: 'facebook', url: 'https://www.facebook.com/pengy.lin'});
    var contact2 = new Contact({name: 'twitter', url: 'https://twitter.com/side1021'});
    var contact3 = new Contact({name: 'dribbble', url: 'https://dribbble.com/derekpclin'});
    var contact4 = new Contact({name: 'linkedin', url: 'https://www.linkedin.com/pub/derek-lin/17/b04/390'});
    about.save();
    contact1.save();
    contact2.save();
    contact3.save();
    contact4.save();*/
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
