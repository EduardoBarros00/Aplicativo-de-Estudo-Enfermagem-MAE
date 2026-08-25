export type FundamentosFotoQuestion = {
  question: string;
  answer: string;
  options: string[];
  explanation: string;
};

export const fundamentosFotoQuestions: FundamentosFotoQuestion[] = [
  {
    question: "Qual é o principal objetivo da intervenção socio-reabilitativa?",
    answer: "Maximizar a autonomia e a qualidade de vida.",
    options: [
      "Eliminar a deficiência.",
      "Maximizar a autonomia e a qualidade de vida.",
      "Reduzir as visitas dos familiares.",
      "Substituir os profissionais de saúde.",
    ],
    explanation: "A intervenção socio-reabilitativa busca preservar e ampliar a autonomia possível da pessoa e melhorar sua qualidade de vida.",
  },
  {
    question: "No PAI, com o que o OSS contribui principalmente?",
    answer: "Observações e execução dos cuidados/intervenções planejados.",
    options: [
      "Diagnósticos.",
      "Prescrições.",
      "Observações e execução dos cuidados/intervenções planejados.",
      "Escolha de medicamentos.",
    ],
    explanation: "No Piano Assistenziale Individualizzato (PAI), o OSS observa, executa os cuidados previstos dentro de suas competências e comunica ao time as alterações percebidas.",
  },
  {
    question: "Qual é a postura mais segura durante a alimentação de uma pessoa com disfagia?",
    answer: "Sentada a 90°, com a cabeça levemente fletida para a frente.",
    options: [
      "Decúbito dorsal a 30°.",
      "Sentada a 90°, com a cabeça levemente fletida para a frente.",
      "Sentada a 90°, com a cabeça estendida para trás.",
      "Decúbito lateral.",
    ],
    explanation: "A posição sentada e estável favorece uma deglutição mais segura; a postura exata deve seguir a avaliação e o plano assistencial individual.",
  },
  {
    question: "Qual pode ser um sinal precoce de aspiração durante a alimentação?",
    answer: "Voz gorgolejante ou 'molhada' após engolir.",
    options: [
      "Diurese aumentada.",
      "Voz gorgolejante ou 'molhada' após engolir.",
      "Sudorese fria em repouso.",
      "Edema em membros inferiores.",
    ],
    explanation: "Alteração da voz após a deglutição pode sugerir presença de conteúdo próximo às vias aéreas e exige atenção e comunicação à equipe.",
  },
  {
    question: "Na prevenção de lesões por pressão, qual cuidado é prioritário?",
    answer: "Realizar mudanças de posição regularmente, conforme o plano de cuidado.",
    options: [
      "Friccionar vigorosamente áreas avermelhadas.",
      "Realizar mudanças de posição regularmente, conforme o plano de cuidado.",
      "Expor a pele ao sol.",
      "Aplicar talco em abundância.",
    ],
    explanation: "O reposicionamento programado reduz a pressão prolongada. Áreas avermelhadas não devem ser massageadas vigorosamente.",
  },
  {
    question: "Quando uma grade lateral do leito pode ser considerada contenção?",
    answer: "Quando é elevada com a finalidade de impedir que a pessoa saia do leito.",
    options: [
      "Quando integra uma medida acordada no PAI para proteção contra queda.",
      "Quando é elevada com a finalidade de impedir que a pessoa saia do leito.",
      "Quando é abaixada durante a higiene.",
      "Nunca pode ser considerada contenção.",
    ],
    explanation: "A finalidade e o contexto de uso são determinantes: uma grade usada para impedir a saída da pessoa pode assumir função de contenção e deve seguir as regras e protocolos aplicáveis.",
  },
  {
    question: "Qual documento define deveres e regras de conduta do empregado público na Itália?",
    answer: "Codice di Comportamento (Código de Comportamento).",
    options: [
      "Codice Penale (Código Penal).",
      "Codice di Comportamento (Código de Comportamento).",
      "GDPR.",
      "ISO 9001.",
    ],
    explanation: "O Codice di Comportamento estabelece deveres de conduta aplicáveis aos empregados públicos no contexto italiano.",
  },
  {
    question: "Segundo o D.Lgs. 81/2008, quais EPIs são típicos para o OSS diante de risco biológico?",
    answer: "Luvas e, quando indicado, máscara e outros EPIs previstos pela avaliação de risco.",
    options: [
      "Capacete.",
      "Luvas e, quando indicado, máscara e outros EPIs previstos pela avaliação de risco.",
      "Calçado de segurança com biqueira de aço em qualquer situação.",
      "Cinto de segurança para trabalho em altura.",
    ],
    explanation: "A proteção deve ser escolhida de acordo com o risco da atividade; no risco biológico, luvas e proteção respiratória/facial podem ser indicadas conforme o procedimento.",
  },
  {
    question: "O que significa o princípio de minimização de dados do GDPR?",
    answer: "Tratar apenas os dados adequados, pertinentes e necessários para a finalidade.",
    options: [
      "Guardar todos os dados para qualquer eventualidade.",
      "Tratar apenas os dados adequados, pertinentes e necessários para a finalidade.",
      "Anonimizar todos os dados em qualquer situação.",
      "Criptografar somente fotografias.",
    ],
    explanation: "A minimização exige limitar a coleta e o tratamento ao que é efetivamente necessário para a finalidade declarada.",
  },
  {
    question: "Na acreditação dos serviços de saúde da Emilia-Romagna, o que é valorizado?",
    answer: "Processos organizados, centralidade da pessoa usuária e qualidade documentada.",
    options: [
      "Somente equipamentos novos.",
      "Processos organizados, centralidade da pessoa usuária e qualidade documentada.",
      "Ausência de auditorias.",
      "Redução do número de profissionais.",
    ],
    explanation: "A acreditação considera organização dos processos, foco na pessoa atendida e demonstração/documentação da qualidade assistencial.",
  },
];

export const fundamentosFotoCards = fundamentosFotoQuestions.map(({ question, answer }) => ({
  category: "Fundamentos",
  question,
  answer,
}));
