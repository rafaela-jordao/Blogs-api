const sequelize = require('sequelize');

const createCategory = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    }, {
      tableName: 'Categories',
      timestamps: false,
    })
    return Category;
}

module.exports = createCategory;
