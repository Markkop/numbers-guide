"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utilities/constants");
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const numerology_1 = require("../../utilities/numerology");
const GetNumberMeaningHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.GetNumberMeaning);
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const providedNumber = requestAttributes.slots.number.value;
        const resultedNumber = (0, numerology_1.splitAndSumNumbers)(providedNumber);
        const meaning = (0, numerology_1.getNumberMeaning)(Number(resultedNumber));
        const hasMultipleAlgarisms = String(providedNumber).length > 1;
        const multipleAlgarismsOutput = `${(0, i18next_1.t)(constants_1.Strings.GET_NUMBER)}${resultedNumber}. ${meaning}`;
        const speakOutput = hasMultipleAlgarisms ? multipleAlgarismsOutput : meaning;
        handlerInput.responseBuilder.withSimpleCard(providedNumber, speakOutput);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
exports.default = GetNumberMeaningHandler;
//# sourceMappingURL=GetNumberMeaning.js.map