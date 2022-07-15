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

};

module.exports = usersController;