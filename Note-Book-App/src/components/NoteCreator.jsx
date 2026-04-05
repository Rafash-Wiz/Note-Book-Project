import React, { useState } from "react";

export default function NoteCreator(props) {
  const [newNote, setNewNote] = useState({
    noteTitle: "",
    noteContent: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(newNote);
    setNewNote({
      noteTitle: "",
      noteContent: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="noteTitle"
        type="text"
        placeholder="Note title"
        onChange={handleChange}
        value={newNote.noteTitle}
      />
      <textarea
        name="noteContent"
        type="text"
        placeholder="Note content"
        onChange={handleChange}
        value={newNote.noteContent}
      />
      <button type="submit">
        +
      </button>
    </form>
  );
}
