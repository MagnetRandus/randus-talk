var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import * as React from "react";
import styles from "./Klasie.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import Geselsie from "./Geselsie";
import bridgedGap from "../api/talk";
import generateGUID from "../tools/guid";
import { REST } from "@toolshed/services/r-route";
var Klasie = /** @class */ (function (_super) {
    __extends(Klasie, _super);
    function Klasie(props) {
        var _this = _super.call(this, props) || this;
        _this.state = __assign(__assign({}, props), { initData: null, REST: new REST(_this.props.context), cnvId: generateGUID() });
        _this.init = _this.init.bind(_this);
        return _this;
    }
    Klasie.prototype.componentDidMount = function () {
        console.log("Component did mount");
        this.init();
    };
    Klasie.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var initConv, v, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        initConv = {
                            role: "system",
                            content: "Jy is 'n afrikaansprekende- (nie \"Hollands\") hulpvaardige- assistent wat kinders help met hulle vra. Moenie enige nederlandse/hollandse woorde gebruik nie.",
                        };
                        return [4 /*yield*/, bridgedGap([initConv], "gpt-3.5-turbo", this.state.REST, this.state.cnvId)];
                    case 1:
                        v = _a.sent();
                        this.setState({
                            initData: v,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error) {
                            alert(error_1.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Klasie.prototype.render = function () {
        var _a = this.props, description = _a.description, GPTModel = _a.GPTModel, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        isDarkTheme ? console.log("Dark") : console.log("Light");
        var _b = this.state, initData = _b.initData, cnvId = _b.cnvId, REST = _b.REST;
        return (React.createElement("div", null, initData ? (React.createElement("section", { className: "".concat(styles.main, " ").concat(hasTeamsContext ? styles.teams : "") },
            React.createElement("div", null,
                React.createElement("div", { className: styles.HideMe },
                    "Hi ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", { className: styles.HideMe },
                    "GPTModel:",
                    escape(GPTModel),
                    "--"),
                React.createElement("div", { className: styles.HideMe },
                    "env:",
                    escape(environmentMessage),
                    "--"),
                React.createElement("div", { className: styles.HideMe },
                    React.createElement("strong", null, escape(description))),
                React.createElement(Geselsie, { cnv: initData, cnvId: cnvId, REST: REST })))) : (React.createElement("div", null, "Still loading"))));
    };
    return Klasie;
}(React.Component));
export default Klasie;
//# sourceMappingURL=Klasie.js.map