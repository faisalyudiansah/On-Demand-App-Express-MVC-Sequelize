'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/reviewfilm.json', 'utf-8')).map(el => {
      el.description, el.rating, el.UserId, el.createdAt = el.updatedAt = new Date(), el.FilmId
      return el
    })
    await queryInterface.bulkInsert('ReviewFilms', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReviewFilms')
  }
};
