const express = require('express')
const router = express.Router()

const dashboardAdmin = require('./dashboardAdmin')
const profilUser = require('./profilUser')
const subs = require('./subs')

const Controller = require('../controllers/controllerHome')


router.get('/login', Controller.showLogin)
router.post('/login', Controller.validateLogin)
router.get('/register', Controller.register)
router.post('/register', Controller.saveNewUser)

//===================================================================================
router.use(Controller.sessionAccountLogin) // session login check
//===================================================================================

router.get('/logout', Controller.logout)


router.get('/', Controller.homeMovie) // home
router.get('/movies/:idMovie', Controller.detailMovie) // detail
router.post('/movies/addreview/:idMovie', Controller.saveNewReview) // save new review POST

router.use('/profil', profilUser)

//===================================================================================
router.use(Controller.sessionAccountSubs) // session role check
//===================================================================================

router.use('/payment', subs)

//===================================================================================
router.use(Controller.sessionAccountRole) // session role check
//===================================================================================

router.use('/dashboard', dashboardAdmin)


module.exports = router