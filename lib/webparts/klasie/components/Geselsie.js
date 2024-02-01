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
import styles from "./Klasie.module.scss"; // Replace with your actual styles import
import Stuur from "./Navigate";
var Klasie = function (_a) {
    var openai = _a.openai35;
    var _b = React.useState(), myAsk = _b[0], setMyAsk = _b[1];
    var _c = React.useState("Resting"), comms = _c[0], setComms = _c[1];
    var _d = React.useState([
        {
            role: "system",
            content: "Your name is Klasie and you are a helpful assistant that speaks Afrikaans.",
        },
    ]), qVersation = _d[0], setQVersation = _d[1];
    var engage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, reply_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!myAsk)
                        return [2 /*return*/]; // Safety check
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setComms("Asking");
                    return [4 /*yield*/, openai.chat.completions.create({
                            messages: __spreadArray(__spreadArray([], qVersation, true), [myAsk], false),
                            model: "gpt-3.5-turbo",
                        })];
                case 2:
                    response = _a.sent();
                    reply_1 = response.choices.map(function (h) { return h.message; });
                    setComms("Answered");
                    setQVersation(function (prevQVersation) { return __spreadArray(__spreadArray([], prevQVersation, true), [
                        myAsk,
                        { role: "assistant", content: reply_1[0].content },
                    ], false); });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error calling OpenAI's API:", error_1);
                    setComms("Error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var refComms = React.useRef(null);
    var refVra = React.useRef(null);
    var refAsk = React.useRef(null);
    // Inside Klasie component
    // The rest of the Klasie component remains unchanged until useEffect
    React.useEffect(function () {
        if (comms !== "Resting" && comms !== "Asking") {
            var timerId_1 = setTimeout(function () {
                setComms("Resting");
            }, 4000);
            return function () { return clearTimeout(timerId_1); };
        }
    }, [comms]); // This effect depends on the 'comms' state
    return (React.createElement("div", null,
        React.createElement("div", { className: styles.klasie },
            React.createElement("section", null,
                React.createElement("h3", null, "Kl@sie"),
                React.createElement("div", { className: styles.QVersation },
                    React.createElement("ul", null, qVersation
                        .filter(function (h) { return h.role !== "system"; })
                        .map(function (h, i) { return (React.createElement("li", { key: i, className: "".concat(styles[h.role]) }, String(h.content))); })),
                    React.createElement("section", { className: styles.Controls },
                        React.createElement("table", null,
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("input", { type: "text", name: "PraatHier", id: "PraatHier", placeholder: "Praat hier", ref: refAsk, className: styles.PraatHier, onKeyUp: function (ev) {
                                                if (ev.key == "Enter") {
                                                    if (refVra.current) {
                                                        refVra.current.click();
                                                    }
                                                }
                                            }, onChange: function (ev) {
                                                setComms("Typing");
                                                setMyAsk({
                                                    role: "user",
                                                    content: "".concat(ev.target.value),
                                                });
                                            } })),
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement("div", { ref: refComms, className: styles.Comms }, comms)))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("button", { ref: refVra, type: "button", onClick: function () {
                                                engage();
                                                if (refAsk.current)
                                                    refAsk.current.value = "";
                                            } }, "Praat")),
                                    React.createElement("td", null, "\u00A0"))))),
                    React.createElement(Stuur, null))))));
};
export default Klasie;
//# sourceMappingURL=Geselsie.js.map