import { HandlerInput, getRequestType, getIntentName } from 'ask-sdk-core';

export function isType(handlerInput: HandlerInput, ...types: string[]): boolean {
  return types.some((type) => type === getRequestType(handlerInput.requestEnvelope));
}

export function isIntent(handlerInput: HandlerInput, ...intents: string[]): boolean {
  if (isType(handlerInput, 'IntentRequest')) {
    return intents.some((name) => name === getIntentName(handlerInput.requestEnvelope));
  }
  return false;
}