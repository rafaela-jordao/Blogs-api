const jwtService = require('../services/jwtService');
const usersService = require('../services/usersService');

const usersController = {
  create: async (req, res) => {
    const { displayName, email, password, image } = usersService.validateBody(req.body);

    await usersService.findByEmail(email);
    await usersService.create({ displayName, email, password, image });
    const token = jwtService.createToken({ email, password });

    res.status(201).json({ token });
  },

  list: async (req, res) => {
    const findAll = await usersService.list();
    res.status(200).json(findAll);
  },

  getById: async (req, res) => {
    const userId = await usersService.getById(req.params.id);

    if (!userId) {
      const e = new Error('User does not exist');
      e.name = 'NotFoundError';
      throw e;
    }
    res.status(200).json(userId);
  },

};

module.exports = usersController;