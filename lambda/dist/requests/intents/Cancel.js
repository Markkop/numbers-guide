"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../utilities/helpers");
const constants_1 = require("../../utilities/constants");
const CancelIntentHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Cancel);
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .getResponse();
    },
};
exports.default = CancelIntentHandler;
//# sourceMappingURL=Cancel.js.map