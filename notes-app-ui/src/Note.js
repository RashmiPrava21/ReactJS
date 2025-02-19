import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notes.css";
import { v4 as uuidv4 } from "uuid";

function Note() {
  const [notes, setNotes] = useState([]);
  const [newContent, setNewContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

    const addNote = () => {
      axios
        .post('http://localhost:5000/notes', {
          Title: newTitle,
          Content: newContent,
          CreatedTime: newDate,
          Id: uuidv4(),
        })
        .then((response) => {
          setNotes([...notes, response.data]);
          setNewTitle('');
          setNewContent('');
          setNewDate('');
        });
    };

  const filteredNotes = notes;

  return (
    <div>
      <h1 style={{ color: "black" }}>Notes</h1>
      <button onClick={addNote}>Add</button>
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
