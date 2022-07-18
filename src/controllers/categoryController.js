const categoryService = require('../services/categoryService');

const categoryController = {
  create: async (req, res) => {
    const { name } = categoryService.validateBody(req.body);

    const newCategory = await categoryService.create({ name });

    res.status(201).json(newCategory);
  },

  list: async (req, res) => {
    const categoryAll = await categoryService.list();
    
    res.status(200).json(categoryAll);
  },
};

module.exports = categoryController;