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

    get formattedDate() {
      return dateFormattedYMD(this.releasedDate)
    }
  }

  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is Required",
        },
        notNull: {
          msg: "Title is required",
        },
      },
    },
    directorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Director Name is Required",
        },
        notNull: {
          msg: "Director Name is required",
        },
      },
    },
    releasedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Released Date is Required",
        },
        notNull: {
          msg: "Released Date is required",
        },
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Thumbnail is Required",
        },
        notNull: {
          msg: "Thumbnail is required",
        },
        isUrl: {
          msg: "Thumbnail must be an URL"
        }
      },
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Synopsis is Required",
        },
        notNull: {
          msg: "Synopsis is required",
        },
      },
    },
    trailerUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Trailer URL is Required",
        },
        notNull: {
          msg: "Trailer URL is required",
        },
        isUrl: {
          msg: "Trailer must be an URL"
        }
      },
    },
    movieUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Movie URL is Required",
        },
        notNull: {
          msg: "Movie URL is required",
        },
        isUrl: {
          msg: "Movie must be an URL"
        }
      },
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};