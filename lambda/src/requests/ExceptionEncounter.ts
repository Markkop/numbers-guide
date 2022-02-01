import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { interfaces } from 'ask-sdk-model';
import { isType } from '../utilities/helpers';
import { RequestTypes } from '../utilities/constants';

type ExceptionEncounteredRequest = interfaces.system.ExceptionEncounteredRequest

const ExceptionEncounteredIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isType(handlerInput, RequestTypes.SystemExceptionEncountered);
  },
  handle(handlerInput) {
    const { error } = handlerInput.requestEnvelope.request as ExceptionEncounteredRequest;
    console.log(`[NUMBERS-GUIDE-SKILL][ERROR]: Session ended with error message: ${error.message}`);

    return handlerInput.responseBuilder
      .getResponse();
  },
};

export default ExceptionEncounteredIntentHandler;
