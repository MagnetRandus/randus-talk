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
import * as React from "react";
import styles from "./Klasie.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import Geselsie from "./Geselsie";
var Klasie = /** @class */ (function (_super) {
    __extends(Klasie, _super);
    function Klasie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Klasie.prototype.render = function () {
        var _a = this.props, description = _a.description, GPTModel = _a.GPTModel, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        isDarkTheme ? console.log("Dark") : console.log("Light");
        console.log(environmentMessage);
        return (React.createElement("section", { className: "".concat(styles.main, " ").concat(hasTeamsContext ? styles.teams : "") },
            React.createElement("div", null,
                React.createElement("h2", null,
                    "Hi ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", null,
                    "GPTModel:",
                    escape(GPTModel),
                    "--"),
                React.createElement("div", null,
                    "env:",
                    escape(environmentMessage),
                    "--"),
                React.createElement("div", null,
                    React.createElement("strong", null, escape(description))),
                React.createElement(Geselsie, { GPTModel: "gpt-3.5-turbo", description: description }))));
    };
    return Klasie;
}(React.Component));
export default Klasie;
//# sourceMappingURL=Klasie.js.map