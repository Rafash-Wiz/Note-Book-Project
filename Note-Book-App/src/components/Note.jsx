import React, { useState } from "react";

export default function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [editedNote, setEditedNote] = useState({
    noteTitle: props.title,
    noteContent: props.content,
  });

  function onEdit() {
    setIsEditable((prev) => !prev);
  }

  // function onSave() {
  //   props.onSave({
  //     id: props.id,
  //     ...editedNote,
  //   });
  //   setIsEditable(false);
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return !isEditable ? (
    <div className="note">
      <button
        type="button"
        className={`favorite-button ${props.isFavorite ? "favorite-active" : ""}`}
        onClick={() => props.onToggleFavorite(props.id)}
      >
        {props.isFavorite ? "★" : "☆"}
      </button>
      <span className="note-created-at">{props.createdAt}</span>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button type="button" className="note-action note-edit" onClick={onEdit}>
        Edit
      </button>
      <button
        type="button"
        className="note-action note-delete"
        onClick={() => props.onDelete(props.id)}
      >
        -
      </button>
    </div>
  ) : (
    <div className="note editable-note">
      <input
        onChange={handleChange}
        name="noteTitle"
        type="text"
        value={editedNote.noteTitle}
      />
      <textarea
        onChange={handleChange}
        name="noteContent"
        value={editedNote.noteContent}
      />
      <button
        type="button"
        className="note-action note-edit"
        onClick={() => {
          props.onSave(props.id, editedNote);
          setIsEditable(false);
        }}
      >
        Save
      </button>
      <button
        type="button"
        className="note-action note-delete"
        onClick={() => props.onDelete(props.id)}
      >
        -
      </button>
    </div>
  );
}
