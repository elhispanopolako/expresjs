const express = require('express');
const router = express.Router()
const testActions = require('../controllers/api/test');
const notesActions = require('../controllers/api/notes');
router.get('/', testActions.homepage);
router.post('/', notesActions.saveNotes);

module.exports = router;