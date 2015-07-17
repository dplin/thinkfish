var express = require('express');
var router = express.Router();
var core = require('../../app/controllers/core.server.controller');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'HxEL' });
});*/

//module.exports = core.index;
router.get('/', core.index);

router.get('/api/works', core.list);


module.exports = router;
