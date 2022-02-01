"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../utilities/helpers");
const constants_1 = require("../../utilities/constants");
const StopIntentHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Stop);
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .getResponse();
    },
};
exports.default = StopIntentHandler;
//# sourceMappingURL=Stop.js.map