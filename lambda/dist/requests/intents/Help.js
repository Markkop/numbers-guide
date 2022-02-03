"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const constants_1 = require("../../utilities/constants");
const AboutIntentHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Help);
    },
    handle(handlerInput) {
        const speechText = (0, i18next_1.t)(constants_1.Strings.HELP);
        handlerInput.responseBuilder.withSimpleCard((0, i18next_1.t)(constants_1.Strings.SKILL_NAME), speechText);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
exports.default = AboutIntentHandler;
//# sourceMappingURL=Help.js.map