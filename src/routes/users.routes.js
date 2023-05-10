const express = require('express');
const router  = express.Router(); 
const userController = require('../controllers/users.controllers.js'); 


router.get('/users', userController.getUsers)
router.post('/users/post', userController.getUsers)

module.exports = router;  