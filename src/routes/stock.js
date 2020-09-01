var express = require('express');
var router = express.Router();
const {stockController} = require('./../controllers');

/* GETlisting. */
router.get('/analysis',stockController.getAnalysis );
router.get('/news',stockController.getNews );


module.exports = router;
