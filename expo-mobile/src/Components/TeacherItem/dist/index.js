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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var async_storage_1 = require("@react-native-community/async-storage");
var api_1 = require("../../services/api");
var styles_1 = require("./styles");
var heart_outline_png_1 = require("../../assets/images/icons/heart-outline.png");
var unfavorite_png_1 = require("../../assets/images/icons/unfavorite.png");
var whatsapp_png_1 = require("../../assets/images/icons/whatsapp.png");
var favorites_1 = require("../../contexts/favorites");
var TeacherItem = function (_a) {
    var teacher = _a.teacher, favorited = _a.favorited;
    var _b = react_1.useContext(favorites_1["default"]), favoritesTeachers = _b.favoritesTeachers, loadFavorites = _b.loadFavorites;
    var _c = react_1.useState(favorited), isFavorited = _c[0], setIsFavorited = _c[1];
    console.log("favoritado:", isFavorited);
    function createNewConnection() {
        api_1["default"].post("connections", {
            user_id: teacher.id
        });
    }
    function handleLinkToWhatsapp() {
        createNewConnection();
        react_native_1.Linking.openURL("whatsapp://send?phone=" + teacher.whatsapp);
    }
    function handleToggleFavorite() {
        return __awaiter(this, void 0, void 0, function () {
            var favoriteIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadFavorites()];
                    case 1:
                        _a.sent();
                        if (isFavorited) {
                            favoriteIndex = favoritesTeachers.findIndex(function (teacherItem) {
                                return teacherItem.id === teacher.id;
                            });
                            favoritesTeachers.splice(favoriteIndex, 1);
                            setIsFavorited(false);
                        }
                        else {
                            favoritesTeachers.push(teacher);
                            setIsFavorited(true);
                        }
                        return [4 /*yield*/, async_storage_1["default"].setItem("favorites", JSON.stringify(favoritesTeachers))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
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
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].priceValue },
                    "R$ ",
                    teacher.cost)),
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].buttonsContainer },
                react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { onPress: handleToggleFavorite, style: [styles_1["default"].favoriteButton, isFavorited ? styles_1["default"].favorited : {}] }, isFavorited ? (react_1["default"].createElement(react_native_1.Image, { source: unfavorite_png_1["default"] })) : (react_1["default"].createElement(react_native_1.Image, { source: heart_outline_png_1["default"] }))),
                react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles_1["default"].contactButton, onPress: handleLinkToWhatsapp },
                    react_1["default"].createElement(react_native_1.Image, { source: whatsapp_png_1["default"] }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].contactButtonText }, "Entrar em contato"))))));
};
exports["default"] = TeacherItem;
