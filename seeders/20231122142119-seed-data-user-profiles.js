'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/userprofile.json', 'utf-8')).map(el => {
      el.firstName, el.lastName, el.dateOfBirth, el.nationality, el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('UserProfiles', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles')
  }
};