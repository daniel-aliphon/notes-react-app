const Header = ({ setDarkMode }: any) => {
  //

  return (
    <div className="header">
      <h1 id="h1">Quick Notes</h1>
      <button
        onClick={() =>
          setDarkMode((previousDarkMode: any) => !previousDarkMode)
        }
        className="mode-toggle"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
