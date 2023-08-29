//nanoid generates an id
import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";

function App() {
  //
  //
  //useState props in an array
  const [notes, setNotes] = useState([
    { text: "This is my first note!", date: "09/07/2015", id: nanoid() },
  ]);

  //pass function as prop to NotesList, (text) is the placeholder value
  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      text: text,
      //IMPORTANT! .toLocaleDateString() is needed for date formatting
      date: date.toLocaleDateString(),
      //nanoid generates an id
      id: nanoid(),
    };
    //IMPORTANT! adds and saves newly created note to notes array, ... is used to copy current array of notes
    const newNotes = [...notes, newNote];
    //sets the notes array to ALL previously created notes
    setNotes(newNotes);
  };
  //
  return (
    <div className="container">
      {/* pass the props to NotesList component*/}
      <NotesList
        notes={notes}
        //passed prop
        handleAddNote={addNote}
      />
    </div>
  );
}

export default App;
