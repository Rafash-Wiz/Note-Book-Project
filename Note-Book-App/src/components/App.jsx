import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import NoteCreator from "./NoteCreator";

export default function App() {
  const [notes, setNotes] = useState([]);
  const nextId = useRef(0);
  const nextOrder = useRef(0);

  function addNote(newNote) {
    if (newNote.noteTitle !== "" && newNote.noteContent !== "") {
      setNotes((prevState) => {
        const noteToAdd = {
          ...newNote,
          id: nextId.current,
          order: nextOrder.current,
          isFavorite: false,
          createdAt: new Date().toLocaleString(),
        };

        nextId.current += 1;
        nextOrder.current += 1;

        return [...prevState, noteToAdd];
      });
    }
  }

  function deleteNote(id) {
    setNotes((prevState) => {
      return prevState.filter((note) => {
        return note.id !== id;
      });
    });
  }

  function saveNote(id, editedNote) {
    setNotes((prevState) => {
      return prevState.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            noteTitle: editedNote.noteTitle,
            noteContent: editedNote.noteContent,
          };
        } else {
          return note;
        }
      });
    });
  }

  function toggleFavorite(id) {
    setNotes((prevState) => {
      return prevState.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isFavorite: !note.isFavorite,
          };
        }

        return note;
      });
    });
  }

  const sortedNotes = [...notes].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) {
      return Number(b.isFavorite) - Number(a.isFavorite);
    }

    return a.order - b.order;
  });

  return (
    <div>
      <Header />
      <NoteCreator onAdd={addNote} />
      {sortedNotes.map((noteItem) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.noteTitle}
          content={noteItem.noteContent}
          isFavorite={noteItem.isFavorite}
          createdAt={noteItem.createdAt}
          onDelete={deleteNote}
          onSave={saveNote}
          onToggleFavorite={toggleFavorite}
        />
      ))}
      <Footer />
    </div>
  );
}
