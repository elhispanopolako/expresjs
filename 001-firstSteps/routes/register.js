const { Router } = require('express');
const { putRegister } = require('../controllers/register')
const router = Router();

router.put('/', putRegister);

router.use((req, res) => res.status(404).json({
    message: "Nie znaleziono żądanej metody w endpoincie /register  "
}));


module.exports = router;