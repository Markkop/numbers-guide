"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const constants_1 = require("../../utilities/constants");
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Fallback);
    },
    handle(handlerInput) {
        const speechText = (0, i18next_1.t)(constants_1.Strings.FALLBACK);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
exports.default = FallbackIntentHandler;
//# sourceMappingURL=Fallback.js.map