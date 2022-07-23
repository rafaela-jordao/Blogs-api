const postService = require('../services/postService');

const postController = {
  list: async (req, res) => {
    const posts = await postService.list();

    res.status(200).json(posts);
  },

  getById: async (req, res) => {
    const postId = await postService.getById(req.params.id);

    if (!postId) {
      const e = new Error('Post does not exist');
      e.name = 'NotFoundError';
      throw e;
    }
    res.status(200).json(postId);
  },
  
};

module.exports = postController;
