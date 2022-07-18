const authService = require('../services/authService');
const jwtService = require('../services/jwtService');

const authController = {
  login: async (req, res) => {
    const { email, password } = authService.validateBody(req.body);

    const token = await authService.login(email, password);

    res.status(200).json({ token });
  },

  validateToken: async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization.length) {
      const error = new Error('Token not found');
      error.name = 'UnauthorizedError';
      throw error;
    }
   
    jwtService.validateToken(authorization);

    next();
  },
};

module.exports = authController;