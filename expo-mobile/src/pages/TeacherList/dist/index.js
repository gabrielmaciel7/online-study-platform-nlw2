"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var async_storage_1 = require("@react-native-community/async-storage");
var api_1 = require("../../services/api");
var styles_1 = require("./styles");
var PageHeader_1 = require("../../Components/PageHeader");
var TeacherItem_1 = require("../../Components/TeacherItem");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var TeacherList = function () {
    var _a = react_1.useState([]), teachers = _a[0], setTeachers = _a[1];
    var _b = react_1.useState([]), favorites = _b[0], setFavorites = _b[1];
    var _c = react_1.useState(false), isFiltersVisible = _c[0], setIsFiltersVisible = _c[1];
    var _d = react_1.useState(""), subject = _d[0], setSubject = _d[1];
    var _e = react_1.useState(""), week_day = _e[0], setWeekDay = _e[1];
    var _f = react_1.useState(""), time = _f[0], setTime = _f[1];
    native_1.useFocusEffect(function () {
        loadFavorites();
    });
    function loadFavorites() {
        async_storage_1["default"].getItem("favorites").then(function (res) {
            if (res) {
                var favoritedTeachers = JSON.parse(res);
                var favoritedTeachersIds = favoritedTeachers.map(function (teacher) { return teacher.id; });
                setFavorites(favoritedTeachersIds);
            }
        });
    }
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }
    function handleFiltersSubmit() {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loadFavorites();
                        return [4 /*yield*/, api_1["default"].get("classes", {
                                params: {
                                    subject: subject,
                                    week_day: week_day,
                                    time: time
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        setTeachers(response.data);
                        setIsFiltersVisible(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(PageHeader_1["default"], { title: "Proffys dispon\u00EDveis", headerRight: react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { onPress: handleToggleFiltersVisible },
                react_1["default"].createElement(vector_icons_1.Feather, { name: "filter", size: 20, color: "#FFF" })) }, isFiltersVisible && (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].searchForm },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].label }, "Mat\u00E9ria"),
            react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: styles_1["default"].input, value: subject, onChangeText: function (text) { return setSubject(text); }, placeholder: "Qual a mat\u00E9ria?", placeholderTextColor: "#c1bccc" }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].inputGroup },
                react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].inputBlock },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].label }, "Dia da semana"),
                    react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: styles_1["default"].input, value: week_day, onChangeText: function (text) { return setWeekDay(text); }, placeholder: "Qual o dia?", placeholderTextColor: "#c1bccc" })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].inputBlock },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].label }, "Hor\u00E1rio"),
                    react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: styles_1["default"].input, value: time, onChangeText: function (text) { return setTime(text); }, placeholder: "Qual o hor\u00E1rio?", placeholderTextColor: "#c1bccc" }))),
            react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles_1["default"].submitButton, onPress: handleFiltersSubmit },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].submitButtonText }, "Filtrar"))))),
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles_1["default"].teacherList, contentContainerStyle: {
                paddingHorizontal: 16,
                paddingBottom: 16
            } }, teachers.map(function (teacher) { return (react_1["default"].createElement(TeacherItem_1["default"], { key: teacher.id, teacher: teacher, favorited: favorites.includes(teacher.id) })); }))));
};
exports["default"] = TeacherList;
