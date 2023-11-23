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

    static async avgRatingMovie(idMovie) {
      let queryDb = `SELECT ROUND(AVG(rm.rating), 1) AS avg
            FROM "Movies" m
            JOIN "ReviewMovies" rm ON m.id = rm."MovieId"
            WHERE m.id = ${idMovie};`

      let avgRating = await sequelize.query(queryDb, {
        model: ReviewMovie,
        mapToModel: true
      })
      return avgRating
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