const Sequelize = require('sequelize');

const createBlogPost = (Sequelize, DataTypes) => {
  const BlogPost = Sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true},
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
      timestamps: false,
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId', as: 'user'
      });
    };
    return BlogPost;
    
  };

module.exports = createBlogPost;
