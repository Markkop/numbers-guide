"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utilities/constants");
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const numerology_1 = require("../../utilities/numerology");
const GetDateMeaningHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.GetDateMeaning);
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const date = requestAttributes.slots.date.value;
        const number = (0, numerology_1.getDateNumberRepresentation)(date);
        const meaning = (0, numerology_1.getDateMeaning)(number);
        const speakOutput = `${(0, i18next_1.t)(constants_1.Strings.GET_DATE_NUMBER)}${number}. ${meaning}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
exports.default = GetDateMeaningHandler;
//# sourceMappingURL=GetDateMeaning.js.map