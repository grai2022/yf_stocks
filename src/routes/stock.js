var express = require('express');
var router = express.Router();
const {stockController} = require('./../controllers');
const validate = require('./../middlewares/validate');
const {stockValidation} =require('./../validation')

/* GETlisting. */
router.get('/analysis',validate(stockValidation.stockAnalysis),stockController.getAnalysis );
router.get('/news',validate(stockValidation.stockNews), stockController.getNews );


module.exports = router;
