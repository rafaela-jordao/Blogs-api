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
    tableName: 'postCategories',
    timestamps: false
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId', through: PostCategory, as: 'BlogPost',
    });

    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId', through: PostCategory, as: 'Category',
    });

  };

  return PostCategory;
  };

  module.exports = createPostCategory;
