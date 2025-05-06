const express = require('express');
const router = express.Router();
const {ping} = require('../controllers/pingController');
const {login} = require('../controllers/loginController');

router.post('/login', login);
router.get('/ping', ping);


module.exports = router;
