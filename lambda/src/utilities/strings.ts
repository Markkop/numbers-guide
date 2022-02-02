import { Strings, LocaleTypes } from './constants';

interface IStrings {
  [Strings.HELP]: string;
  [Strings.ERROR]: string;
  [Strings.FALLBACK]: string;
  [Strings.GET_NUMBER]: string;
  [Strings.GET_DATE_NUMBER]: string;
}

export const strings = {
  [LocaleTypes.ptBR]: {
    translation: {
      LAUNCH: 'Olá, peça o número para uma data que eu lhe direi o seu valor.',
      GET_DATE_NUMBER: 'O número para esse dia é ', 
      GET_NUMBER: 'O resultado da soma dos algarismos desse número é ', 
      HELP: 'Você pode me perguntar o número de um dia. Tente "Alexa, abra Guia dos Números e me diga o número de hoje".',
      FALLBACK: 'Perdão, eu não sei isso. Tente de novo.',
      ERROR: 'Desculpe, não entendi o que você pediu. Tente novamente.',
    } as IStrings,
  },
};
