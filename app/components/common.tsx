"use client";
import { Progress } from "../study-state";
import { Subject } from "../study-data";
export function Stat({value,label,sub}:{value:string;label:string;sub:string}){return <article className="stat"><strong>{value}</strong><div><b>{label}</b><span>{sub}</span></div></article>}
export function SectionTitle({title,action,onClick}:{title:string;action?:string;onClick?:()=>void}){return <div className="section-title"><h2>{title}</h2>{action&&<button onClick={onClick}>{action} →</button>}</div>}
export function SubjectCard({subject,progress,onClick}:{subject:Subject;progress:Progress;onClick:()=>void}){const done=subject.lessons.filter(l=>progress.completed.includes(l.id)).length;const pct=Math.round(done/subject.lessons.length*100);return <button className="subject-card" onClick={onClick}><div className={`subject-icon ${subject.color}`}>{subject.icon}</div><span className="lesson-count">{subject.lessons.length} aulas</span><h3>{subject.title}</h3><p>{subject.text}</p><div className="progress-line"><span>{done} concluídas</span><b>{pct}%</b></div><div className="bar"><i style={{width:`${pct}%`}}/></div></button>}
export function Empty({title,text}:{title:string;text:string}){return <div className="empty"><span>✓</span><h2>{title}</h2><p>{text}</p></div>}
