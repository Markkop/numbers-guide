import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { getDateNumberRepresentation, getDateMeaning } from '../../utilities/numerology'

const GetDateMeaningHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetDateMeaning);
  },
  handle(handlerInput: HandlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const date = requestAttributes.slots.date.value
    const number = getDateNumberRepresentation(date);
    const meaning = getDateMeaning(number);
    const speakOutput = `${t(Strings.GET_DATE_NUMBER)}${number}. ${meaning}`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

export default GetDateMeaningHandler