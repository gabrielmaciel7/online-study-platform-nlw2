import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { Teacher } from "../Components/TeacherItem";

interface FavoritesContextData {
  favoritesTeachers: Teacher[];
  favoritesIds: number[];
  loadFavorites(): Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
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

  return (
    <FavoritesContext.Provider
      value={{ favoritesTeachers: favorites, favoritesIds, loadFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
