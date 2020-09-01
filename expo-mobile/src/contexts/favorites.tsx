import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { Teacher } from "../Components/TeacherItem";

interface FavoritesContextData {
  favoritesTeachers: Teacher[];
  favoritesIds: number[];
  loadFavorites(): Promise<void>;
  loadFavorites(): Promise<void>;
  updateFavorites(): Promise<void>;
  removeFavorite(number: number): void;
  insertFavorite(Teacher: Teacher): void;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);

  async function loadFavorites() {
    const response = await AsyncStorage.getItem("favorites");

    if (response) {
      const favoritedTeachers = JSON.parse(response);
      setFavorites(favoritedTeachers);

      const favoritedTeachersIds = favoritedTeachers.map(
        (teacher: Teacher) => teacher.id
      );

      setFavoritesIds(favoritedTeachersIds);
    }
  }

  function removeFavorite(index: number) {
    const favoritesArray = favorites;
    const favoritesIdsArray = favoritesIds;

    favoritesArray.splice(index, 1);
    favoritesIdsArray.splice(index, 1);

    setFavorites(favoritesArray);
    setFavoritesIds(favoritesIdsArray);
  }

  function insertFavorite(teacher: Teacher) {
    const favoritesArray = favorites;
    favoritesArray.push(teacher);

    setFavorites(favoritesArray);

    const favoritedTeachersIds = favorites.map(
      (teacher: Teacher) => teacher.id
    );

    setFavoritesIds(favoritedTeachersIds);
  }

  async function updateFavorites() {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoritesTeachers: favorites,
        favoritesIds,
        loadFavorites,
        updateFavorites,
        removeFavorite,
        insertFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
