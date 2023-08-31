import { useState } from "react";

//recieved prop from NotesList
const AddNote = ({ handleAddNote }: any) => {
  //
  const [noteText, setNoteText] = useState("");

  const remainingChars = 200 - noteText.length;

  //event parameter and event.target.value to capture input text
  const handleChange = (event: any) => {
    if (remainingChars > 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      //noteText will be sent back to app.tsx as a parameter for the prop
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    //reusing note class for quick styling
    <div className="add-note">
      {/* textarea input for new notes */}
      <textarea
        //   numbers must be wrapped in {} not ""
        cols={10}
        rows={8}
        placeholder="Type to add a note..."
        // activates whenever text is changed, remember use of handle functions
        onChange={handleChange}
        value={noteText}
      ></textarea>
      {/* sectioing inside component container */}
      <div className="add-footer">
        <small>{remainingChars} Remaining</small>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
