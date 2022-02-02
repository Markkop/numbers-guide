/* eslint-disable max-len */
const dateNumberMeaning: Record<number, string> = {
  1: 'As pessoas que nasceram sob a influência da energia do número 1 possuem um instinto de liderança nato. São pessoas dadas à criatividade, ambiciosas e, por isso, podem ter traços de autoritarismo e egocentrismo aflorados. Estão sempre à frente dos projetos que se propõem a fazer, e podem ter dificuldades em aceitar sugestões.',
  2: 'O número 2 representa os diplomatas. É o número das pessoas que possuem o dom da palavra, sendo muito hábeis na arte da conversa, sendo capazes de camuflarem-se em todos os tipos de ambientes. Têm o poder de unir diferentes grupos e pessoas, pois possuem grande facilidade para a resolução de conflitos. Geralmente, esse talento tão especial vem acompanhado de uma baixa autoestima.',
  3: 'Pessoas que nascem sob a influência do número 3 tendem a ser populares, extrovertidas e muito carismáticas. Atraem pessoas ao seu redor com frequência, pois possuem um magnetismo muito intenso, sendo muito simpáticos e acolhedores. Costumam ser pessoas vaidosas, e por isso não têm prática com a recepção de críticas negativas ao seu estilo de vida ou personalidade.',
  4: 'Este é o número da disciplina. Pessoas sob esta influência têm um senso de ordem e autocontrole muito intensos. São pessoas trabalhadoras e persistentes, dedicadas tanto em seus ofícios quanto em suas relações afetivas. Por isso, possuem tendência à carência e ao drama.',
  5: 'O número 5 rege a energia da curiosidade. Aqueles que nascem sob esta influência são ávidos por conhecimentos e aventuras. São pessoas alegres, originais e muito criativas. Por terem um desejo insaciável de novas experiências, costumam ter dificuldades em manter relacionamentos estáveis e duradouros.',
  6: 'Este é o número da afetividade. Portanto, pessoas que nascem sob a influência do 6 tendem a ser amorosas, carinhosas e cuidadosas. No entanto, uma afetividade tão aflorada costuma vir acompanhada de um intenso sentimento de posse.',
  7: 'Este é o número da inspiração. Pessoas que nascem sob esta influência são mais excêntricas. Geralmente, são aquelas pessoas que quebram as regras e têm as grandes ideias. Tendem a adquirir vícios ao longo da vida, por isso é importante que se mantenham longe de jogos e substâncias entorpecentes.',
  8: 'O número 8 representa o sucesso. Os nascidos sob esta energia têm uma visão empreendedora, sendo muito organizados e ambiciosos. Por todo o seu metodismo, têm tendência ao grande sucesso profissional e financeiro. São pessoas que sofrem com a dificuldade de confiar em outras pessoas e, por isso, podem se tornar muito arrogantes.',
  9: 'Pessoas nascidas sob a influência do número 9 vão se beneficiar da energia do altruísmo. São pessoas muito compassivas, generosas, que estão frequentemente envolvidas em causas humanitárias. Tendem a esquecer-se de suas próprias necessidades em prol do coletivo.',
};

// https://www.astrocentro.com.br/blog/numerologia/tudo-sobre-numerologia-tabela/
const numberMeaning: Record<number, string> = {
  1: "O número 1 caracteriza uma força muito voltada para a liderança e a personalidade individual de cada um.O 1 na numerologia indica ambição, independência e um grande foco na busca pelo êxito em tudo que se faz. É um número com muita energia e criatividade, sempre focado no objetivo principal!",
  2: "O número 2 na numerologia representa uma personalidade gentil e atenciosa, sempre disposta a ajudar os outros. O respeito é um atributo muito comum em pessoas que tem a numerologia do nome no 2.Outra característica evidente do número 2 na numerologia é a harmonia. Ou seja, está sempre em busca do equilíbrio, tanto para si mesma quanto nas relações com outras pessoas.",
  3: "O número 3 traz um poderoso significado para o lado da criatividade, da expressão e formas de comunicação. A pessoa de número 3 também se destaca na inteligência, além de ter diversos conhecimentos em vários assuntos.Do lado mais negativo, também representa aquela pessoa que gosta de se exibir um pouco socialmente, o que também significa certa imaturidade. Mesmo assim, é alguém que está aberta para novas ideias e para o mundo!",
  4: "Família é uma das principais palavras que podem definir o significado do número 4 na numerologia. É o número daquelas pessoas que gostam de sentir que pertencem a algum lugar, de sentir segurança e criar raízes.Em razão disso, também é um número que lida muito bem com a razão e o lado racional das pessoas. Por isso, não tem muitos problemas para resolver conflitos e está sempre preparada com bons argumentos.",
  5: "A curiosidade e o desejo por aventura são dois fatores que aquecem o coração e a mente das pessoas do número 5. Estão sempre com novas ideias na cabeça, prontas para se jogar de braços abertos para novas oportunidades de explorar situações diferentes.Por outro lado, isso significa que o número 5 também pode ser bastante impaciente. Não consegue se adaptar a rotinas e, em certas ocasiões, pode mudar sua decisão de última hora.",
  6: "O número 6 representa aquela pessoa que está sempre pronta para ajudar amigos, familiares e todas as pessoas que ama. Ela não hesita em demonstrar amor pelos outros e busca sempre estar presente.É algo que as fazem ser bastante sensíveis também, o que pode se tornar um desafio em determinadas situações. Outro ponto para se atentar é em relação à espiritualidade e o caminho da aceitação que precisa trilhar.",
  7: "O número 7 é o mais místico na numerologia, com muita conexão aos conhecimentos ocultos e também considerado o número da perfeição. Não é à toa que você o encontra em vários mitos, rituais e nas próprias religiões.A personalidade da pessoa do número 7 simboliza bastante o senso de justiça e organização. Embora possa ser exigente e parecer fria, a verdade é que se trata de uma pessoa de grande sensibilidade, em especial com o amor pelos animais.",
  8: "Se o 8 é o seu número na numerologia, então significa que você é uma pessoa muito motivada e ambiciosa para ir atrás daquilo em que realmente acredita.Talvez não demonstre muito bem seus sentimentos, mas certamente não é alguém que costuma decepcionar seus amigos ou familiares.",
  9: "O número 9 tem um incrível poder de amor universal na numerologia. Sua manifestação engloba muitas das melhores características vistas nos números anteriores.O 9 é o número de pessoas simpáticas, solidárias e de bom coração, que sempre querem ver os outros bem. Além disso, são predispostas a atuar nas áreas mais artísticas e criativas.",
  11: "O número 11 na numerologia é considerado especial e denominado como sendo um número mestre. Por isso, não deve ser reduzido quando surge na numerologia da data de nascimento ou dos nomes.Em relação às pessoas representadas pelo número 11, é possível dizer que são idealistas e inspiradoras, capazes de deixar sua marca por onde quer que passem.",
}

/**
 * Gets a date number meaning
 * @param { Number } number
 * @returns { String }
 */
export function getDateMeaning(number: number): string {
  return dateNumberMeaning[number];
}

/**
 * Gets a number meaning
 * @param { Number } number
 * @returns { String }
 */
export function getNumberMeaning(number: number): string {
  return numberMeaning[number];
}

/**
 * Splits a number received as text and sum its
 * digits until there's only one
 * @param { tring } numberText 
 * @returns { String }
 */
 export function splitAndSumNumbers(numberText: string): string {
  const splittedNumbers = numberText.split('').map(Number)
  const sum = String(splittedNumbers.reduce((sum: number, number: number) => sum + number, 0))
  if (sum.length === 1) {
      return sum
  }
  return splitAndSumNumbers(sum)
}

/**
* Gets a single number for a given string date
* @param { String } date such as 2021-12-19
* @returns { Number } 
*/
export function getDateNumberRepresentation(date: string) {
  const dateNumbers = date.replace(/\D/g, '')
  const sum = splitAndSumNumbers(dateNumbers)
  return Number(sum)   
}
