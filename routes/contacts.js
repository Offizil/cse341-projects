const express = require('express');
const router = express.Router();

const contactsControllers = require('../controllers/contacts');

router.get('/', contactsControllers.getAllcontacts);

router.get('/:id', contactsControllers.getSinglecontact);

module.exports = router;