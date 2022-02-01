import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { SessionEndedRequest } from 'ask-sdk-model';
import { isType } from '../utilities/helpers';
import { RequestTypes } from '../utilities/constants';

const SessionEndedIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isType(handlerInput, RequestTypes.SessionEnded);
  },
  handle(handlerInput) {
    const { reason, error } = handlerInput.requestEnvelope.request as SessionEndedRequest;
    console.log(`[NUMBERS-GUIDE-SKILL][INFO]: Session ended with reason: ${reason}`);
    if (error) {
      console.log(`[NUMBERS-GUIDE-SKILL][ERROR]: Session ended with message: ${error.message}`);
    }

    return handlerInput.responseBuilder
      .getResponse();
  },
};

export default SessionEndedIntentHandler;