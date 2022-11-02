const router = require('express').Router();


router.use('/', require('./homeroutes'));
router.use('/api', require('./api'));

module.exports = router