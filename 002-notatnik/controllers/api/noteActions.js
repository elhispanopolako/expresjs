const Note = require('../../db/models/note');
class NoteActions {
    saveNotes(req, res) {
        /*   const newNote = new Note({
               title: 'Zrobić zakupy',
               body: 'mleko,jaja,woda'
           });
           newNote.save().then(() => {
               console.log('Notatka została zapisana')
           });*/
        const title = req.body.title
        const body = req.body.body;

        res.send('Notatka została zapisana z body:' + body + " i title:" + title)
    }
    getAllNotes(req, res) {
        res.send('getAllNotes działa')
    }
    getNote(req, res) {
        const id = req.params.id;
        res.send('getNote działa i podaje mi id = ' + id)

    }
    updateNote(req, res) {
        const id = req.params.id;
        res.send('updateNote działa i aktualizuję notatke o id = ' + id)
    }
    deleteNote(req, res) {
        const id = req.params.id;
        res.send('deleteNote działa i usuwa notatke o id = ' + id)
    }
}
module.exports = new NoteActions();
