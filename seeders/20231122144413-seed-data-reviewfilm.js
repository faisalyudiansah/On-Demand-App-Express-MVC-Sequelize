'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/reviewmovie.json', 'utf-8')).map(el => {
      el.description, el.rating, el.UserId, el.createdAt = el.updatedAt = new Date(), el.MovieId
      return el
    })
    await queryInterface.bulkInsert('ReviewMovies', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReviewMovies')
  }
};
