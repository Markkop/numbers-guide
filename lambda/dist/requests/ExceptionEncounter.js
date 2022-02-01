"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const ExceptionEncounteredIntentHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isType)(handlerInput, constants_1.RequestTypes.SystemExceptionEncountered);
    },
    handle(handlerInput) {
        const { error } = handlerInput.requestEnvelope.request;
        console.log(`[NUMBERS-GUIDE-SKILL][ERROR]: Session ended with error message: ${error.message}`);
        return handlerInput.responseBuilder
            .getResponse();
    },
};
exports.default = ExceptionEncounteredIntentHandler;
//# sourceMappingURL=ExceptionEncounter.js.map