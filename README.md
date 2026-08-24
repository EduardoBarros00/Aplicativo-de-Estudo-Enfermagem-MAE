# FBarros Enfermagem

Aplicativo local-first de estudos de enfermagem construído em Next/Vinext para Cloudflare/OpenAI Sites.

## O que funciona nesta versão

- Painel com dados reais de estudo e data atual.
- 7 matérias e 41 aulas práticas ilustradas.
- Conclusão de aulas persistente no navegador.
- Botão “continuar estudando” ligado à última aula aberta.
- Notas e favoritos por aula.
- 116 flashcards únicos.
- Revisão espaçada com quatro níveis: Errei, Difícil, Lembrei e Fácil.
- Caderno de erros e favoritos de flashcards.
- Quiz com sessões de 10 questões ou banco completo da matéria, sem repetição artificial para inflar contagem.
- Correção imediata, resultado, histórico e envio automático dos erros para revisão.
- 7 casos clínicos rápidos de raciocínio.
- Busca global por matéria, aula e flashcard.
- Área de Ferramentas com cálculos educacionais de dose, mL/h e gotejamento.
- Lembretes rápidos de ABCDE, SBAR e segurança medicamentosa.
- Timer de foco de 25 minutos.
- Página de progresso real por matéria.
- Backup/exportação e restauração do progresso em JSON.
- PWA com manifesto e service worker para melhor experiência em celular/offline após primeiro carregamento.
- Imagens otimizadas em WebP para reduzir drasticamente o peso do projeto.

## Persistência

O progresso é salvo em `localStorage` com a chave `fbarros-enfermagem-v2`. Isso mantém o app funcional sem exigir banco de dados ou serviço pago. Para trocar de dispositivo, use a opção de exportar/importar backup em **Meu progresso**.

## Segurança do conteúdo

As calculadoras e os conteúdos clínicos são educacionais. Em prática assistencial, devem ser conferidos prescrição, unidades, regras de arredondamento, protocolo institucional, treinamento e supervisão aplicável.

## Desenvolvimento

Requer Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura principal

- `app/page.tsx`: interface e funcionalidades.
- `app/study-data.ts`: matérias e aulas.
- `app/flashcards-data.ts`: banco de flashcards.
- `app/globals.css`: visual responsivo.
- `public/manifest.webmanifest`: metadados da PWA.
- `public/sw.js`: cache offline básico.
