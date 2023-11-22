const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controllerAdmin')


router.get('/', Controller.listMovies) // dashboard admin : list movie

router.get('/addmovie', Controller.addMovie) // dashboard admin : add movie 
router.post('/addmovie', Controller.saveNewMovie) // dashboard admin : add movie POST ADD

router.get('/edit/:idMovie', Controller.editMoviePage) // dashboard admin : list movie
router.post('/edit/:idMovie', Controller.saveUpdateMovie) // dashboard admin : list movie : update movie

router.get('/listuser', Controller.listUserFromAdmin) // dashboard admin : list user
router.get('/listuser/delete/:idUser', Controller.deleteUser) // dashboard admin : edit user delete

router.get('/listuser/confirm', Controller.listUserToApprove) // dashboard admin : list user butuh approve pembayaran
router.post('/listuser/confirm/:id', Controller.changeSubsUser) // dashboard admin : approve pembayaran

module.exports = router