import { useState } from 'react';
export type Progress = Record<string,{visited:number; completed:boolean}>;
const key='grammaire-progress-v1';
function read():Progress {try {const value=JSON.parse(localStorage.getItem(key)||'{}'); if(!value || typeof value!=='object' || Array.isArray(value)) return {}; return Object.fromEntries(Object.entries(value).filter(([,v])=>v && typeof v==='object' && typeof (v as any).visited==='number' && typeof (v as any).completed==='boolean')) as Progress;} catch{return {};}}
export function useProgress(){const [progress,setProgress]=useState<Progress>(read);const [error,setError]=useState(false);function update(id:string,complete=false){setProgress(old=>{const next={...old,[id]:{visited:Date.now(),completed:complete || !!old[id]?.completed}};try{localStorage.setItem(key,JSON.stringify(next));}catch{setError(true);}return next;});}return {progress,update,error};}
