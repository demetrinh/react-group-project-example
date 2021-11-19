import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import BookList from "./BookList";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);

  return (
    <div className="Favorites">
      <h1>Google Books</h1>
      <Link to="/">Back to Home </Link>
      <BookList books={favorites} />
    </div>
  );
};
export default Favorites;
