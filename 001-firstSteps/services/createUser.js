const { users, User } = require('../models/user');

exports.createUser = (login, password) => {
    const isUserExistAlready = users.some(user => user.login === login);

    if (isUserExistAlready) {
        return null;
    }
    const user = new User(login, password);
    users.push({ ...user });
    delete user.password;


    return user;
}