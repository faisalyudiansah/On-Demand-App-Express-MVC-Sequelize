const { User, UserProfile, Movie, ReviewMovie, sequelize } = require('../models')
const { Op } = require("sequelize")
const { dateFormattedYMD, inputDate } = require('../helpers/formatter')
class Controller {
    static async listMovies(req, res) {
        try {
            let { deleted } = req.query
            let data = await Movie.findAll({
                order: [['id', 'DESC']]
            })
            res.render('dashboardListMovie', { data, dateFormattedYMD, deleted })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    //=========================================================

    static async addMovie(req, res) {
        const { errors } = req.query
        try {
            res.render('dashboardAddMovie', { errors })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveNewMovie(req, res) {
        try {
            await Movie.create(req.body)
            res.redirect('/dashboard')
        } catch (error) {
            const errors = error.errors.map((el) => el.message);
            res.redirect(`/dashboard/addmovie?errors=${errors}`)
        }
    }

    //=========================================================

    static async editMoviePage(req, res) {
        const { errors } = req.query
        const { idMovie } = req.params
        try {
            const data = await Movie.findByPk(idMovie)
            // res.json(data)
            res.render('dashboardEditMovie', { data, inputDate, errors })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveUpdateMovie(req, res) {
        const { idMovie } = req.params
        try {
            const { title, directorName, releasedDate, imageUrl, synopsis, trailerUrl, movieUrl } = req.body
            await Movie.update({ title, directorName, releasedDate, imageUrl, synopsis, trailerUrl, movieUrl }, {
                where: {
                    id: idMovie
                },
            })
            res.redirect('/dashboard')
        } catch (error) {
            const { idMovie } = req.params
            const errors = error.errors.map((el) => el.message);
            res.redirect(`/dashboard/edit/${idMovie}?errors=${errors}`)
        }
    }
    static async deleteMovie(req, res) {
        let { idMovie } = req.params
        try {
            let data = await Movie.findByPk(idMovie)
            await data.destroy()
            res.redirect(`/dashboard?deleted=${data.title}`)
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async listUserFromAdmin(req, res) {
        try {
            let { deleted } = req.query
            const data = await User.findAll({
                include: {
                    model: UserProfile
                },
                order: [
                    ['subscription', 'ASC'],
                    ['confirmation', 'DESC']
                ]
            })
            res.render('dashboardListUser', { data, dateFormattedYMD, deleted })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async deleteUser(req, res) {
        const { idUser } = req.params
        try {
            let data = await User.findByPk(idUser)
            await data.destroy()
            res.redirect(`/dashboard/listuser?deleted=${data.username}`)
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async listUserToApprove(req, res) {
        const { idUser } = req.params
        try {
            await User.update({ confirmation: true }, {
                where: {
                    id: idUser
                },
            })
            res.redirect('/dashboard/listuser')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async changeSubsUser(req, res) {
        const { idUser } = req.params
        try {
            await User.update({ subscription: true }, {
                where: {
                    id: idUser
                },
            })
            res.redirect('/dashboard/listuser')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller