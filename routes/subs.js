const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controllerSubs')

router.get('/', Controller.payment) // tempat bayar
router.get('/confirm', Controller.saveNewPayment) // tempat bayar POST : update confirmation = true

module.exports = router