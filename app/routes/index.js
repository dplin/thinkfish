var express = require('express');
var router = express.Router();
var core = require('../../app/controllers/core.server.controller');

/* GET home page. */
router.get('/', core.index);

/**
* REST API
**/

// GET - List works
router.get('/api/works', core.listWorks);

// GET - List about
router.get('/api/about', core.listAbout);

// GET - List contact
router.get('/api/contact', core.listContact);




module.exports = router;
