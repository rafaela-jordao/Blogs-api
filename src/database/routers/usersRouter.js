const { Router } = require('express');

const usersController = require('../../controllers/usersController');
const authController = require('../../controllers/authController');

const router = Router();

router.post('/', usersController.create);

router.get('/', authController.validateToken, usersController.list);

module.exports = router;
