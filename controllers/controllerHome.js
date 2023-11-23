const { User, UserProfile, Movie, ReviewMovie, sequelize } = require('../models')
const { Op } = require("sequelize")
class Controller {
    static async homeMovie(req, res) {
        try {
            let data = await User.findAll()
            res.send(data)
            // let { search } = req.query
            // let optionsWhere = {}
            // if (search) {
            //     optionsWhere = {
            //         title: {
            //             [Op.iLike]: `%${search}%`
            //         }
            //     }
            // }
            // let data = await Movie.findAll({
            //     order: [['id', 'ASC']],
            //     where: optionsWhere
            // })
            // res.render('home', { data })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async detailMovie(req, res) {
        try {
            let { idMovie } = req.params
            let data = await Movie.findOne({
                where: {
                    id: idMovie
                },
                include: {
                    model: User,
                    include: UserProfile
                }

            })
            // res.send(data)
            res.render('detailMovie', { data })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async confirmTopay(req, res) {
        try {
            res.send('confirmTopay')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async payment(req, res) {
        try {
            res.send('payment')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveNewPayment(req, res) {
        try {
            res.send('saveNewPayment')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller