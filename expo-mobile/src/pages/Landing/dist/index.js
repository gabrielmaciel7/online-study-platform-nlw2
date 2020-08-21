"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var api_1 = require("../../services/api");
var styles_1 = require("./styles");
var landing_png_1 = require("../../assets/images/landing.png");
var study_png_1 = require("../../assets/images/icons/study.png");
var give_classes_png_1 = require("../../assets/images/icons/give-classes.png");
var heart_png_1 = require("../../assets/images/icons/heart.png");
function Landing() {
    var navigate = native_1.useNavigation().navigate;
    var _a = react_1.useState(0), totalConnections = _a[0], setTotalConnections = _a[1];
    react_1.useEffect(function () {
        api_1["default"].get("connections").then(function (res) {
            var total = res.data.total;
            setTotalConnections(total);
        });
    }, []);
    function handleNavigationToGiveClassesPage() {
        navigate("GiveClasses");
    }
    function handleNavigationToStudyPages() {
        navigate("Study");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(react_native_1.Image, { source: landing_png_1["default"], style: styles_1["default"].banner }),
        react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].title },
            "Seja bem-vindo, ",
            "\n",
            react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].titleBold }, "O que deseja fazer?")),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].buttonsContainer },
            react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { onPress: handleNavigationToStudyPages, style: [styles_1["default"].button, styles_1["default"].buttonPrimary] },
                react_1["default"].createElement(react_native_1.Image, { source: study_png_1["default"] }),
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].buttonText }, "Estudar")),
            react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { onPress: handleNavigationToGiveClassesPage, style: [styles_1["default"].button, styles_1["default"].buttonSecondary] },
                react_1["default"].createElement(react_native_1.Image, { source: give_classes_png_1["default"] }),
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].buttonText }, "Dar aulas"))),
        react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].totalConnections },
            "Total de ",
            totalConnections,
            " conex\u00F5es j\u00E1 realizadas ",
            "  ",
            react_1["default"].createElement(react_native_1.Image, { source: heart_png_1["default"] }))));
}
exports["default"] = Landing;
