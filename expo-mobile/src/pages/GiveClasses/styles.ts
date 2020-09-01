import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    height: 100,
    borderRadius: 8,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPrimary: {
    backgroundColor: "#9871f5",
    width: "38%",
  },

  buttonSecondary: {
    backgroundColor: "#04d361",
    width: "58%",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
