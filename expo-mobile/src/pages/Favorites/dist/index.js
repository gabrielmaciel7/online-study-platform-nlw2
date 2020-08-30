"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var async_storage_1 = require("@react-native-community/async-storage");
var styles_1 = require("./styles");
var PageHeader_1 = require("../../Components/PageHeader");
var TeacherItem_1 = require("../../Components/TeacherItem");
var Favorites = function () {
    var _a = react_1.useState([]), favorites = _a[0], setFavorites = _a[1];
    native_1.useFocusEffect(react_1.useCallback(function () {
        loadFavorites();
    }, []));
    function loadFavorites() {
        async_storage_1["default"].getItem("favorites").then(function (res) {
            if (res) {
                var favoritedTeachers = JSON.parse(res);
                setFavorites(favoritedTeachers);
            }
        });
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(PageHeader_1["default"], { title: "Meus proffys favoritos" }),
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles_1["default"].teacherList, contentContainerStyle: {
                paddingHorizontal: 16,
                paddingBottom: 16
            } }, favorites.map(function (teacher) {
            return react_1["default"].createElement(TeacherItem_1["default"], { key: teacher.id, teacher: teacher, favorited: true });
        }))));
};
exports["default"] = Favorites;
