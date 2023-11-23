const { User, UserProfile, Movie, ReviewMovie, sequelize } = require('../models')
const { Op } = require("sequelize")
const qrcode = require('qrcode')

class Controller {
    static async payment(req, res) {
        const qrUrl = 'https://bcadigital.co.id/'
        try {
            let user = await User.findByPk(req.session.userId)
            qrcode.toDataURL(qrUrl, (err, src) => {
                res.render('paymentPage', {
                    qr_code: src,
                    user
                })
            })
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveNewPayment(req, res) {
        try {
            let success = `Thank you for your payment. Please wait for payment confirmation from the administrator.`
            await User.update({ confirmation : true } , {
                where : {
                    id : req.session.userId
                }
            })
            res.redirect(`/?payment=${success}`)
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller