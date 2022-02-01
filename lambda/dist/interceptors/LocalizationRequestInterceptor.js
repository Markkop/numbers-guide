"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizationRequestInterceptor = void 0;
const sprintf = __importStar(require("i18next-sprintf-postprocessor"));
const i18next_1 = require("i18next");
const strings_1 = require("../utilities/strings");
/**
 * Adds translation functions to the RequestAttributes.
 */
exports.LocalizationRequestInterceptor = {
    process(handlerInput) {
        (0, i18next_1.use)(sprintf).init({
            lng: handlerInput.requestEnvelope.request.locale,
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: strings_1.strings,
            returnObjects: true,
        });
    },
};
//# sourceMappingURL=LocalizationRequestInterceptor.js.map