const Note = require('../../db/models/note');
class NoteActions {
    saveNotes(req, res) {
        const newNote = new Note({
            title: 'Zrobić zakupy',
            body: 'mleko,jaja,woda'
        });
        newNote.save().then(() => {
            console.log('Notatka została zapisana')
        });

        res.send('Strona główna działa')
    }
    getAllNotes(req, res) {

    }
    getNote(req, res) {

    }
    updateNote(req, res) {

    }
    deleteNote(req, res) {

    }
}
module.exports = new NoteActions();
