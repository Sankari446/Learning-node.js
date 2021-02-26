 const { Router } = require('express');
 const sanksController = require('./controllers/sanksController');

const router = Router();

router.get('/signup', sanksController.signup_get);
router.post('/signup', sanksController.signup_post);
router.get('/login', sanksController.login_get);
router.post('/login', sanksController.login_post);

 module.exports = router;
