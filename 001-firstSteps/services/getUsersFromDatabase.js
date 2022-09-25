const { users } = require('../models/User')
exports.getUserFromDatabase = (login) => {
    return users.find(user => user.login === login);
}