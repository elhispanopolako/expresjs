const { Router } = require('express');
const { postLogin } = require('../controllers/login')

const router = Router();

router.post('/', postLogin)

router.use((req, res) => res.status(404).json({
    message: "Nie znaleziono żądanej metody w endpoincie /login"
}));

module.exports = router;