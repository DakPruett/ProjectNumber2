const router = require('express').Router();


router.use('/users', require('./userroutes'));


module.exports = router