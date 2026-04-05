import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import NoteCreator from "./NoteCreator";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.noteTitle !== "" && newNote.noteContent !== "") {
      setNotes((prevState) => {
        return [...prevState, newNote];
      });
    }
  }

  function deleteNote(id){
    setNotes((prevState) => {
      return prevState.filter((note, index) => {
        return index !==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <NoteCreator onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.noteTitle}
          content={noteItem.noteContent}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
