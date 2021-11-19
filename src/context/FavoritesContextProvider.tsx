import { ReactNode, useState } from "react";
import { VolumeInfo } from "../models/GoogleBooksInterface";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<VolumeInfo[]>([]);
  const addFavorite = (book: VolumeInfo): void => {
    setFavorites((prev) => [...prev, book]);
  };
  const removeFavorite = (id: string): void => {
    const index: number = favorites.findIndex(
      (book) => book.volumeInfo.industryIdentifiers[0].identifier === id
    );
    setFavorites((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
