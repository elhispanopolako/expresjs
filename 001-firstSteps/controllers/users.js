const { getUserFromDatabase } = require("../services/getUsersFromDatabase");
const { getAllUsersFromDatabase } = require("../services/getAllUsersFromDatabase");

exports.getUser = (req, res) => {
    try {
        const { login } = req.params;
        const user = getUserFromDatabase(login);

        if (!user) {
            return res.status(404).json({
                message: 'Nie znaleziono użytkownika o podanym loginie'
            });
        }
        return res.status(200).json({
            user,
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Wystąpił błąd podczas przetwarzania metody GET w endpoincie /users',
            error
        })
    }
}
exports.getUsers = (req, res) => {
    try {
        const users = getAllUsersFromDatabase();
        return res.status(200).json({
            users,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Wystąpił błąd podczas przetwarzania metody GET w endpoincie /users',
            error
        })
    }
}

