"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlotValues = exports.ResetUnmatchedSlotValues = exports.ResetSlotValue = exports.isIntent = exports.isType = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const constants_1 = require("./constants");
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
/**
 * Resets the given slot value by setting it to an empty string.
 * If the intent is using the Dialog Directive, this will cause Alexa
 * to reprompt the user for that slot.
 *
 * @param request
 * @param slotName
 */
function ResetSlotValue(request, slotName) {
    if (request.intent.slots) {
        const slot = request.intent.slots[slotName];
        if (slot) {
            slot.value = "";
        }
    }
}
exports.ResetSlotValue = ResetSlotValue;
/**
* Resets all unmatched slot values by setting them to an empty string.
* If the intent is using the Dialog Directive, this will cause Alexa
* to reprompt the user for those slots.
*
* @param request
*/
function ResetUnmatchedSlotValues(handlerInput, slots) {
    const isIntent = isType(handlerInput, constants_1.RequestTypes.Intent);
    if (!isIntent)
        return;
    const request = handlerInput.requestEnvelope.request;
    Object.keys(slots).forEach((key) => {
        const slot = slots[key];
        if (slot && !slot.isMatch)
            ResetSlotValue(request, slot.name);
    });
}
exports.ResetUnmatchedSlotValues = ResetUnmatchedSlotValues;
/**
* Parses the slot values and returns a new object with additional information,
* e.g. if the value was matched, or if it is ambiguous etc.
*
* Example:
*   If we have the following Drink Slot Type:
*   {
*     "types": [{
*       "values": [{
*           "id": "cocacola",
*           "name": {
*             "value": "Coca Cola"
*           }
*         },
*         {
*           "id": "cocacolazero",
*           "name": {
*             "value": "Coca Cola Zero"
*           }
*         }
*       ]
*     }]
*   }
*
*   If the user said "Cola", the following value should be generated:
*   {
*     "name": "drink", // slot name
*     "value": "Cola", // what the user said
*     "isMatch": true, // was successfuly matched with our slot type
*     "resolved": "Coca Cola", // the first resolved value
*     "id": "cocacola", // the first resolved id
*     "isAmbiguous": true, // true because we matched multiple possible values
*     "values": [{
*         "name": "Coca Cola",
*         "id": "cocacola"
*       },
*       {
*         "name": "Coca Cola Zero",
*         "id": "cocacolazero"
*       }
*     ],
*     "confirmationStatus": "NONE"
*   }
*
* @param filledSlots
*/
function getSlotValues(filledSlots) {
    const slotValues = {};
    if (!filledSlots)
        return;
    Object.keys(filledSlots).forEach((item) => {
        var _a, _b;
        const filledSlot = filledSlots[item];
        const name = filledSlot.name;
        const value = filledSlot.value;
        const confirmationStatus = filledSlot.confirmationStatus;
        const firstResolutionPerAuthority = (_a = filledSlot === null || filledSlot === void 0 ? void 0 : filledSlot.resolutions) === null || _a === void 0 ? void 0 : _a.resolutionsPerAuthority[0];
        const firstResolutionPerAuthorityStatusCode = (_b = firstResolutionPerAuthority === null || firstResolutionPerAuthority === void 0 ? void 0 : firstResolutionPerAuthority.status) === null || _b === void 0 ? void 0 : _b.code;
        if (!firstResolutionPerAuthorityStatusCode || firstResolutionPerAuthorityStatusCode !== "ER_SUCCESS_MATCH") {
            slotValues[name] = {
                name: name,
                value: value,
                isMatch: false,
                confirmationStatus: confirmationStatus,
            };
            return;
        }
        const valueWrappers = firstResolutionPerAuthority.values;
        const hasMultipleValues = valueWrappers.length > 1;
        slotValues[name] = {
            name: name,
            value: value,
            isMatch: true,
            resolved: valueWrappers[0].value.name,
            id: valueWrappers[0].value.id,
            isAmbiguous: hasMultipleValues,
            values: hasMultipleValues ? valueWrappers.map((valueWrapper) => valueWrapper.value) : [],
            confirmationStatus: confirmationStatus,
        };
    });
    return slotValues;
}
exports.getSlotValues = getSlotValues;
//# sourceMappingURL=helpers.js.map