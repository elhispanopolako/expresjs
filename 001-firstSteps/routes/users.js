const { Router } = require('express');
const { getUser, getUsers } = require('../controllers/users')
const router = Router();

router.use('/:login', getUser);
router.use('/', getUsers);

router.use((req, res) => res.status(404).json({
    message: 'Nie znaleziono żądanej metody dla endpointu /users',
}))

module.exports = router;