export type Lesson = {
  id: string;
  title: string;
  duration: string;
  minutes: number;
  goal: string;
  steps: string[];
  image?: string;
  tip?: string;
};

export type Subject = {
  id: string;
  icon: string;
  title: string;
  color: string;
  text: string;
  image: string;
  lessons: Lesson[];
};

export const subjects: Subject[] = [
  {
    id: "fundamentos",
    icon: "♡",
    title: "Fundamentos",
    color: "coral",
    text: "Processo de Enfermagem, segurança, registros e cuidados essenciais.",
    image: "/art-foundations.svg",
    lessons: [
      { id: "fund-higiene-maos", title: "Higienização correta das mãos", duration: "12 min", minutes: 12, goal: "Revisar uma técnica essencial de prevenção de infecções.", steps: ["Retirar adornos e organizar o material necessário.", "Friccionar todas as superfícies das mãos pelo tempo recomendado para a técnica utilizada.", "Enxaguar e secar sem recontaminar as mãos; registrar ou repetir conforme o procedimento."], tip: "A indicação e a técnica dependem da situação assistencial e do protocolo do serviço." },
      { id: "fund-sinais-vitais", title: "Aferição dos sinais vitais", duration: "18 min", minutes: 18, goal: "Organizar a avaliação de temperatura, pulso, respiração e pressão arterial.", steps: ["Confirmar identidade, explicar o procedimento e preparar equipamentos adequados.", "Posicionar a pessoa e realizar as medidas sem apressar a observação.", "Interpretar tendências, registrar os valores e comunicar alterações relevantes."], image: "/art-foundations.svg" },
      { id: "fund-leito", title: "Organização do leito", duration: "10 min", minutes: 10, goal: "Preparar um ambiente limpo, seguro e confortável.", steps: ["Higienizar as mãos e separar roupa limpa e materiais.", "Realizar a troca evitando contato entre roupa limpa e superfícies contaminadas.", "Garantir conforto, posicionamento e itens de segurança acessíveis." ] },
      { id: "fund-processo", title: "Processo de Enfermagem", duration: "20 min", minutes: 20, goal: "Compreender as etapas do Processo de Enfermagem e sua documentação.", steps: ["Realizar avaliação de enfermagem e reunir dados relevantes.", "Relacionar os dados ao diagnóstico e ao planejamento de enfermagem conforme competência profissional.", "Implementar, evoluir e documentar o cuidado, reavaliando continuamente."], tip: "A Resolução Cofen nº 736/2024 regulamenta a implementação do Processo de Enfermagem." },
      { id: "fund-registros", title: "Registros de enfermagem", duration: "15 min", minutes: 15, goal: "Treinar registros objetivos, cronológicos e úteis para continuidade do cuidado.", steps: ["Registrar identificação, horário e informação pertinente ao cuidado.", "Descrever achados e intervenções de forma objetiva, evitando julgamentos.", "Documentar resposta, intercorrências e comunicação realizada conforme normas institucionais." ] },
      { id: "fund-seguranca", title: "Segurança do paciente", duration: "18 min", minutes: 18, goal: "Reconhecer barreiras básicas para reduzir eventos adversos.", steps: ["Confirmar a identificação com os identificadores previstos pelo serviço.", "Verificar riscos relacionados a quedas, medicamentos, procedimentos e comunicação.", "Usar dupla checagem e comunicação estruturada quando indicada." ] },
    ],
  },
  {
    id: "urgencia",
    icon: "✚",
    title: "Urgência e emergência",
    color: "red",
    text: "Avaliação rápida, ABCDE, triagem e prioridades assistenciais.",
    image: "/art-emergency.svg",
    lessons: [
      { id: "urg-abcde", title: "ABCDE — visão geral", duration: "12 min", minutes: 12, goal: "Compreender a sequência de avaliação inicial e a lógica de tratar primeiro ameaças imediatas.", steps: ["Confirmar segurança da cena e utilizar proteção adequada.", "Avaliar A, B, C, D e E em sequência, identificando ameaças imediatas.", "Intervir dentro da competência e do protocolo, reavaliando após cada ação." ] },
      { id: "urg-a", title: "A — Vias aéreas", duration: "16 min", minutes: 16, goal: "Reconhecer sinais de comprometimento da via aérea.", steps: ["Avaliar responsividade, fala, ruídos e sinais de obstrução.", "Acionar suporte e manter atenção à proteção cervical quando indicada.", "Aplicar as medidas previstas no protocolo e reavaliar a permeabilidade." ] },
      { id: "urg-b", title: "B — Respiração", duration: "16 min", minutes: 16, goal: "Avaliar ventilação, esforço respiratório e oxigenação.", steps: ["Observar frequência, simetria, padrão e esforço respiratório.", "Verificar saturação e outros dados quando disponíveis e indicados.", "Oferecer suporte conforme protocolo e reavaliar a resposta." ] },
      { id: "urg-c", title: "C — Circulação", duration: "18 min", minutes: 18, goal: "Identificar alterações de perfusão e hemorragia importante.", steps: ["Avaliar pulso, pele, perfusão e pressão quando possível.", "Procurar sangramento externo e aplicar medidas de controle previstas no protocolo.", "Monitorar resposta, comunicar piora e reavaliar continuamente." ] },
      { id: "urg-d", title: "D — Avaliação neurológica", duration: "14 min", minutes: 14, goal: "Detectar rapidamente alterações de consciência.", steps: ["Aplicar avaliação rápida de responsividade ou escala indicada pelo protocolo.", "Observar pupilas, resposta motora e mudança do estado mental.", "Verificar causas reversíveis quando previsto e comunicar alterações." ] },
      { id: "urg-e", title: "E — Exposição e ambiente", duration: "14 min", minutes: 14, goal: "Examinar de forma ampla preservando dignidade e temperatura.", steps: ["Expor apenas o necessário para procurar lesões ou alterações.", "Examinar dorso e extremidades com técnica segura quando indicado.", "Cobrir e proteger contra perda de calor após a avaliação." ] },
      { id: "urg-triagem", title: "Triagem e classificação de risco", duration: "15 min", minutes: 15, goal: "Entender a priorização por gravidade e risco.", steps: ["Identificar queixa principal e sinais de alerta.", "Coletar dados objetivos conforme o protocolo de acolhimento.", "Classificar, encaminhar e reavaliar no tempo definido pelo serviço." ] },
      { id: "urg-carrinho", title: "Conferência do carrinho de emergência", duration: "14 min", minutes: 14, goal: "Organizar uma checagem sistemática do carrinho de emergência.", steps: ["Verificar lacre, organização e validade dos itens.", "Conferir oxigênio e funcionamento dos equipamentos previstos.", "Registrar a checagem e comunicar reposições ou não conformidades." ] },
    ],
  },
  {
    id: "farmacologia",
    icon: "⌁",
    title: "Farmacologia",
    color: "blue",
    text: "Administração segura, cálculos, vias e prevenção de erros.",
    image: "/art-pharma.svg",
    lessons: [
      { id: "farma-certos", title: "Os 9 certos da medicação", duration: "18 min", minutes: 18, goal: "Usar barreiras de segurança antes, durante e após a administração.", steps: ["Conferir paciente, medicamento, via, hora e dose.", "Conferir registro, ação, forma e resposta conforme a referência adotada pelo serviço.", "Esclarecer qualquer dúvida antes de administrar e documentar no tempo adequado."], tip: "Protocolos institucionais podem ampliar a lista de verificações." },
      { id: "farma-dose", title: "Cálculo de dose", duration: "22 min", minutes: 22, goal: "Aplicar a relação entre dose prescrita, dose disponível e volume.", steps: ["Colocar dose prescrita e disponível na mesma unidade.", "Aplicar: (dose prescrita ÷ dose disponível) × volume disponível.", "Conferir unidade, plausibilidade e regra de arredondamento do serviço antes do preparo." ] },
      { id: "farma-preparo", title: "Preparo seguro de medicamentos", duration: "18 min", minutes: 18, goal: "Organizar o preparo reduzindo risco de troca e contaminação.", steps: ["Higienizar as mãos e organizar uma área de preparo adequada.", "Conferir integridade, validade, identificação e prescrição.", "Rotular preparações e manter rastreabilidade até a administração." ] },
      { id: "farma-infusao", title: "Cálculo de infusão", duration: "20 min", minutes: 20, goal: "Revisar relações de volume, tempo e velocidade de infusão.", steps: ["Converter o tempo para a unidade necessária.", "Para bomba: dividir volume em mL pelo tempo em horas para obter mL/h.", "Para gotejamento: aplicar o fator do equipo conforme protocolo e conferir o resultado." ] },
      { id: "farma-vias", title: "Vias de administração", duration: "17 min", minutes: 17, goal: "Diferenciar vias e reconhecer que técnica, material e risco variam entre elas.", steps: ["Identificar a via prescrita e confirmar sua adequação.", "Separar material e técnica de acordo com a via e o medicamento.", "Observar tolerância e resposta após a administração." ] },
      { id: "farma-alta-vigilancia", title: "Medicamentos de alta vigilância", duration: "16 min", minutes: 16, goal: "Reconhecer a necessidade de barreiras adicionais em medicamentos de maior risco.", steps: ["Identificar sinalização e políticas do serviço.", "Executar dupla checagem independente quando prevista.", "Manter atenção a armazenamento, concentração, identificação e monitoramento." ] },
    ],
  },
  {
    id: "crianca",
    icon: "◌",
    title: "Saúde da criança",
    color: "yellow",
    text: "Avaliação pediátrica, crescimento, vacinação e cuidado acolhedor.",
    image: "/art-pediatric.svg",
    lessons: [
      { id: "cri-sinais", title: "Sinais vitais pediátricos", duration: "17 min", minutes: 17, goal: "Organizar uma avaliação compatível com idade e tamanho da criança.", steps: ["Observar a criança antes de manipulá-la quando possível.", "Selecionar equipamentos com tamanho adequado.", "Registrar valores e interpretar de acordo com idade, contexto e protocolo."], image: "/art-pediatric.svg" },
      { id: "cri-crescimento", title: "Peso e crescimento", duration: "12 min", minutes: 12, goal: "Realizar medidas com precisão e acompanhar tendência de crescimento.", steps: ["Preparar e zerar o equipamento.", "Posicionar a criança com segurança e reduzir interferências na medida.", "Registrar e acompanhar a evolução em instrumentos adequados."], image: "/art-pediatric.svg" },
      { id: "cri-vacina", title: "Sala de vacinação", duration: "15 min", minutes: 15, goal: "Compreender o fluxo seguro de vacinação.", steps: ["Conferir identificação, histórico e indicação.", "Checar conservação, lote, validade e apresentação.", "Orientar o responsável e registrar a vacinação conforme normas vigentes."], image: "/art-pediatric.svg" },
      { id: "cri-desenvolvimento", title: "Desenvolvimento infantil", duration: "18 min", minutes: 18, goal: "Reconhecer o acompanhamento do desenvolvimento como parte do cuidado integral.", steps: ["Observar habilidades motoras, linguagem, interação e comportamento.", "Considerar idade e trajetória individual ao acompanhar marcos.", "Registrar achados e encaminhar dúvidas conforme a rede de cuidado." ] },
      { id: "cri-acolhimento", title: "Acolhimento da criança e família", duration: "14 min", minutes: 14, goal: "Reduzir medo e melhorar comunicação durante o cuidado.", steps: ["Apresentar-se e explicar o que será feito em linguagem apropriada.", "Incluir acompanhante e recursos lúdicos quando possível.", "Preservar privacidade, conforto e participação da criança." ] },
    ],
  },
  {
    id: "adulto",
    icon: "♧",
    title: "Saúde do adulto",
    color: "green",
    text: "Mobilidade, integridade da pele, balanço hídrico e cuidado integral.",
    image: "/art-adult.svg",
    lessons: [
      { id: "adu-decb", title: "Mudança de decúbito", duration: "15 min", minutes: 15, goal: "Reposicionar com técnica segura e observar integridade da pele.", steps: ["Avaliar mobilidade, dor, pele e dispositivos antes de mover.", "Usar técnica ergonômica, apoios e ajuda adicional quando indicada.", "Reposicionar, conferir conforto e registrar achados relevantes." ] },
      { id: "adu-marcha", title: "Auxílio na mobilidade", duration: "14 min", minutes: 14, goal: "Apoiar mobilidade reduzindo risco de queda.", steps: ["Avaliar força, equilíbrio, tontura e necessidade de dispositivo.", "Preparar ambiente e calçado seguro.", "Acompanhar a marcha e interromper diante de intolerância ou risco." ] },
      { id: "adu-balanco", title: "Balanço hídrico", duration: "13 min", minutes: 13, goal: "Registrar entradas e saídas de forma organizada.", steps: ["Definir o período de controle e as fontes de entrada e saída.", "Medir e registrar volumes no momento adequado.", "Somar o balanço, observar tendência e comunicar alterações relevantes." ] },
      { id: "adu-pele", title: "Prevenção de lesão por pressão", duration: "18 min", minutes: 18, goal: "Reconhecer fatores de risco e medidas preventivas.", steps: ["Avaliar pele, mobilidade, umidade, nutrição e outros riscos.", "Planejar reposicionamento e superfícies de apoio conforme avaliação.", "Reavaliar a pele e documentar mudanças." ] },
      { id: "adu-seguranca", title: "Prevenção de quedas", duration: "15 min", minutes: 15, goal: "Identificar riscos ambientais e individuais relacionados à queda.", steps: ["Avaliar fatores de risco conforme instrumento adotado.", "Organizar ambiente, campainha, iluminação e dispositivos de apoio.", "Orientar paciente e acompanhante e reavaliar após mudanças clínicas." ] },
    ],
  },
  {
    id: "anatomia",
    icon: "◎",
    title: "Anatomia e fisiologia",
    color: "purple",
    text: "Estruturas e funções dos principais sistemas do corpo humano.",
    image: "/art-anatomy.svg",
    lessons: [
      { id: "ana-cardio", title: "Sistema cardiovascular", duration: "18 min", minutes: 18, goal: "Relacionar coração, vasos, circulação e perfusão.", steps: ["Localizar câmaras e grandes vasos.", "Acompanhar o trajeto do sangue pela circulação pulmonar e sistêmica.", "Relacionar débito, pulso, pressão e perfusão aos conceitos básicos."], image: "/art-anatomy.svg" },
      { id: "ana-resp", title: "Sistema respiratório", duration: "17 min", minutes: 17, goal: "Compreender ventilação e trocas gasosas.", steps: ["Identificar vias aéreas, pulmões e estruturas relacionadas.", "Diferenciar inspiração e expiração.", "Relacionar alvéolos, ventilação e oxigenação." ] },
      { id: "ana-digest", title: "Sistema digestório", duration: "16 min", minutes: 16, goal: "Reconhecer o trajeto e funções gerais do sistema digestório.", steps: ["Localizar os principais órgãos.", "Ordenar o trajeto do alimento.", "Relacionar digestão, absorção e eliminação." ] },
      { id: "ana-renal", title: "Sistema urinário", duration: "16 min", minutes: 16, goal: "Revisar rins, ureteres, bexiga e formação da urina.", steps: ["Localizar os órgãos do sistema urinário.", "Revisar a função renal básica e o caminho da urina.", "Relacionar equilíbrio hídrico e eliminação a conceitos fisiológicos." ] },
      { id: "ana-neuro", title: "Sistema nervoso", duration: "19 min", minutes: 19, goal: "Reconhecer organização básica do sistema nervoso.", steps: ["Diferenciar sistema nervoso central e periférico.", "Relacionar encéfalo, medula e nervos às funções gerais.", "Associar avaliação de consciência e resposta motora a conceitos anatômicos." ] },
    ],
  },
  {
    id: "geriatria",
    icon: "◇",
    title: "Geriatria",
    color: "amber",
    text: "Envelhecimento, funcionalidade, segurança e cuidado à pessoa idosa.",
    image: "/art-geriatric.svg",
    lessons: [
      { id: "ger-avaliacao", title: "Avaliação integral da pessoa idosa", duration: "18 min", minutes: 18, goal: "Observar dimensões clínicas, funcionais, cognitivas e sociais do cuidado.", steps: ["Investigar queixas, histórico e capacidade funcional.", "Observar mobilidade, cognição, comunicação, nutrição e suporte social.", "Registrar mudanças e encaminhar necessidades para avaliação multiprofissional." ] },
      { id: "ger-quedas", title: "Prevenção de quedas", duration: "16 min", minutes: 16, goal: "Identificar fatores de risco frequentes e organizar medidas preventivas.", steps: ["Avaliar marcha, equilíbrio, visão, tontura, ambiente e medicamentos conforme rotina do serviço.", "Reduzir obstáculos e favorecer iluminação, apoio e calçado seguro.", "Orientar pessoa idosa e família e reavaliar após intercorrências." ] },
      { id: "ger-pele", title: "Pele e prevenção de lesões", duration: "15 min", minutes: 15, goal: "Reconhecer alterações de pele e fatores que aumentam risco de lesão.", steps: ["Inspecionar pele e áreas de pressão com respeito à privacidade.", "Manter higiene, hidratação e manejo de umidade conforme plano de cuidado.", "Reposicionar e utilizar superfícies de apoio quando indicado." ] },
      { id: "ger-polifarmacia", title: "Polifarmácia e segurança", duration: "18 min", minutes: 18, goal: "Entender por que múltiplos medicamentos exigem conciliação e vigilância.", steps: ["Manter lista atualizada de medicamentos em uso.", "Observar duplicidades, horários, adesão e possíveis efeitos adversos para comunicar à equipe responsável.", "Evitar suspender, iniciar ou alterar medicamentos sem avaliação/prescrição adequada." ] },
      { id: "ger-delirium", title: "Confusão aguda e delirium", duration: "17 min", minutes: 17, goal: "Diferenciar mudança aguda de comportamento de alterações crônicas e reconhecer necessidade de avaliação.", steps: ["Comparar o estado atual com o funcionamento habitual.", "Observar início súbito, flutuação de atenção, desorientação e fatores precipitantes.", "Comunicar mudança aguda e apoiar medidas ambientais e de segurança previstas no plano." ] },
      { id: "ger-autonomia", title: "Autonomia e cuidado centrado na pessoa", duration: "14 min", minutes: 14, goal: "Promover participação e independência possível nas atividades de vida diária.", steps: ["Perguntar preferências e incluir a pessoa nas decisões possíveis.", "Estimular atividades que consegue realizar com segurança.", "Oferecer ajuda proporcional à necessidade, preservando dignidade e privacidade." ] },
    ],
  },
];

export const totalLessons = subjects.reduce((sum, subject) => sum + subject.lessons.length, 0);

export function findLesson(lessonId: string) {
  for (const subject of subjects) {
    const lesson = subject.lessons.find(item => item.id === lessonId);
    if (lesson) return { subject, lesson };
  }
  return null;
}
