const Joi = require('joi');
const { Category } = require('../database/models');

const categoryService = {
  validateBody: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
  
    const { error, value } = schema.validate(data);
  
    if (error) throw error;
  
    return value;
  },

  create: async ({ name }) => {
    const category = await Category.create({ name });
    return category;
  },

  list: async () => {
    const categoryAll = await Category.findAll();
    return categoryAll;
  },
};

module.exports = categoryService;