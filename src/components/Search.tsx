import { IoSearch } from "react-icons/io5";
const Search = ({ setSearchText }: any) => {
  //

  return (
    <div className="search-bar">
      <IoSearch
        className="search-icon"
        size="1.5rem"
      />
      <input
        className="search-input"
        type="text"
        placeholder="Search notes..."
        onChange={(event: any) => setSearchText(event.target.value)}
      />
    </div>
  );
};

export default Search;
