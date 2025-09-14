const router = require('express').Router();
const contactCont = require('../controllers/contacts');



// router.get('/',(req, res) => {res.send('hello world'); });




router.use('/contacts', require('./contacts'));


module.exports = router;