import { HandlerInput, getRequestType, getIntentName } from 'ask-sdk-core';
import { IntentRequest } from 'ask-sdk-model';
import { RequestTypes } from './constants';
import { Slots, SlotValues } from './interfaces';

export function isType(handlerInput: HandlerInput, ...types: string[]): boolean {
  return types.some((type) => type === getRequestType(handlerInput.requestEnvelope));
}

export function isIntent(handlerInput: HandlerInput, ...intents: string[]): boolean {
  if (isType(handlerInput, 'IntentRequest')) {
    return intents.some((name) => name === getIntentName(handlerInput.requestEnvelope));
  }
  return false;
}


/**
 * Resets the given slot value by setting it to an empty string.
 * If the intent is using the Dialog Directive, this will cause Alexa
 * to reprompt the user for that slot.
 * 
 * @param request 
 * @param slotName 
 */
 export function ResetSlotValue(request: IntentRequest, slotName: string) {
  if (request.intent.slots) {
      const slot = request.intent.slots[slotName];
      if (slot) {
          slot.value = "";
      }
  }
}

/**
* Resets all unmatched slot values by setting them to an empty string.
* If the intent is using the Dialog Directive, this will cause Alexa
* to reprompt the user for those slots.
* 
* @param request 
*/
export function ResetUnmatchedSlotValues(handlerInput: HandlerInput, slots: SlotValues) {
  const isIntent = isType(handlerInput, RequestTypes.Intent)
  if (!isIntent ) return

  const request = handlerInput.requestEnvelope.request as IntentRequest
  Object.keys(slots).forEach((key) => {
      const slot = slots[key];
      if (slot && !slot.isMatch) ResetSlotValue(request, slot.name);
  });
}

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
export function getSlotValues(filledSlots?: Slots): SlotValues {
  const slotValues: SlotValues = {};

  if (!filledSlots) return

  Object.keys(filledSlots).forEach((item) => {
    const filledSlot = filledSlots[item]
    const name = filledSlot.name;
    const value = filledSlot.value;
    const confirmationStatus = filledSlot.confirmationStatus;
    const firstResolutionPerAuthority = filledSlot?.resolutions?.resolutionsPerAuthority[0]
    const firstResolutionPerAuthorityStatusCode = firstResolutionPerAuthority?.status?.code

    if (!firstResolutionPerAuthorityStatusCode || firstResolutionPerAuthorityStatusCode !== "ER_SUCCESS_MATCH") {
      slotValues[name] = {
        name: name,
        value: value,
        isMatch: false,
        confirmationStatus: confirmationStatus,
      };
      return
    }

    const valueWrappers = firstResolutionPerAuthority.values;
    const hasMultipleValues = valueWrappers.length > 1

    slotValues[name] = {
        name: name,
        value: value,
        isMatch: true,
        resolved: valueWrappers[0].value.name,
        id: valueWrappers[0].value.id,
        isAmbiguous: hasMultipleValues,
        values: hasMultipleValues ? valueWrappers.map((valueWrapper) => valueWrapper.value) : [],
        confirmationStatus: confirmationStatus,
    } 
  });

  return slotValues;
}