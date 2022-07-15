const Joi = require('joi');
const { User } = require('../database/models');

const usersService = {
validateBody: (data) => {
  const schema = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    image: Joi.string().required(),
  });

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
},

// verifica se o email já existe - se sim, retorna menssagem de erro.
findByEmail: async (email) => {
  const existEmail = await User.findOne({ where: { email } });
  if (existEmail) {
    const e = new Error('User already registered');
    e.name = 'ConflictError';
    throw e;
  }
},

create: async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  
  return user.dataValues; 
},

};

module.exports = usersService;
