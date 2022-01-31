"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = __importDefault(require("ask-sdk-core"));
const getDateNumber_1 = require("./helpers/getDateNumber");
const getNumberDescription_1 = require("./helpers/getNumberDescription");
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Olá, peça o número para uma data que eu lhe direi o seu valor.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
/**
 * This is my custom intent
 */
const GetDateNumberHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'GetDateNumberIntent';
    },
    handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const slotValue = request.intent.slots.date.value;
        const number = (0, getDateNumber_1.getDateNumber)(slotValue);
        const description = (0, getNumberDescription_1.getNumberDescription)(number);
        const speakOutput = `O número desse dia é ${number}. ${description}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        // eslint-disable-next-line max-len
        const speakOutput = 'Você pode me perguntar o número de um dia. Tente "Alexa, abra Guia dos Números e me diga o número de hoje".';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adeus!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Perdão, eu não sei isso. Tente de novo.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    },
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents
 * by defining them above, then also adding them to the request handler chain below
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.default.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = ask_sdk_core_1.default.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Você acionou ${intentName}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    },
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Desculpe, não entendi o que você pediu. Tente novamente.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
exports.handler = ask_sdk_core_1.default.SkillBuilders.custom()
    .addRequestHandlers(LaunchRequestHandler, GetDateNumberHandler, HelpIntentHandler, CancelAndStopIntentHandler, FallbackIntentHandler, SessionEndedRequestHandler, IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
//# sourceMappingURL=index.js.map