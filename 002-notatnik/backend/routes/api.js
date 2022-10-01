const express = require('express');
const router = express.Router()
const notesActions = require('../api/noteActions');
//Pobieranie notatek
router.get('/notes', notesActions.getAllNotes);
//Pobieranie notatki konkretnej
router.get('/notes/:id', notesActions.getNote);
//Zapisywanie notatki
router.post('/notes', notesActions.saveNotes);
//edycja notatek
router.put('/notes/:id', notesActions.updateNote);
//usuwanie notatek
router.delete('/notes/:id', notesActions.deleteNote);


module.exports = router;