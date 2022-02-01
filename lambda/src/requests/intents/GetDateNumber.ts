import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { IntentRequest } from 'ask-sdk-model';
import { getNumberDescription, getDateNumber } from '../../utilities/numerology'


const GetDateNumberHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetDateNumber);
  },
  handle(handlerInput: HandlerInput) {
    const request = handlerInput.requestEnvelope.request as IntentRequest
    const slotValue = request.intent.slots.date.value;
    const number = getDateNumber(slotValue);
    const description = getNumberDescription(number);
    const speakOutput = `${t(Strings.GET_NUMBER)}${number}. ${description}`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

export default GetDateNumberHandler