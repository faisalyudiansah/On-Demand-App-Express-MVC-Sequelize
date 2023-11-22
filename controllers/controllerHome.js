class Controller {
    static async homeMovie(req, res) {
        try {
            res.send('homeMovie')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async detailMovie(req, res) {
        try {
            res.send('detailMovie')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async playMovie(req, res) {
        try {
            res.send('playMovie')
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