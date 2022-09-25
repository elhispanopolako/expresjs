const { createUser } = require('../services/createUser')
exports.putRegister = (req, res) => {
    try {
        const { login, password } = req.body;
        const user = createUser(login, password);

        if (!user) {
            return res.status(409).json({
                message: "Użytkownik o podanym loginie już istnieje",
            });
        }

        return res.status(201).json({
            message: "ok",
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error,
            message: "Coś poszło nie tak w metodzie PUT endpointu /register",
        })
    }
}