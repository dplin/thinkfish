var express = require('express');
var router = express.Router();
var core = require('../../app/controllers/core.server.controller');

/* GET home page. */
module.exports = core.index;
