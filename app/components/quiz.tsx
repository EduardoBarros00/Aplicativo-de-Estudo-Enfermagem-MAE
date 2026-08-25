"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { studyCards } from "../flashcards-data";
import { fundamentosFotoCards, fundamentosFotoQuestions } from "../fundamentos-foto-data";
import { desabilidadeCards } from "../desabilidade-cards";
import { desabilidadeSuperQuiz } from "../desabilidade-super-quiz";
import { Progress, cardId, shuffle } from "../study-state";

type Q={id:string;question:string;answer:string;options:string[];category:string;explanation?:string};
const allStudyCards=[...studyCards,...fundamentosFotoCards,...desabilidadeCards];
const photoQuestionByText=new Map(fundamentosFotoQuestions.map(q=>[q.question,q]));

export function Quiz({setProgress}:{progress:Progress;setProgress:Dispatch<SetStateAction<Progress>>}){
  const categories=Array.from(new Set(allStudyCards.map(c=>c.category)));
  const [category,setCategory]=useState(categories[0]);
  const [questions,setQuestions]=useState<Q[]>([]);
  const [pos,setPos]=useState(0);
  const [picked,setPicked]=useState<string|null>(null);
  const [score,setScore]=useState(0);
  const [finished,setFinished]=useState(false);
  const [superMode,setSuperMode]=useState(false);

  const resetSession=(items:Q[],isSuper=false)=>{
    setQuestions(items);
    setPos(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
    setSuperMode(isSuper);
  };

  const start=()=>{
    const pool=allStudyCards.filter(c=>c.category===category);
    const selected=shuffle(pool).slice(0,Math.min(10,pool.length));
    resetSession(selected.map(c=>{
      const photo=photoQuestionByText.get(c.question);
      return {
        id:cardId(c.category,c.question),
        category:c.category,
        question:c.question,
        answer:c.answer,
        options:photo?shuffle(photo.options):shuffle([c.answer,...shuffle(allStudyCards.filter(x=>x.answer!==c.answer).map(x=>x.answer)).slice(0,3)]),
        explanation:photo?.explanation,
      };
    }));
  };

  const startSuper=()=>resetSession(
    desabilidadeSuperQuiz.map(q=>({...q,options:shuffle(q.options)})),
    true
  );

  const answer=(option:string)=>{
    if(picked)return;
    setPicked(option);
    const q=questions[pos];
    const correct=option===q.answer;
    if(correct)setScore(s=>s+1);
    setProgress(p=>({
      ...p,
      quizCorrect:p.quizCorrect+(correct?1:0),
      quizTotal:p.quizTotal+1,
      wrongCards:correct?p.wrongCards.filter(x=>x!==q.id):Array.from(new Set([...p.wrongCards,q.id])),
      studyMinutes:p.studyMinutes+1,
    }));
  };

  const next=()=>{
    if(pos+1>=questions.length)setFinished(true);
    else{setPos(p=>p+1);setPicked(null)}
  };

  if(!questions.length||finished){
    const percent=questions.length?Math.round(score/questions.length*100):0;
    return <>
      <div className="page-head">
        <span className="eyebrow">PRÁTICA ATIVA</span>
        <h1>Quiz</h1>
        <p>Questões únicas, correção imediata e envio automático dos erros para revisão.</p>
      </div>

      {finished&&<div className="result">
        <strong>{score}/{questions.length}</strong>
        <h2>{superMode?"Resultado do Super Quiz":"Resultado da sessão"}</h2>
        <p>{percent>=80?"Ótimo desempenho. Continue revisando para manter a retenção.":"Revise os erros e tente novamente para consolidar o conteúdo."}</p>
        {superMode&&<small>{percent>=90?"Excelente domínio do conteúdo.":percent>=75?"Muito bom. Revise os pontos em que errou.":percent>=60?"Bom começo. Reforce mobilidade, segurança, AVDs e autonomia.":"Recomendamos revisar as aulas de Desabilidade Funcional antes de repetir o Super Quiz."}</small>}
      </div>}

      <div className="quiz-start">
        <label>Matéria
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c=><option key={c}>{c}</option>)}
          </select>
        </label>
        <button onClick={start}>{finished&&!superMode?"Nova sessão":"Começar 10 questões"}</button>
      </div>

      <div className="quiz-start super-quiz-start">
        <div>
          <b>Super Quiz — Desabilidade Funcional</b>
          <p>20 questões sobre AVDs, AIVDs, mobilidade, transferências, dispositivos de apoio, prevenção de quedas, autonomia, comunicação e acessibilidade.</p>
        </div>
        <button onClick={startSuper}>{finished&&superMode?"Refazer Super Quiz":"Começar Super Quiz"}</button>
      </div>
    </>;
  }

  const q=questions[pos];
  return <>
    <div className="quiz-status">
      <span>{superMode?"SUPER QUIZ · DESABILIDADE FUNCIONAL":q.category}</span>
      <b>Questão {pos+1} de {questions.length}</b>
    </div>
    <article className="question">
      <h2>{q.question}</h2>
      <div className="options">
        {q.options.map((o,i)=><button key={o} disabled={!!picked} className={picked?(o===q.answer?"correct":o===picked?"wrong":""):""} onClick={()=>answer(o)}>
          <i>{String.fromCharCode(65+i)}</i><span>{o}</span>
        </button>)}
      </div>
      {picked&&<div className="explanation">
        <b>{picked===q.answer?"✓ Resposta correta":"✕ Resposta incorreta"}</b>
        <p>A resposta correta é: {q.answer}</p>
        {q.explanation&&<p>{q.explanation}</p>}
        <button onClick={next}>{pos+1===questions.length?"Ver resultado":"Próxima questão"} →</button>
      </div>}
    </article>
  </>;
}
