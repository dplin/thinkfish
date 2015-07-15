'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
    res.render('index', {
        description: "Derek Lin Portfolio Site"
    });
};
