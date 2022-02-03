export enum RequestTypes {
  Launch = 'LaunchRequest',
  Intent = 'IntentRequest',
  SessionEnded = 'SessionEndedRequest',
  SystemExceptionEncountered = 'System.ExceptionEncountered',
}

export enum IntentTypes {
  Help = 'AMAZON.HelpIntent',
  Stop = 'AMAZON.StopIntent',
  Cancel = 'AMAZON.CancelIntent',
  Fallback = 'AMAZON.FallbackIntent',
  About = 'AboutIntent',
  UnavailableIntent = 'UnavailableIntent',
  GetDateMeaning = 'GetDateMeaningIntent',
  GetNumberMeaning = 'GetNumberMeaningIntent',
}

export enum LocaleTypes {
  ptBR = 'pt-BR',
}

export enum Strings {
  LAUNCH = 'LAUNCH',
  HELP = 'HELP',
  ERROR = 'ERROR',
  FALLBACK = 'FALLBACK',
  ABOUT = 'ABOUT',
  UNAVAILABLE_INTENT = 'UNAVAILABLE_INTENT',
  GET_NUMBER = 'GET_NUMBER',
  GET_DATE_NUMBER = 'GET_DATE_NUMBER',
  SKILL_NAME = 'SKILL_NAME'
}
