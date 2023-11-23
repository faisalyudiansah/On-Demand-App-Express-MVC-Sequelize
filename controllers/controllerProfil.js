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
            let user = await User.findByPk(req.session.userId)
            res.render('profilUser', { data, dateFormattedYMD, user })
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
            let user = await User.findByPk(req.session.userId)
            res.render('editUser', { data, inputDate, user })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveUpdateProfil(req, res) {
        const { idUser, idUserProfile } = req.params
        try {

            const { firstName, lastName, username, email, dateOfBirth, nationality } = req.body
            await User.update({ username, email }, {
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