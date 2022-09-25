const { users } = require('../models/User');
exports.getAllUsersFromDatabase = () => users.map(user => ({
    login: user.login,
    accesLevel: user.accesLevel,
}))