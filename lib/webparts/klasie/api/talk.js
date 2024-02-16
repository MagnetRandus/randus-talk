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
import axios from "axios";
// function talkagpt(
//   apikey = "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"
// ) {
//   // Create an axios instance for OpenAI API with the necessary headers
//   const openAiClient = axios.create({
//     baseURL: "https://api.openai.com", // Base URL for OpenAI API
//     headers: {
//       Authorization: `Bearer ${apikey}`,
//       "Content-Type": "application/json",
//     },
//   });
//   // Parameters for the API request
//   const requestParams = {
//     prompt: "How are you?",
//     model: "gpt-3.5-turbo", // Specify the model you're using, in this case, it's GPT-3.5-turbo
//     max_tokens: 10,
//     temperature: 0,
//   };
//   // Performing the POST request to the completions endpoint with the parameters
//   openAiClient
//     .post("/v1/completions", requestParams)
//     .then((response) => {
//       // Handling successful response - logging the response data
//       console.log(response.data);
//     })
//     .catch((error) => {
//       // Handling errors - logging the error message
//       console.error("Error:", error);
//     });
// }
function bridgedGap(q, model) {
    return __awaiter(this, void 0, void 0, function () {
        var praatKlasie;
        return __generator(this, function (_a) {
            praatKlasie = axios.create({
                baseURL: "https://localhost",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            return [2 /*return*/, praatKlasie.post("/ask?model=".concat(model), q)];
        });
    });
}
export default bridgedGap;
//# sourceMappingURL=talk.js.map