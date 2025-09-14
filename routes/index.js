const router = require('express').Router();
const userCont = require('../controllers/users');



// router.get('/',(req, res) => {res.send('hello world'); });




router.use('/users', require('./users'));


module.exports = router;