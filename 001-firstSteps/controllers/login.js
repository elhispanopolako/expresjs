const { getUserFromDatabase } = require('../services/getUsersFromDatabase')

exports.postLogin = (req, res) => {
    try {
        const { login, password } = req.body;
        const user = { ...getUserFromDatabase(login) };

        if (!user || user && user.password !== password) {
            return res.status(401).json({
                message: 'Błędne hasło lub login!',
            })
        }
        delete user.password;

        return res.status(200).json({
            user,
        });

    } catch (error) {
        return res.status(500).json({
            error,
            message: 'Wystąpił błąd w endpoince /login'
        })
    }
}