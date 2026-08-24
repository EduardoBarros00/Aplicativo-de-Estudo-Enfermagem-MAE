# FBarros Enfermagem 2.0

Aplicativo funcional de estudos de enfermagem, construído em Next.js e pensado para funcionar de forma **local-first**: as funções principais não dependem de banco de dados pago nem de IA externa.

## Recursos

- Painel moderno e responsivo.
- 7 matérias e 41 aulas práticas.
- 116 flashcards únicos.
- Revisão espaçada com Errei, Difícil, Lembrei e Fácil.
- Caderno de erros.
- Quizzes com questões únicas e correção imediata.
- Progresso real por matéria.
- Última aula e botão Continuar estudando.
- Favoritos e anotações por aula.
- Busca global.
- Calculadoras educacionais de dose, mL/h e gotejamento.
- Referências rápidas de ABCDE, SBAR e 9 certos.
- Exportação e importação de backup em JSON.
- PWA e cache offline básico.

## Como executar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para produção:

```bash
npm run build
npm start
```

## Onde o progresso é salvo

O progresso é armazenado no `localStorage` do navegador usando a chave `fbarros-enfermagem-v2`. Para mudar de aparelho, use **Meu progresso > Exportar backup** e depois **Importar backup** no novo dispositivo.

## Aviso de segurança

As aulas, referências rápidas e calculadoras são ferramentas **educacionais**. Em assistência real, confira sempre a prescrição, as unidades, as regras de arredondamento, os protocolos institucionais, as competências profissionais e a supervisão aplicável.
