import { isType } from '../utilities/helpers';
import { RequestTypes, Strings } from '../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';

const LaunchRequest: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isType(handlerInput, RequestTypes.Launch);
  },
  handle(handlerInput: HandlerInput) {
    const speakOutput = t(Strings.LAUNCH);
    handlerInput.responseBuilder.withSimpleCard(t(Strings.SKILL_NAME), speakOutput)

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

export default LaunchRequest;