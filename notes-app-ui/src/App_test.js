// src/App.js
import React, { useState, useEffect } from "react";
// import Notes from './Notes';
import Note from "./Note";
import "./App.css";
import Login from "./Login";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const addNote = () => {
    axios
      .post("http://localhost:5000/notes", {
        Title: newTitle,
        Content: newContent,
        CreatedTime: newDate,
        id: uuidv4(),
      })
      .then((response) => {
        setNotes([...notes, response.data]);
        setNewTitle("");
        setNewContent("");
        setNewDate("");
      });
  };

  return (
    <div className="App">
      {/* <Notes /> */}
      <Note />
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <button onClick={addNote}>Add</button>
        </>
      )}
    </div>
  );
}

export default App;
