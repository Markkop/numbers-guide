import { ErrorHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import { t } from 'i18next';
import { Strings } from '../utilities/constants';

/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorProcessor: ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput: HandlerInput, error: Error): Response {
    console.log(`[NUMBERS-GUIDE-SKILL][ERROR]: Error handled: ${error.stack}`);
    const speakOutput = t(Strings.ERROR);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

export default ErrorProcessor;
