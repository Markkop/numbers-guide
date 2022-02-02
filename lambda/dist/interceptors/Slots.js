"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsInterceptor = void 0;
const constants_1 = require("../utilities/constants");
const helpers_1 = require("../utilities/helpers");
/**
 * Parses and adds the slot values to the RequestAttributes.
 */
exports.SlotsInterceptor = {
    process(handlerInput) {
        const attributes = handlerInput.attributesManager.getRequestAttributes();
        const isIntent = (0, helpers_1.isType)(handlerInput, constants_1.RequestTypes.Intent);
        if (!isIntent) {
            attributes.slots = {};
            return;
        }
        const request = handlerInput.requestEnvelope.request;
        attributes.slots = (0, helpers_1.getSlotValues)(request.intent.slots);
    },
};
//# sourceMappingURL=Slots.js.map