"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utilities/constants");
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const numerology_1 = require("../../utilities/numerology");
const GetDateNumberHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.GetDateNumber);
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const slotValue = request.intent.slots.date.value;
        const number = (0, numerology_1.getDateNumber)(slotValue);
        const description = (0, numerology_1.getNumberDescription)(number);
        const speakOutput = `${(0, i18next_1.t)(constants_1.Strings.GET_NUMBER)}${number}. ${description}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
exports.default = GetDateNumberHandler;
//# sourceMappingURL=GetDateNumber.js.map