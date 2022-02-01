import { SkillBuilders } from 'ask-sdk-core';
import { LocalizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';
import ErrorProcessor from './errors/ErrorProcessor';
import ExceptionEncounteredIntentHandler from './requests/ExceptionEncounter';
import SessionEndedIntentHandler from './requests/SessionEnded';
import LaunchIntentHandler from './requests/Launch';
import HelpIntentHandler from './requests/intents/Help';
import FallbackIntentHandler from './requests/intents/Fallback';
import StopIntentHandler from './requests/intents/Stop';
import CancelIntentHandler from './requests/intents/Cancel';
import GetDateNumberIntentHandler from './requests/intents/GetDateNumber';


export const handler = SkillBuilders.custom()
  .addRequestHandlers(
    LaunchIntentHandler,
    HelpIntentHandler,
    StopIntentHandler,
    FallbackIntentHandler,
    CancelIntentHandler,
    SessionEndedIntentHandler,
    ExceptionEncounteredIntentHandler,
    GetDateNumberIntentHandler
  )
  .addErrorHandlers(ErrorProcessor)
  .addRequestInterceptors(LocalizationRequestInterceptor)
  .lambda();
