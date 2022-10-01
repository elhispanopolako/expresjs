import React from "react";
import Note from "./Note/Note";
import './Notes.css'
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.notes = [
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
        ];
    }

    render() {
        return (
            <div>
                <p>Moje notatki</p>
                {this.notes.map(note =>
                    <Note title={note.title}
                        body={note.body}
                        id={note.id}
                    />
                )}

            </div>
        )
    }
}
export default Notes;