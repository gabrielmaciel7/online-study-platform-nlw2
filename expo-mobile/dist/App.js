"use strict";
exports.__esModule = true;
var expo_status_bar_1 = require("expo-status-bar");
var react_1 = require("react");
var expo_1 = require("expo");
var archivo_1 = require("@expo-google-fonts/archivo");
var poppins_1 = require("@expo-google-fonts/poppins");
var AppStack_1 = require("./src/routes/AppStack");
var favorites_1 = require("./src/contexts/favorites");
function App() {
    var fontsLoaded = archivo_1.useFonts({
        Archivo_400Regular: archivo_1.Archivo_400Regular,
        Archivo_700Bold: archivo_1.Archivo_700Bold,
        Poppins_400Regular: poppins_1.Poppins_400Regular,
        Poppins_600SemiBold: poppins_1.Poppins_600SemiBold
    })[0];
    if (!fontsLoaded) {
        return react_1["default"].createElement(expo_1.AppLoading, null);
    }
    else {
        return (react_1["default"].createElement(favorites_1.FavoritesProvider, null,
            react_1["default"].createElement(AppStack_1["default"], null),
            react_1["default"].createElement(expo_status_bar_1.StatusBar, { style: "light" })));
    }
}
exports["default"] = App;
