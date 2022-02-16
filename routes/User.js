const router = require('express').Router();
const ctrl = require('../controllers');

const Auth = require("../middleware/Auth");

router.post('/register', ctrl.users.register);
router.post('/login', ctrl.users.login);
router.get('/profile', Auth, ctrl.users.profile);

module.exports = router;