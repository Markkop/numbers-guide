import { Strings, LocaleTypes } from './constants';

interface IStrings {
  [Strings.HELP]: string;
  [Strings.ERROR]: string;
  [Strings.FALLBACK]: string;
  [Strings.GET_NUMBER]: string;
  [Strings.GET_DATE_NUMBER]: string;
  [Strings.SKILL_NAME]: string;
}

export const strings = {
  [LocaleTypes.ptBR]: {
    translation: {
      LAUNCH: 'Olá, sobre qual número ou data você gostaria de saber o significado?',
      SKILL_NAME: 'Guia dos Números',
      GET_DATE_NUMBER: 'O número para esse dia é ', 
      GET_NUMBER: 'O resultado da soma dos algarismos desse número é ', 
      HELP: 'Você pode me pedir para falar sobre o significado de um número ou de uma data. Tente "Alexa, abra Guia dos Números e me diga o número de hoje".',
      FALLBACK: 'Perdão, eu não sei isso. Tente de novo.',
      ERROR: 'Desculpe, não entendi o que você pediu. Tente novamente.',
    } as IStrings,
  },
};
