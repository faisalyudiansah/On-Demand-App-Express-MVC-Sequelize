'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Film.init({
    title: DataTypes.STRING,
    directorName: DataTypes.STRING,
    releasedDate: DataTypes.DATE,
    imageUrl: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    videoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};