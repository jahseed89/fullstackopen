import React, { useState } from "react";
import Note from "./Note";

const NoteApp = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const noteToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  return (
    <div>
      <h1>Notes</h1>

      {noteToShow.map((note) => {
        return (
          <ul>
            <Note key={note.id} note={note} />
          </ul>
        );
      })}

      <button onClick={() => setShowAll(!showAll)}>
        show{showAll ? "important" : "all"}
      </button>

      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NoteApp;
