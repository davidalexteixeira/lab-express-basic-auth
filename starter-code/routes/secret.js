'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/secret', function (req, res, next) {
  res.render('secret', { title: 'Privado' });
});

module.exports = router;
