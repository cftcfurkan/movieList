import { useRef } from "react";
import "../index.css";
export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
