'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ReviewFilms', 'FilmId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Films"
        },
        key:
          "id"
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ReviewFilms', 'FilmId')
  }
};
