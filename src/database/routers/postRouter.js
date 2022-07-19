const { Router } = require('express');

const postController = require('../../controllers/postController');
const authController = require('../../controllers/authController');

const router = Router();

router.get('/', authController.validateToken, postController.list);

module.exports = router;
