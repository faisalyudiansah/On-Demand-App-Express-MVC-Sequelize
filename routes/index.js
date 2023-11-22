const express = require('express')
const router = express.Router()

const dashboardAdmin = require('./dashboardAdmin')
const profilUser = require('./profilUser')

const Controller = require('../controllers/controllerHome')

router.get('/', Controller.homeMovie) // home
router.get('/movies/:idMovie', Controller.detailMovie) // detail
router.get('/movies/:idMovie/play', Controller.playMovie) // play movie

router.get('/confirm/:idUser', Controller.confirmTopay) // konfirmasi mau bayar
router.get('/confirm/:idUser/payment', Controller.payment) // tempat bayar
router.post('/confirm/:idUser/payment', Controller.saveNewPayment) // tempat bayar POST : update confirmation = true

//===================================================================================
router.use('/profil', profilUser)
router.use('/dashboard', dashboardAdmin)


module.exports = router