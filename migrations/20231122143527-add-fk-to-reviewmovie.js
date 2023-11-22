'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ReviewMovies', 'MovieId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Movies"
        },
        key:
          "id"
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ReviewMovies', 'MovieId')
  }
};
