import { competenceAreas } from '../data/cards.js';

const labels = { 1: 'Grundlegend', 2: 'Fortgeschritten', 3: 'Vertieft' };
export default function CardOverview({ cards, activeId, onSelect }) {
  return <aside className="overview"><h2>Übersicht</h2>{competenceAreas.map((area) => <section key={area} className="area-group">
    <h3>{area}</h3>{cards.filter((c) => c.kompetenzbereich === area).map((card) => <button key={card.id} onClick={() => onSelect(card.id)} className={`card-link ${activeId === card.id ? 'active' : ''}`}>
      <span><b>{card.id}</b> {card.titel}</span><em className={`status level-${card.selectedLevel ?? 0}`}>{labels[card.selectedLevel] ?? 'nicht bearbeitet'}</em>
    </button>)}</section>)}</aside>;
}
