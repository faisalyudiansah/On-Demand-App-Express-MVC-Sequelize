'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewFilm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReviewFilm.init({
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    FilmId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReviewFilm',
  });
  return ReviewFilm;
};