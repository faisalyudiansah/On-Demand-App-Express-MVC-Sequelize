'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/movie.json', 'utf-8')).map(el => {
      el.title, el.directorName, el.releasedDate, el.imageUrl, el.synopsis, el.trailerUrl, el.movieUrl, el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Movies', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies')
  }
};
