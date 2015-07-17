'use strict';

var Work = require('../models/works');

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
exports.list = function(req, res) {
    Work.find({}, function(err, results){
        res.json(results);
    });
};
