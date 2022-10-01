const Note = require('../../db/models/note');
module.exports = {
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

}