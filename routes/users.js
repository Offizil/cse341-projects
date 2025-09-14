const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/', usersControllers.getAllUsers);

router.get('/:id', usersControllers.getSingleUser);

module.exports = router;