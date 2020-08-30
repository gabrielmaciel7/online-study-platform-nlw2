import React, { useCallback, useContext } from "react";
import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";

import PageHeader from "../../Components/PageHeader";
import TeacherItem, { Teacher } from "../../Components/TeacherItem";

import FavoritesContext from "../../contexts/favorites";

const Favorites: React.FC = () => {
  const { favoritesTeachers, loadFavorites } = useContext(FavoritesContext);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favoritesTeachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
};

export default Favorites;
