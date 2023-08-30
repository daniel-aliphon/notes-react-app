import AddNote from "./AddNote";
import Note from "./Note";
//passed props into function params (notes) from useState array of props
const NotesList = ({ notes, handleAddNote, handleDeleteNote }: any) => {
  //                          ^
  //                      { props }
  return (
    //
    <div className="notes-list">
      {/* map over each prop in the useState array and assign each thier own respective values */}
      {notes.map((note: any) => (
        <Note
          // assigning values (whicih is then passed to Notes component)
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      {/* passed props to next component (AddNote component) */}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
