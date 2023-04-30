const router = require('express').Router();

const {signup,getbill} = require('../controller/app.Controller.js')

/* HTTP Requests */
router.post('/user/signup',signup)
router.post('/product/getBill',getbill)


module.exports= router;  