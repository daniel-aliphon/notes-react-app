//props passed from NotesList are values of each respective note
const Note = ({ id, text, date }: any) => {
  return (
    // component for each newly created note
    <div
      id={id}
      className="note"
    >
      {/* text value passed */}
      <span>{text}</span>
      {/* sectioing inside component container */}
      <div className="note-footer">
        {/* date value passed */}
        <small>{date}</small>
        <img
          src="trash-x-filled.svg"
          alt="dark-filled-bin-icon"
        />
      </div>
    </div>
  );
};

export default Note;
