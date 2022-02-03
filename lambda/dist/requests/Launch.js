"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18next_1 = require("i18next");
const LaunchRequest = {
    canHandle(handlerInput) {
        return (0, helpers_1.isType)(handlerInput, constants_1.RequestTypes.Launch);
    },
    handle(handlerInput) {
        const speakOutput = (0, i18next_1.t)(constants_1.Strings.LAUNCH);
        handlerInput.responseBuilder.withSimpleCard((0, i18next_1.t)(constants_1.Strings.SKILL_NAME), speakOutput);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
exports.default = LaunchRequest;
//# sourceMappingURL=Launch.js.map