"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntent = exports.isType = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
function isType(handlerInput, ...types) {
    return types.some((type) => type === (0, ask_sdk_core_1.getRequestType)(handlerInput.requestEnvelope));
}
exports.isType = isType;
function isIntent(handlerInput, ...intents) {
    if (isType(handlerInput, 'IntentRequest')) {
        return intents.some((name) => name === (0, ask_sdk_core_1.getIntentName)(handlerInput.requestEnvelope));
    }
    return false;
}
exports.isIntent = isIntent;
//# sourceMappingURL=helpers.js.map