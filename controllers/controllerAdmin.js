class Controller {
    static async listMovies(req, res) {
        try {
            res.send('listMovies')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    //=========================================================

    static async addMovie(req, res) {
        try {
            res.render('dashboardAddMovie')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveNewMovie(req, res) {
        try {
            res.send('saveNewMovie')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    //=========================================================

    static async editMoviePage(req, res) {
        try {
            res.send('editMoviePage')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveUpdateMovie(req, res) {
        try {
            res.send('saveUpdateMovie')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async listUserFromAdmin(req, res) {
        try {
            res.render('dashboardListUser')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async deleteUser(req, res) {
        try {
            res.send('deleteUser')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async listUserToApprove(req, res) {
        try {
            res.send('listUserToApprove')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async changeSubsUser(req, res) {
        try {
            res.send('changeSubsUser')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller