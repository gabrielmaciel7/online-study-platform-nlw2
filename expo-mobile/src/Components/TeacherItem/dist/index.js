"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var styles_1 = require("./styles");
var unfavorite_png_1 = require("../../assets/images/icons/unfavorite.png");
var whatsapp_png_1 = require("../../assets/images/icons/whatsapp.png");
var TeacherItem = function (_a) {
    var teacher = _a.teacher;
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].profile },
            react_1["default"].createElement(react_native_1.Image, { style: styles_1["default"].avatar, source: { uri: teacher.avatar } }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].profileInfo },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].name }, teacher.name),
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].subject }, teacher.subject))),
        react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].bio }, teacher.bio),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].footer },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].price },
                "Pre\u00E7o/hora ",
                "   ",
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].priceValue }, teacher.cost)),
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].buttonsContainer },
                react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: [styles_1["default"].favoriteButton, styles_1["default"].favorited] },
                    react_1["default"].createElement(react_native_1.Image, { source: unfavorite_png_1["default"] })),
                react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles_1["default"].contactButton },
                    react_1["default"].createElement(react_native_1.Image, { source: whatsapp_png_1["default"] }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].contactButtonText }, "Entrar em contato"))))));
};
exports["default"] = TeacherItem;
