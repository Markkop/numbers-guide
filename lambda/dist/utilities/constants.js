"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = exports.LocaleTypes = exports.IntentTypes = exports.RequestTypes = void 0;
var RequestTypes;
(function (RequestTypes) {
    RequestTypes["Launch"] = "LaunchRequest";
    RequestTypes["Intent"] = "IntentRequest";
    RequestTypes["SessionEnded"] = "SessionEndedRequest";
    RequestTypes["SystemExceptionEncountered"] = "System.ExceptionEncountered";
})(RequestTypes = exports.RequestTypes || (exports.RequestTypes = {}));
var IntentTypes;
(function (IntentTypes) {
    IntentTypes["Help"] = "AMAZON.HelpIntent";
    IntentTypes["Stop"] = "AMAZON.StopIntent";
    IntentTypes["Cancel"] = "AMAZON.CancelIntent";
    IntentTypes["Fallback"] = "AMAZON.FallbackIntent";
    IntentTypes["About"] = "AboutIntent";
    IntentTypes["UnavailableIntent"] = "UnavailableIntent";
    IntentTypes["GetDateMeaning"] = "GetDateMeaningIntent";
    IntentTypes["GetNumberMeaning"] = "GetNumberMeaningIntent";
})(IntentTypes = exports.IntentTypes || (exports.IntentTypes = {}));
var LocaleTypes;
(function (LocaleTypes) {
    LocaleTypes["ptBR"] = "pt-BR";
})(LocaleTypes = exports.LocaleTypes || (exports.LocaleTypes = {}));
var Strings;
(function (Strings) {
    Strings["LAUNCH"] = "LAUNCH";
    Strings["HELP"] = "HELP";
    Strings["ERROR"] = "ERROR";
    Strings["FALLBACK"] = "FALLBACK";
    Strings["ABOUT"] = "ABOUT";
    Strings["UNAVAILABLE_INTENT"] = "UNAVAILABLE_INTENT";
    Strings["GET_NUMBER"] = "GET_NUMBER";
    Strings["GET_DATE_NUMBER"] = "GET_DATE_NUMBER";
})(Strings = exports.Strings || (exports.Strings = {}));
//# sourceMappingURL=constants.js.map