const express = require('express')
const router = express.Router()

const dashboardAdmin = require('./dashboardAdmin')
const profilUser = require('./profilUser')

const Controller = require('../controllers/controllerHome')

router.get('/', Controller.homeMovie) // home
router.get('/movies/:idMovie', Controller.detailMovie) // detail

// router.get('/:idUser/movies/:idMovie', Controller.addReviewPage) // detail
// router.post('/:idUser/movies/:idMovie', Controller.saveNewReview) // detail

router.get('/:idUser/confirm', Controller.confirmTopay) // konfirmasi mau bayar
router.get('/:idUser/confirm/payment', Controller.payment) // tempat bayar
router.post('/:idUser/confirm/payment', Controller.saveNewPayment) // tempat bayar POST : update confirmation = true

//===================================================================================
router.use('/profil', profilUser)
router.use('/dashboard', dashboardAdmin)


module.exports = router