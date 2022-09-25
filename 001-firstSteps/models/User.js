const { accesLevels } = require('../consts/accesLevels');
exports.users = [
    {
        accesLevel: accesLevels.USER,
        login: 'Doman',
        password: 'secret',
        budget: 5000,
    },
    {
        accesLevel: accesLevels.ADMIN,
        login: 'Samuraj',
        password: 'supersecret',
        budget: 50000,
    },
    {
        accesLevel: accesLevels.MODERATOR,
        login: 'Tadeo',
        password: 'moderator',
        budget: 99999,
    }
];
exports.User = class {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.accesLevel = accesLevels.USER;
        this.budget = 0;
    }
};