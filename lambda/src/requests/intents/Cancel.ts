
import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { isIntent } from '../../utilities/helpers';
import { IntentTypes } from '../../utilities/constants';

const CancelIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Cancel);
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .getResponse();
  },
};

export default CancelIntentHandler;
