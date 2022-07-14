const authService = require('../services/authService');
const jwtService = require('../services/jwtService');

const authController = {
  login: async (req, res) => {
    const { email, password } = authService.validateBody(req.body);

    const token = await authService.login(email, password);

    res.status(200).json({ token });
  },

  validateToken: (req, res, next) => {
    const { authorization } = req.headers;
   
    jwtService.validateToken(authorization);

    next();
  },
};

module.exports = authController;