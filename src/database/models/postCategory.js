const Sequelize = require('sequelize');

const createPostCategory = (Sequelize, DataTypes) => {
  const PostCategory = Sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {
    tableName: 'PostCategories',
    timestamps: false
  });

 /*  Existe um relacionamento Muitos-Para-Muitos entre Category e BlogPost,
  usando tabela 'PostCategory' como tabela de junção, que terá a chave estrangeira 'postId'
   */
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId', through: PostCategory, as: 'blogPosts',
    });

/*  Existe um relacionamento Muitos-Para-Muitos entre BlogPost e Category,
  usando tabela 'PostCategory' como tabela de junção, que terá a chave estrangeira 'categoryId'
   */
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId', through: PostCategory, as: 'categories',
    });

  };

  return PostCategory;
  };

  module.exports = createPostCategory;
