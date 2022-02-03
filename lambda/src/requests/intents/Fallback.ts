import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { IntentTypes, Strings } from '../../utilities/constants';

const FallbackIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Fallback);
  },
  handle(handlerInput) {
    const speechText = t(Strings.FALLBACK);
    handlerInput.responseBuilder.withSimpleCard(t(Strings.SKILL_NAME), speechText)

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

export default FallbackIntentHandler;