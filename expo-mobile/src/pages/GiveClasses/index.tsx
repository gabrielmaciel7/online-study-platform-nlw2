import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import giveClassesBgImg from "../../assets/images/give-classes-background.png";

const GiveClasses: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleNavigationToWebGiveClassesPage() {
    navigate("WebGiveClasses");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateBack}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigationToWebGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default GiveClasses;
