import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./SearchBar.css";

const placeholderTexts = [
  "Search for sofas..",
  "Search for chairs..",
  "Search for beds..",
];

const SearchBar = ({ onSearch }) => {
  const [placeholder, setPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPlaceholder = placeholderTexts[placeholderIndex];

    if (charIndex < currentPlaceholder.length) {
      // Show the next character
      const typingInterval = setTimeout(() => {
        setPlaceholder((prev) => prev + currentPlaceholder[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Adjust speed of typing here (100ms per character)

      return () => clearTimeout(typingInterval);
    } else {
      // Wait and then move to the next placeholder text
      const resetInterval = setTimeout(() => {
        setPlaceholder("");
        setCharIndex(0);
        setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
      }, 2000); // Wait 2 seconds before switching

      return () => clearTimeout(resetInterval);
    }
  }, [charIndex, placeholderIndex]);

  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  const handleIconClick = () => {
    const searchInput = document.getElementById("search-input");
    onSearch(searchInput.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        id="search-input"
        placeholder={placeholder}
        onKeyDown={handleInputChange}
      />
      <SearchOutlinedIcon className="search-icon" onClick={handleIconClick} />
    </div>
  );
};

export default SearchBar;
