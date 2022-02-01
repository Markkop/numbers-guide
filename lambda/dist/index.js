"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const LocalizationRequestInterceptor_1 = require("./interceptors/LocalizationRequestInterceptor");
const ErrorProcessor_1 = __importDefault(require("./errors/ErrorProcessor"));
const ExceptionEncounter_1 = __importDefault(require("./requests/ExceptionEncounter"));
const SessionEnded_1 = __importDefault(require("./requests/SessionEnded"));
const Launch_1 = __importDefault(require("./requests/Launch"));
const Help_1 = __importDefault(require("./requests/intents/Help"));
const Fallback_1 = __importDefault(require("./requests/intents/Fallback"));
const Stop_1 = __importDefault(require("./requests/intents/Stop"));
const Cancel_1 = __importDefault(require("./requests/intents/Cancel"));
const GetDateNumber_1 = __importDefault(require("./requests/intents/GetDateNumber"));
exports.handler = ask_sdk_core_1.SkillBuilders.custom()
    .addRequestHandlers(Launch_1.default, Help_1.default, Stop_1.default, Fallback_1.default, Cancel_1.default, SessionEnded_1.default, ExceptionEncounter_1.default, GetDateNumber_1.default)
    .addErrorHandlers(ErrorProcessor_1.default)
    .addRequestInterceptors(LocalizationRequestInterceptor_1.LocalizationRequestInterceptor)
    .lambda();
//# sourceMappingURL=index.js.map