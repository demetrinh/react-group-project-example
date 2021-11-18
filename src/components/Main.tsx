import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { VolumeInfo } from "../models/GoogleBooksInterface";
import {
  searchByIsbn,
  searchInTitle,
  searchWithAuthor,
} from "../service/googleBooksApiService";
import BookList from "./BookList";
import "./Main.css";
import SearchForm from "./SearchForm";

const Main = () => {
  const [books, setBooks] = useState<VolumeInfo[]>([]);
  const query = new URLSearchParams(useLocation().search);
  const title = query.get("q");
  // example url: ...?q=harry+inauthor:rowling
  const author = query.get("inauthor");
  const isbn = query.get("isbn");

  useEffect(() => {
    if (title) {
      searchInTitle(title).then((response) => {
        console.log(response.items);
        setBooks(response.items);
      });
    } else {
      searchInTitle("the handmaids tale").then((response) => {
        console.log(response.items);

        setBooks(response.items);
      });
    }
  }, [title, author]);

  useEffect(() => {
    if (author) {
      searchWithAuthor(title!, author).then((response) => {
        console.log(response.items);
        setBooks(response.items);
      });
    }
  });

  useEffect(() => {
    if (isbn) {
      searchByIsbn(isbn).then((response) => {
        console.log(response.items);
        setBooks(response.items);
      });
    }
  });

  return (
    <div className="Main">
      <h1>Google Books</h1>
      <SearchForm />
      <BookList books={books} />
    </div>
  );
};

export default Main;
