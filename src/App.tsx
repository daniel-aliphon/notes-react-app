//nanoid generates an id
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

function App() {
  //

  const [darkMode, setDarkMode] = useState(false);

  //useState props in an array
  const [notes, setNotes] = useState([
    { text: "This is my first note!", date: "09/07/2015", id: nanoid() },
  ]);

  useEffect(() => {
    //fetching data from local storage, .getItem( DATA KEY )
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data") || "{}"
    );
    //if (savedNotes)---IF ANY DATA IS RETRIVED
    if (savedNotes) {
      //then set the data in place
      setNotes(savedNotes);
    }
    // empty array of dependencies, means it will only run on the first load
  }, []);

  useEffect(() => {
    //setting notes data into local storage, DATA KEY-"react-notes-app-data"
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
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
  const deleteNote = (id: any) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  return (
    <div className={darkMode === true ? "dark-mode" : ""}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search setSearchText={setSearchText} />
        {/* pass the props to NotesList component*/}
        <NotesList
          notes={notes.filter((note) =>
            note.text
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )}
          //passed prop
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          //PROPS DRILLING
        />
      </div>
    </div>
  );
}

export default App;
