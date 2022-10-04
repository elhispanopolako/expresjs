import React from "react";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote/EditNote";
import './Notes.css'
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: '1234',
                    title: 'Wykąpać psa',
                    body: 'pamiętać by wykąpać psa'
                },
                {
                    id: '6565',
                    title: 'Zrobić zakupy',
                    body: 'Kupić wszystko'
                }
            ],
            showEditModal: false,
            editNot: {}
        };

    }
    deleteNote(id) {
        console.log('Usuwanie notatki', id);
        const notes = [...this.state.notes]
            .filter(note => note.id !== id);
        this.setState({ notes })
    }
    addNote(note) {
        const notes = [...this.state.notes];
        notes.push(note);
        this.setState({ notes });
    }
    editNote(note) {
        const notes = [...this.state.notes];
        const index = notes.findIndex(item => item.id === note.id)
        if (index >= 0) {
            notes[index] = note;
            this.setState({ notes })
        }
        this.toggleModal();
    }
    toggleModal() {
        this.setState({ showEditModal: !this.state.showEditModal });
    }
    editNoteHandler(note) {
        this.toggleModal();
        this.setState({ editNot: note });
    }

    render() {
        return (
            <div>
                <p>Moje notatki</p>
                <NewNote onAdd={(note) => this.addNote(note)} />
                <Modal isOpen={this.state.showEditModal}
                    contentLabel='Edytuj Notatkę'>
                    <EditNote
                        title={this.state.editNot.title}
                        body={this.state.editNot.body}
                        id={this.state.editNot.id}
                        onEdit={note => this.editNote(note)} />
                    <button onClick={() => this.toggleModal()}>Anuluj edytowanie</button>
                </Modal>
                {this.state.notes.map(note =>
                    <Note
                        key={note.id}
                        title={note.title}
                        body={note.body}
                        id={note.id}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(id)}
                    />
                )}

            </div>
        )
    }
}
export default Notes;