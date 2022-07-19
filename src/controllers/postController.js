const postService = require('../services/postService');

const postController = {
  list: async (req, res) => {
    const posts = await postService.list();

    res.status(200).json(posts);
  },
  
};

module.exports = postController;
