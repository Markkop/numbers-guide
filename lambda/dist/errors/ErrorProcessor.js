"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const constants_1 = require("../utilities/constants");
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorProcessor = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`[NUMBERS-GUIDE-SKILL][ERROR]: Error handled: ${error.stack}`);
        const speakOutput = (0, i18next_1.t)(constants_1.Strings.ERROR);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
exports.default = ErrorProcessor;
//# sourceMappingURL=ErrorProcessor.js.map