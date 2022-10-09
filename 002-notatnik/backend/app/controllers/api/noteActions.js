const Note = require('../../db/models/note')
class NoteActions {
    async saveNotes(req, res) {
        const title = req.body.title
        const body = req.body.body;
        let newNote
        try {
            newNote = new Note({ title, body });
            await newNote.save();
        } catch (err) {
            return res.status(422).json({ message: err.message })

        }


        res.status(201).json(newNote);
    }
    async getAllNotes(req, res) {
        let doc;
        try {
            doc = await Note.find({});

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
        res.status(200).json(doc)
    }
    async getNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({ _id: id });
        res.status(200).json(note)
    }
    async updateNote(req, res) {
        const id = req.params.id;
        const title = req.body.title
        const body = req.body.body;

        const note = await Note.findOne({ _id: id });
        note.title = title;
        note.body = body;
        await note.save();

        res.status(201).json(note);
    }
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({ _id: id });
        res.sendStatus(204);
    }
}
module.exports = new NoteActions();
