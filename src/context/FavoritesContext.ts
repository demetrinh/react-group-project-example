import { createContext } from "react";
import { VolumeInfo } from "../models/GoogleBooksInterface";

interface FavoriteContextModel {
  favorites: VolumeInfo[];
  addFavorite: (book: VolumeInfo) => void;
  removeFavorite: (id: string) => void;
}

const defaultValues: FavoriteContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
