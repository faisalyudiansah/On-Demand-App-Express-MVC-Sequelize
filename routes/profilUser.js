const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controllerProfil')

router.get('/:idUser', Controller.detailProfilUser) // profil user
router.get('/:idUser/edit', Controller.editProfilPage) // edit profil user
router.post('/:idUser/edit', Controller.saveUpdateProfil) // edit profil user POST

module.exports = router