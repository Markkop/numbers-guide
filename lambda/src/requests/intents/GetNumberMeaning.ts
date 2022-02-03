import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { getNumberMeaning, splitAndSumNumbers } from '../../utilities/numerology'

const GetNumberMeaningHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetNumberMeaning);
  },
  handle(handlerInput: HandlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const providedNumber = requestAttributes.slots.number.value
    const resultedNumber = splitAndSumNumbers(providedNumber)
    const meaning = getNumberMeaning(Number(resultedNumber));
    const hasMultipleAlgarisms = String(providedNumber).length > 1
    const multipleAlgarismsOutput = `${t(Strings.GET_NUMBER)}${resultedNumber}. ${meaning}`;
    const speakOutput = hasMultipleAlgarisms ? multipleAlgarismsOutput : meaning
    handlerInput.responseBuilder.withSimpleCard(providedNumber, speakOutput)

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

export default GetNumberMeaningHandler