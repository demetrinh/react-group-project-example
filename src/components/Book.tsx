import { VolumeInfo } from "../models/GoogleBooksInterface";
import "./Book.css";

interface Props {
  book: VolumeInfo;
}

const Book = ({ book }: Props) => {
  return (
    <li className="Book">
      <p className="Book__subText">{book.volumeInfo.title}</p>

      {/* {book.volumeInfo.authors.length > 1 ? (
        <p className="Book__subText">{book.volumeInfo.authors.join(", ")} </p>
      ) : (
        <p>{book.volumeInfo.authors}</p>
      )} */}

      {book.volumeInfo.imageLinks ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title + "Cover"}
        />
      ) : (
        <p>No book image found</p>
      )}

      <p className="Book__subText">{book.volumeInfo.description}</p>
    </li>
  );
};

export default Book;
