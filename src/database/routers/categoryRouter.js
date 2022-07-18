const { Router } = require('express');

const categoryController = require('../../controllers/categoryController');
const authController = require('../../controllers/authController');

const router = Router();

router.post('/', authController.validateToken, categoryController.create);


module.exports = router;
