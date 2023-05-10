var express = require('express');
var router = express.Router();
var users  = require('./users.routes');

router.use('/api', users);

module.exports = router; 