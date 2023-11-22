'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReviewMovie.init({
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReviewMovie',
  });
  return ReviewMovie;
};