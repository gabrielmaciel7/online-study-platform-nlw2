"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var styles_1 = require("./styles");
var PageHeader_1 = require("../../Components/PageHeader");
var TeacherItem_1 = require("../../Components/TeacherItem");
var favorites_1 = require("../../contexts/favorites");
var Favorites = function () {
    var _a = react_1.useContext(favorites_1["default"]), favoritesTeachers = _a.favoritesTeachers, loadFavorites = _a.loadFavorites;
    native_1.useFocusEffect(react_1.useCallback(function () {
        loadFavorites();
    }, []));
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(PageHeader_1["default"], { title: "Meus proffys favoritos" }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles_1["default"].teacherList, contentContainerStyle: {
                paddingHorizontal: 16,
                paddingBottom: 16
            } }, favoritesTeachers.map(function (teacher) {
            return react_1["default"].createElement(TeacherItem_1["default"], { key: teacher.id, teacher: teacher, favorited: true });
        }))));
};
exports["default"] = Favorites;
