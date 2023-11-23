const { User, UserProfile, Movie, ReviewMovie, sequelize } = require('../models')
const { Op, where } = require("sequelize")
const { dateFormattedYMD, currencyToIDR, inputDate } = require('../helpers/formatter')

class Controller {
    static async detailProfilUser(req, res) {
        const { idUser } = req.params
        try {
            const data = await User.findByPk(idUser, {
                include: {
                    model: UserProfile
                }
            })
            // res.json(data)
            res.render('profilUser', { data, dateFormattedYMD })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async editProfilPage(req, res) {
        const { idUser } = req.params
        try {
            const data = await User.findByPk(idUser, {
                include: {
                    model: UserProfile
                }
            })
            res.render('editUser', { data, inputDate })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveUpdateProfil(req, res) {
        const { idUser, idUserProfile } = req.params
        try {

            const { firstName, lastName, username, email, password, dateOfBirth, nationality } = req.body
            await User.update({ username, password, email }, {
                where: {
                    id: idUser
                }
            })
            await UserProfile.update({ firstName, lastName, dateOfBirth, nationality }, {
                where: {
                    id: idUserProfile
                }
            })
            // res.json(req.body)
            res.redirect(`/profil/${idUser}`)
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller