import { useState } from "react";
//props passed from NotesList are values of each respective note
const Note = ({ id, text, date, handleDeleteNote }: any) => {
  const [noteColor, setNoteColor] = useState("green");

  // useEffect(() => {
  //   const randomColor = Math.floor(Math.random() * 5);
  //   randomColor === 0 ? setNoteColor("green") : null;
  //   randomColor === 1 ? setNoteColor("pink") : null;
  //   randomColor === 2 ? setNoteColor("yellow") : null;
  //   randomColor === 3 ? setNoteColor("orange") : null;
  //   randomColor === 4 ? setNoteColor("coral") : null;
  // });

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  //
  //
  return (
    // component for each newly created note
    <div
      id={id}
      className={noteColor}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* text value passed */}
      <span>{text}</span>
      {/* sectioing inside component container */}
      <div
        // className={isHovered === false ? "note-footer" : "note-footer-visible"}
        className="note-footer"
      >
        {/* date value passed */}
        <small>{date}</small>
        <button
          onClick={() => setNoteColor("green")}
          className="color-btn btn-green"
        ></button>
        <button
          onClick={() => setNoteColor("pink")}
          className="color-btn btn-pink"
        ></button>
        <button
          onClick={() => setNoteColor("yellow")}
          className="color-btn btn-yellow"
        ></button>
        <button
          onClick={() => setNoteColor("orange")}
          className="color-btn btn-orange"
        ></button>
        <button
          onClick={() => setNoteColor("coral")}
          className="color-btn btn-coral"
        ></button>

        <img
          src="trash-x-filled.svg"
          alt="dark-filled-bin-icon"
          className="delete"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
