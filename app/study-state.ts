import { studyCards } from "./flashcards-data";

export type View = "inicio" | "materias" | "flashcards" | "quiz" | "ferramentas" | "progresso";
export type Review = { due: number; ease: number; interval: number };
export type Progress = { completed: string[]; favoriteLessons: string[]; notes: Record<string,string>; lastLesson?: string; reviews: Record<string,Review>; favoriteCards: string[]; wrongCards: string[]; quizCorrect: number; quizTotal: number; studyMinutes: number; streak: number };
export const STORAGE_KEY = "fbarros-enfermagem-v2";
export const EMPTY: Progress = { completed: [], favoriteLessons: [], notes: {}, reviews: {}, favoriteCards: [], wrongCards: [], quizCorrect: 0, quizTotal: 0, studyMinutes: 0, streak: 0 };
export const cardId = (category:string, question:string) => `${category}::${question}`;
export const today = () => new Date().toISOString().slice(0,10);
export function shuffle<T>(items:T[]){ const copy=[...items]; for(let i=copy.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [copy[i],copy[j]]=[copy[j],copy[i]]; } return copy; }
export function loadProgress():Progress { if(typeof window==="undefined") return EMPTY; try { return { ...EMPTY, ...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}") }; } catch { return EMPTY; } }
export function dueCount(progress:Progress){ return studyCards.filter(c=>!progress.reviews[cardId(c.category,c.question)]||progress.reviews[cardId(c.category,c.question)].due<=Date.now()).length; }
