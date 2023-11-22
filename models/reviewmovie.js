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
      ReviewMovie.belongsTo(models.User)
      ReviewMovie.belongsTo(models.Movie)
    }
  }

  ReviewMovie.init({
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReviewMovie',
  });
  return ReviewMovie;
};