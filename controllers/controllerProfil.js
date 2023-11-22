class Controller {
    static async detailProfilUser(req, res) {
        try {
            res.send('detailProfilUser')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async editProfilPage(req, res) {
        try {
            res.send('editProfilPage')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static async saveUpdateProfil(req, res) {
        try {
            res.send('saveUpdateProfil')
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

}

module.exports = Controller