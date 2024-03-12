import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 m-4 border rounded w-full md:w-1/2 lg:w-2/3"
    />
  );
};

export default SearchBar;
