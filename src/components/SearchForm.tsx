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

    if (searchAuthor) {
      navigate(
        `/?q=${encodeURIComponent(searchTerm)}+inauthor:${encodeURIComponent(
          searchAuthor
        )}`
      );
    } else {
      navigate(`/?q=${encodeURIComponent(searchTerm)}`);
    }
  };
  const handleIsbnSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(isbn)}`);
  };

  return (
    <div className="SearchForm">
      <form className="SearchForm__title" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="searchTerm">Title: </label>
        </p>
        <p>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="searchAuthor">Author: </label>
        </p>
        <p>
          <input
            type="text"
            name="searchAuthor"
            id="searchAuthor"
            value={searchAuthor}
            onChange={(e) => setSearchAuthor(e.target.value)}
          />
        </p>

        <button type="submit">Search by Title</button>
      </form>

      <form className="SearchForm__isbn" onSubmit={handleIsbnSubmit}>
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
