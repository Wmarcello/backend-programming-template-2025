const { login } = require('./controllers/authController');

router.post('/api/authentication/login', login);

module.exports = router;
