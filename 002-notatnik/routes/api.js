const express = require('express');
const router = express.Router()
const testActions = require('../controllers/api/test')
router.get('/', testActions.homepage);

module.exports = router;