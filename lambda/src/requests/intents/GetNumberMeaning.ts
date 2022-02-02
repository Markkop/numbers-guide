import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { getNumberMeaning } from '../../utilities/numerology'

const GetNumberMeaningHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetDateMeaning);
  },
  handle(handlerInput: HandlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const number = requestAttributes.number.value
    const meaning = getNumberMeaning(number);
    const speakOutput = `${t(Strings.GET_NUMBER)}${number}. ${meaning}`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

export default GetNumberMeaningHandler