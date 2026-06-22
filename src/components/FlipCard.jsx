import { useState } from 'react';
import { perspektiven, stufen } from '../data/cards.js';
import LevelSelector from './LevelSelector.jsx';

export default function FlipCard({ card, onUpdate }) {
  const [flipped, setFlipped] = useState(false);
  return <article className={`flip-card ${flipped ? 'is-flipped' : ''}`}>
    <div className="flip-actions"><button onClick={() => setFlipped((v) => !v)}>{flipped ? 'Vorderseite anzeigen' : 'Karte wenden'}</button></div>
    {!flipped ? <div className="face front" onClick={() => setFlipped(true)}>
      <p className="card-number">Karte {card.id}</p><h2>{card.titel}</h2><p className="tag">{card.kompetenzbereich}</p>
      <h3>Leitfrage</h3><p>{card.leitfrage}</p><h3>KI-Fokus</h3><p>{card.kiFokus}</p>
      <div className="raster">{perspektiven.map((p) => <section key={p}><h4>{p}</h4>{stufen.map((s) => <div key={s} className="raster-cell"><b>{s}</b><p>{card.entwicklungsraster[p][s]}</p></div>)}</section>)}</div>
    </div> : <div className="face back">
      <p className="card-number">Karte {card.id}</p><h2>Reflexion: {card.titel}</h2>
      <h3>Reflexionsfragen</h3><ul>{card.reflexionsfragen.map((q) => <li key={q}>{q}</li>)}</ul>
      <h3>Standortbestimmung</h3><LevelSelector value={card.selectedLevel} onChange={(selectedLevel) => onUpdate({ selectedLevel })} />
      <label>Notizen<textarea value={card.notizen} onChange={(e) => onUpdate({ notizen: e.target.value })} /></label>
      <label>Vereinbarungen<textarea value={card.vereinbarungen} onChange={(e) => onUpdate({ vereinbarungen: e.target.value })} /></label>
    </div>}
  </article>;
}
