'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8')).map(el => {
      el.userName, el.password, el.email, el.subscription, el.role, el.confirmation, el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users')
  }
};
