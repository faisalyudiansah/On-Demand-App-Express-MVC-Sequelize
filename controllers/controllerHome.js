const { User, UserProfile, Movie, ReviewMovie, sequelize } = require('../models')
const { Op } = require("sequelize")
const bcrypt = require('bcryptjs')


class Controller {
    //===================================================================================
    static async sessionAccountLogin(req, res, next) {
        try {
            let notValidMsg = `Please login first!`
            if (!req.session.userId) {
                res.redirect(`/login?error=${notValidMsg}`)
            } else {
                next()
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async sessionAccountRole(req, res, next) {
        try {
            let notValidMsg = `You have no access`
            if (req.session.userRole !== 'admin') {
                res.redirect(`/?error=${notValidMsg}`)
            } else {
                next()
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }

    }

    static async sessionAccountSubs(req, res, next) {
        try {
            let notValidMsg = `Access Denied. You are already subscribed`
            if (req.session.userSubs === true) {
                res.redirect(`/?error=${notValidMsg}`)
            } else {
                next()
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async sessionAccountConfirm(req, res, next) {
        try {
            let notValidMsg = `Access Denied`
            if (req.session.userConfirm === true) {
                res.redirect(`/?error=${notValidMsg}`)
            } else {
                next()
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async logout(req, res, next) {
        try {
            req.session.destroy()
            res.redirect('/login')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    //===================================================================================

    static async showLogin(req, res) {
        try {
            let { error } = req.query
            let notValidMsg = `You already login`
            if (req.session.userId) {
                res.redirect(`/?error=${notValidMsg}`)
            } else {
                res.render('login', { error })
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async validateLogin(req, res) {
        try {
            let { username, password } = req.body
            let notValidMsg = `Invalid username/password`

            let data = await User.findOne({ where: { username } })
            if (data) {
                let isValidPassword = bcrypt.compareSync(password, data.password)
                if (isValidPassword) {

                    req.session.userId = data.id
                    req.session.userRole = data.role
                    req.session.userConfirm = data.confirmation
                    req.session.userSubs = data.subscription

                    res.redirect('/')
                } else {
                    res.redirect(`/login?error=${notValidMsg}`)
                }
            } else {
                res.redirect(`/login?error=${notValidMsg}`)
            }
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async register(req, res) {
        try {
            let { errors } = req.query
            res.render('register', { errors })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveNewUser(req, res) {
        try {
            let { username, password, email, firstName, lastName, dateOfBirth, nationality } = req.body
            let dataUser = await User.create({ username, password, email })
            await dataUser.createUserProfile({ firstName, lastName, dateOfBirth, nationality })
            res.redirect('login')
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                let errorsCollect = error.errors.map(el => el.message)
                let uniqueErrorCollect = Array.from(new Set(errorsCollect))
                res.redirect(`/register?errors=${uniqueErrorCollect}`)
            } else {
                console.log(error)
                res.send(error)
            }
        }
    }

    //===================================================================================

    static async homeMovie(req, res) {
        try {
            let { search, error, payment } = req.query
            let optionsWhere = {}
            if (search) {
                optionsWhere = {
                    title: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            }
            let data = await Movie.findAll({
                order: [['id', 'ASC']],
                where: optionsWhere
            })
            let user = await User.findByPk(req.session.userId)
            res.render('home', { data, error, payment, user })
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
                    include: [UserProfile, ReviewMovie]
                }

            })
            let [avgRating] = await ReviewMovie.avgRatingMovie(idMovie)
            let user = await User.findByPk(req.session.userId)
            res.render('detailMovie', { data, idMovie, avgRating, user })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveNewReview(req, res) {
        try {
            let { idMovie } = req.params
            let { description, rating, } = req.body
            await ReviewMovie.create({ description, rating, MovieId: idMovie, UserId: req.session.userId })
            res.redirect(`/movies/${idMovie}`)
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller
