import React, { useState, useContext, useEffect, useCallback } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/api";
import styles from "./styles";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import FavoritesContext from "../../contexts/favorites";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const {
    favoritesTeachers,
    loadFavorites,
    removeFavorite,
    insertFavorite,
    updateFavorites,
  } = useContext(FavoritesContext);

  const [isFavorited, setIsFavorited] = useState(favorited);

  useEffect(
    useCallback(() => {
      const favoriteIndex = getFavoriteIndex();

      if (favoriteIndex !== -1 && !isFavorited) {
        setIsFavorited(true);
      }

      if (favoriteIndex === -1 && isFavorited) {
        setIsFavorited(false);
      }
    }, [favoritesTeachers])
  );

  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  function handleLinkToWhatsapp() {
    createNewConnection();
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    await loadFavorites();

    if (isFavorited) {
      const favoriteIndex = getFavoriteIndex();

      removeFavorite(favoriteIndex);
      setIsFavorited(false);
    } else {
      insertFavorite(teacher);
      setIsFavorited(true);
    }

    updateFavorites();
  }

  function getFavoriteIndex() {
    const favoriteIndex = favoritesTeachers.findIndex(
      (teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      }
    );

    return favoriteIndex;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
