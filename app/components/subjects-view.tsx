"use client";
import { Lesson, Subject, subjects } from "../study-data";
import { fundamentosFotoQuestions } from "../fundamentos-foto-data";
import { Progress, View } from "../study-state";
import { SubjectCard } from "./common";

const SUPER_QUIZ_SESSION_KEY="fbarros-start-desabilidade-super-quiz";

export function SubjectsView({progress,subject,lesson,onSubject,onLesson,onBack,onComplete,onFavorite,onNote,onGo}:{progress:Progress;subject:Subject|null;lesson:Lesson|null;onSubject:(s:Subject)=>void;onLesson:(l:Lesson|null,s:Subject)=>void;onBack:()=>void;onComplete:(l:Lesson)=>void;onFavorite:(id:string)=>void;onNote:(id:string,t:string)=>void;onGo:(v:View)=>void}){
  const openSuperQuiz=()=>{
    if(typeof window!=="undefined")sessionStorage.setItem(SUPER_QUIZ_SESSION_KEY,"1");
    onGo("quiz");
  };

  if(!subject)return <>
    <div className="page-head"><span className="eyebrow">BIBLIOTECA</span><h1>Matérias e aulas práticas</h1><p>Escolha uma matéria para acessar as aulas e registrar seu progresso.</p></div>
    <div className="subject-grid large">{subjects.map(s=><SubjectCard key={s.id} subject={s} progress={progress} onClick={()=>onSubject(s)}/>)}</div>
  </>;

  if(!lesson){
    const done=subject.lessons.filter(l=>progress.completed.includes(l.id)).length;
    return <>
      <button className="back" onClick={onBack}>← Todas as matérias</button>
      <section className="subject-hero">
        <img src={subject.image} alt=""/>
        <div><span className="eyebrow">{subject.lessons.length} AULAS PRÁTICAS</span><h1>{subject.title}</h1><p>{subject.text}</p><div className="bar"><i style={{width:`${Math.round(done/subject.lessons.length*100)}%`}}/></div><small>{done} de {subject.lessons.length} concluídas</small></div>
      </section>

      <div className="lesson-list">{subject.lessons.map((l,i)=><article key={l.id} className={progress.completed.includes(l.id)?"done":""}>
        <b>{progress.completed.includes(l.id)?"✓":String(i+1).padStart(2,"0")}</b>
        <div><h3>{l.title}</h3><p>{l.goal}</p><span>{l.duration}</span></div>
        <button onClick={()=>onLesson(l,subject)}>{progress.completed.includes(l.id)?"Revisar":"Acessar"} →</button>
      </article>)}</div>

      {subject.id==="desabilidade"&&<div className="quiz-start super-quiz-start">
        <div>
          <span className="eyebrow">DESAFIO FINAL</span>
          <h2>Super Quiz — Desabilidade Funcional</h2>
          <p>20 questões com correção imediata sobre AVDs, AIVDs, mobilidade, transferências, dispositivos de apoio, quedas, autonomia, comunicação e acessibilidade.</p>
        </div>
        <button onClick={openSuperQuiz}>Começar Super Quiz →</button>
      </div>}

      {subject.id==="fundamentos"&&<>
        <div className="page-head"><span className="eyebrow">REVISÃO DA FOTO · 10 QUESTÕES</span><h2>OSS, segurança e qualidade</h2><p>Conteúdo incluído a partir da folha de estudo: autonomia, PAI, disfagia, prevenção de lesões, contenção, segurança ocupacional, privacidade e acreditação.</p></div>
        <div className="lesson-list">{fundamentosFotoQuestions.map((q,i)=><article key={q.question}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{q.question}</h3><p><strong>Resposta:</strong> {q.answer}</p><span>{q.explanation}</span></div></article>)}</div>
      </>}
    </>;
  }

  const isDone=progress.completed.includes(lesson.id);
  const favorite=progress.favoriteLessons.includes(lesson.id);
  return <>
    <button className="back" onClick={()=>onLesson(null,subject)}>← Voltar às aulas</button>
    <article className="lesson-open">
      <div className="lesson-top"><div><span className="eyebrow">AULA PRÁTICA · {lesson.duration}</span><h1>{lesson.title}</h1><p>{lesson.goal}</p></div><button className={`star ${favorite?"on":""}`} onClick={()=>onFavorite(lesson.id)}>★</button></div>
      <img className="lesson-art" src={lesson.image||subject.image} alt={`Ilustração de ${lesson.title}`}/>
      <h3>Passo a passo de estudo</h3>
      <ol>{lesson.steps.map((step,i)=><li key={i}>{step}</li>)}</ol>
      {lesson.tip&&<aside><b>Nota importante</b><p>{lesson.tip}</p></aside>}
      <label className="notes"><b>Minha anotação</b><textarea value={progress.notes[lesson.id]||""} onChange={e=>onNote(lesson.id,e.target.value)} placeholder="Escreva o que quer lembrar desta aula..."/></label>
      <div className="lesson-actions">
        <button onClick={()=>onComplete(lesson)}>{isDone?"✓ Aula concluída":"Marcar como concluída"}</button>
        <button className="secondary" onClick={()=>onGo("flashcards")}>Revisar flashcards</button>
        {subject.id==="desabilidade"?<button className="secondary" onClick={openSuperQuiz}>Super Quiz · 20 questões</button>:<button className="secondary" onClick={()=>onGo("quiz")}>Fazer quiz</button>}
      </div>
    </article>
  </>;
}
