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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { useState } from "react";
import bridgedGap from "../api/talk";
import styles from "./Klasie.module.scss"; // Replace with your actual styles import
var Geselsie = function (_a) {
    var cnv = _a.cnv, cnvId = _a.cnvId, REST = _a.REST;
    var _b = useState("Ek wil graag 'n troeteldier hê, wat sal jy voorstel is 'n goeie een vir 'n beginner?"), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(cnv), conversation = _c[0], setConversation = _c[1];
    var _d = React.useState("Resting"), comms = _d[0], setComms = _d[1];
    var refLastAnswer = React.useRef(null);
    var refComms = React.useRef(null);
    var refAsk = React.useRef(null);
    var refVra = React.useRef(null);
    var handleInputChange = function (e) {
        setInputValue(e.target.value);
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var q, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setComms("Asking");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    q = {
                        role: "user",
                        content: inputValue,
                    };
                    return [4 /*yield*/, bridgedGap(__spreadArray(__spreadArray([], conversation, true), [q], false), "gpt-3.5-turbo", REST, cnvId)];
                case 2:
                    response = _a.sent();
                    setConversation(response);
                    setComms("Answered");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    if (err_1 instanceof Error)
                        setComms(err_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        if (refLastAnswer.current) {
            refLastAnswer.current.innerHTML = conversation.slice(-1)[0].content;
        }
    }, [conversation]);
    return (React.createElement("form", { className: styles.main, onSubmit: handleSubmit },
        React.createElement("table", { className: styles.interface },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "Conversation Id:"),
                    React.createElement("td", null, cnvId)),
                React.createElement("tr", null,
                    React.createElement("td", null, "Comms"),
                    React.createElement("td", null,
                        React.createElement("div", { ref: refComms, className: styles.Comms }, comms)))),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", { colSpan: 2 },
                        React.createElement("h3", null, "Gebruiker"))),
                React.createElement("tr", null,
                    React.createElement("td", { colSpan: 2 },
                        React.createElement("textarea", { name: "PraatHier", id: "PraatHier", placeholder: "Praat hier", ref: refAsk, className: styles.PraatHier, onKeyUp: function (ev) {
                                if (ev.key == "Enter") {
                                    if (refVra.current) {
                                        refVra.current.click();
                                    }
                                }
                            }, onChange: function (ev) {
                                setComms("Typing");
                                handleInputChange(ev);
                            }, value: inputValue }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("button", { type: "submit", className: styles.Stuur }, "Stuur vraag"))),
                React.createElement("tr", null,
                    React.createElement("td", { colSpan: 2 },
                        React.createElement("h3", null, "Kunsmatige Intelligensie"))),
                React.createElement("tr", null,
                    React.createElement("td", { colSpan: 2 },
                        React.createElement("div", { lang: "af", ref: refLastAnswer, contentEditable: "true", suppressContentEditableWarning: true }, refLastAnswer.current ? conversation.slice(-1)[0].content : "Nothing yet...")))))));
};
export default Geselsie;
//# sourceMappingURL=Geselsie.js.map