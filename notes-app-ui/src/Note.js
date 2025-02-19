import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notes.css";

function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const filteredNotes = notes;

  return (
    <div>
      <h1 style={{ color: "black" }}>Notes</h1>
      <div className="notes-list">
        {filteredNotes.map((note) => (
          <div key={note.ID} className="note">
            <div className="note-content">
              <h3>{note.Title}</h3>
              <p>{note.Content}</p>
            </div>
            <div className="note-date">{note.CreatedTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;
