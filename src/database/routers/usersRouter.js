const { Router } = require('express');

const usersController = require('../../controllers/usersController');
const authController = require('../../controllers/authController');
const { route } = require('./authRouter');

const router = Router();

router.post('/', usersController.create);

router.get('/', authController.validateToken, usersController.list);
router.get('/:id', authController.validateToken, usersController.getById);

module.exports = router;
