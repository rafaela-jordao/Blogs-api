require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtService = {
  createToken: (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET);
    return token;
  },

  validateToken: (token) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error; 
    }
  },
};

module.exports = jwtService;