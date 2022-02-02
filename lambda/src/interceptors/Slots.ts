import { RequestInterceptor } from "ask-sdk-core";
import { RequestAttributes } from "../utilities/interfaces";
import { RequestTypes } from "../utilities/constants";
import { getSlotValues, isType } from "../utilities/helpers";
import { IntentRequest } from "ask-sdk-model";

/**
 * Parses and adds the slot values to the RequestAttributes.
 */
export const SlotsInterceptor: RequestInterceptor = {
  process(handlerInput) {
    const attributes = handlerInput.attributesManager.getRequestAttributes() as RequestAttributes;
    const isIntent = isType(handlerInput, RequestTypes.Intent)
    if (!isIntent) {
      attributes.slots = {};
      return
    }

    const request = handlerInput.requestEnvelope.request as IntentRequest
    attributes.slots = getSlotValues(request.intent.slots);
  },
};