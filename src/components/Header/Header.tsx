import "./Header.css";
type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};
function Header({ query, setQuery }: HeaderProps) {
  return (
    <header className="header">
      <input
        id="search-input"
        type="search"
        placeholder="Malzeno ..."
        onChange={(event) => setQuery(event.currentTarget.value)}
        value={query}
      />
    </header>
  );
}
export default Header;
