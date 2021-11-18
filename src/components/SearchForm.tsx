import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [isbn, setIsbn] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(
      `/?q=${encodeURIComponent(searchTerm)}+inauthor:${encodeURIComponent(
        searchAuthor
      )}`
    );
  };
  const handleIsbnSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(isbn)}`);
  };

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Title: </label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />

        <label htmlFor="searchAuthor">Author: </label>
        <input
          type="text"
          name="searchAuthor"
          id="searchAuthor"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
        />
        <button type="submit">Search by Title</button>
      </form>

      <form className="IsbnForm" onSubmit={handleIsbnSubmit}>
        <label htmlFor="isbnSearch">ISBN: </label>
        <input
          type="text"
          name="isbnSearch"
          id="isbnSearch"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <button type="submit">Search By ISBN</button>
      </form>
    </div>
  );
};

export default SearchForm;
