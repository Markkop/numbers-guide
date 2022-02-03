import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { IntentTypes, Strings } from '../../utilities/constants';

const AboutIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Help);
  },
  handle(handlerInput) {
    const speechText = t(Strings.HELP);
    handlerInput.responseBuilder.withSimpleCard(t(Strings.SKILL_NAME), speechText)


    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

export default AboutIntentHandler;
