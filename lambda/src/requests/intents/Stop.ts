
import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { isIntent } from '../../utilities/helpers';
import { IntentTypes } from '../../utilities/constants';

const StopIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Stop);
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .getResponse();
  },
};

export default StopIntentHandler;
