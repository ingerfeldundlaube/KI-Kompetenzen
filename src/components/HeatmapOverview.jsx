const labels = { 1: 'Grundlegend', 2: 'Fortgeschritten', 3: 'Vertieft' };
export default function HeatmapOverview({ cards }) {
  return <div className="heatmap">{cards.map((card) => <div key={card.id} className={`heat level-${card.selectedLevel ?? 0}`} title={`${card.id} ${card.titel}`}><b>{card.id}</b><span>{card.titel}</span><em>{labels[card.selectedLevel] ?? 'offen'}</em></div>)}</div>;
}
