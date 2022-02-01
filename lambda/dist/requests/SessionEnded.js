"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const SessionEndedIntentHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isType)(handlerInput, constants_1.RequestTypes.SessionEnded);
    },
    handle(handlerInput) {
        const { reason, error } = handlerInput.requestEnvelope.request;
        console.log(`[NUMBERS-GUIDE-SKILL][INFO]: Session ended with reason: ${reason}`);
        if (error) {
            console.log(`[NUMBERS-GUIDE-SKILL][ERROR]: Session ended with message: ${error.message}`);
        }
        return handlerInput.responseBuilder
            .getResponse();
    },
};
exports.default = SessionEndedIntentHandler;
//# sourceMappingURL=SessionEnded.js.map