"use client";
import { useState } from "react";

export function Tools(){
  const [prescribed,setPrescribed]=useState("");
  const [available,setAvailable]=useState("");
  const [volume,setVolume]=useState("");
  const [ivVolume,setIvVolume]=useState("");
  const [hours,setHours]=useState("");
  const [factor,setFactor]=useState("20");
  const dose=Number(available)>0?Number(prescribed)/Number(available)*Number(volume):0;
  const mlh=Number(hours)>0?Number(ivVolume)/Number(hours):0;
  const drops=Number(hours)>0?Number(ivVolume)*Number(factor)/(Number(hours)*60):0;

  return <div className="tools-view">
    <div className="page-head">
      <span className="eyebrow">ENFERMAGEM DE BOLSO</span>
      <h1>Ferramentas</h1>
      <p>Calculadoras educacionais e referências rápidas para treino. Confira unidades, prescrição e protocolo em situação real.</p>
    </div>

    <div className="tool-grid">
      <Calc title="Cálculo de dose" formula="(prescrita ÷ disponível) × volume">
        <Field label="Dose prescrita" value={prescribed} set={setPrescribed}/>
        <Field label="Dose disponível" value={available} set={setAvailable}/>
        <Field label="Volume disponível (mL)" value={volume} set={setVolume}/>
        <Result value={dose} unit="mL"/>
      </Calc>
      <Calc title="Velocidade de infusão" formula="volume ÷ tempo">
        <Field label="Volume (mL)" value={ivVolume} set={setIvVolume}/>
        <Field label="Tempo (horas)" value={hours} set={setHours}/>
        <Result value={mlh} unit="mL/h"/>
      </Calc>
      <Calc title="Gotejamento" formula="(mL × fator) ÷ minutos">
        <Field label="Volume (mL)" value={ivVolume} set={setIvVolume}/>
        <Field label="Tempo (horas)" value={hours} set={setHours}/>
        <label>Fator do equipo
          <select value={factor} onChange={e=>setFactor(e.target.value)}>
            <option value="20">20 gotas/mL</option>
            <option value="60">60 microgotas/mL</option>
          </select>
        </label>
        <Result value={drops} unit="gotas/min"/>
      </Calc>
    </div>

    <div className="reference-grid">
      <Reference title="ABCDE" items={["A — Via aérea","B — Respiração","C — Circulação","D — Neurológico","E — Exposição/ambiente"]}/>
      <Reference title="SBAR" items={["S — Situação","B — Background/contexto","A — Avaliação","R — Recomendação"]}/>
      <Reference title="9 certos" items={["Paciente","Medicamento","Dose","Via","Hora","Registro","Ação","Forma","Resposta"]}/>
    </div>

    <div className="safety">As calculadoras são para estudo. Não use o resultado como substituto de prescrição, conferência independente, regra de arredondamento ou protocolo institucional.</div>
  </div>;
}

function Calc({title,formula,children}:any){return <article className="calc"><span className="eyebrow">CALCULADORA</span><h3>{title}</h3><small>{formula}</small><div className="calc-fields">{children}</div></article>}
function Field({label,value,set}:any){return <label>{label}<input type="number" min="0" step="any" value={value} onChange={e=>set(e.target.value)} placeholder="0"/></label>}
function Result({value,unit}:{value:number;unit:string}){return <div className="calc-result"><span>Resultado</span><strong>{Number.isFinite(value)&&value>0?value.toFixed(2):"—"} <small>{unit}</small></strong></div>}
function Reference({title,items}:{title:string;items:string[]}){return <article className="reference"><h3>{title}</h3>{items.map(i=><p key={i}>✓ {i}</p>)}</article>}
