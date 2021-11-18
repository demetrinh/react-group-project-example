import { VolumeInfo } from "../models/GoogleBooksInterface";
import Book from "./Book";
import "./BookList.css";

interface Props {
  books: VolumeInfo[];
}

const BookList = ({ books }: Props) => {
  return (
    <ul className="BookList">
      {books.map((book, i) => (
        <Book book={book} key={i} />
      ))}
    </ul>
  );
};

export default BookList;
