import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

import styles from "./styles";

import PageHeader from "../../components/PageHeader";

const WebGiveClasses: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader />
      <WebView
        source={{
          uri: "https://online-study-platform.vercel.app/give-classes",
        }}
      />
    </View>
  );
};

export default WebGiveClasses;
