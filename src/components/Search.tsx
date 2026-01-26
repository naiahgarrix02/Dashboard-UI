import { useState } from "react";
import search from "../assets/search.svg";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full">
      <img
        src={search}
        alt="Search Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border text-gray-900 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
