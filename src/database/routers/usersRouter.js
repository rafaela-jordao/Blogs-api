const { Router } = require('express');

const usersController = require('../../controllers/usersController');

const router = Router();

router.post('/', usersController.create);
router.get('/', usersController.list);

module.exports = router;
