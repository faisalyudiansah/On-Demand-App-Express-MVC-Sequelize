'use strict';
const { dateFormattedYMD } = require('../helpers/formatter');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.ReviewMovie)
      Movie.belongsToMany(models.User, { through: models.ReviewMovie })
    }

    get formattedDate(){
      return dateFormattedYMD(this.releasedDate)
    }
  }

  Movie.init({
    title: DataTypes.STRING,
    directorName: DataTypes.STRING,
    releasedDate: DataTypes.DATE,
    imageUrl: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    trailerUrl: DataTypes.STRING,
    movieUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};