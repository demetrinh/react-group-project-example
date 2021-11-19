import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { VolumeInfo } from "../models/GoogleBooksInterface";
import "./Book.css";

interface Props {
  book: VolumeInfo;
}

const Book = ({ book }: Props) => {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoritesContext);

  const isFav = (id: string): boolean => {
    return favorites.some(
      (book) => book.volumeInfo.industryIdentifiers[0].identifier === id
    );
  };

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
          className="Book__image"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title + "Cover"}
        />
      ) : (
        <p>No book image found</p>
      )}

      <p className="Book__subText">{book.volumeInfo.description}</p>
      {isFav(book.volumeInfo.industryIdentifiers[0].identifier) === false && (
        <button onClick={() => addFavorite(book)}>Favorite</button>
      )}
      {isFav(book.volumeInfo.industryIdentifiers[0].identifier) && (
        <button
          onClick={() =>
            removeFavorite(book.volumeInfo.industryIdentifiers[0].identifier)
          }
        >
          Remove Favorite
        </button>
      )}
    </li>
  );
};

export default Book;
