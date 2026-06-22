import { competenceAreas } from '../data/cards.js';
import RadarChart from './RadarChart.jsx';
import HeatmapOverview from './HeatmapOverview.jsx';

export default function ResultsDashboard({ cards }) {
  const assessed = cards.filter((c) => c.selectedLevel);
  const radarData = competenceAreas.map((area) => {
    const areaCards = assessed.filter((c) => c.kompetenzbereich === area);
    const value = areaCards.length ? +(areaCards.reduce((s, c) => s + c.selectedLevel, 0) / areaCards.length).toFixed(2) : 0;
    return { area, value, count: areaCards.length };
  });
  const counts = [1, 2, 3].map((level) => ({ level, count: assessed.filter((c) => c.selectedLevel === level).length }));
  return <section className="results"><div className="section-head"><p className="eyebrow">Auswertung</p><h2>{assessed.length === 0 ? 'Noch keine Standortbestimmung' : assessed.length === 1 ? 'Einzelergebnis' : assessed.length === cards.length ? 'Vollständiges Gesamtprofil' : `Profil aus ${assessed.length} Karten`}</h2></div>
    <div className="result-grid"><div className="panel"><h3>Radarprofil der sechs Kompetenzbereiche</h3><RadarChart data={radarData} /></div><div className="panel"><h3>Entwicklungsübersicht</h3>{counts.map(({ level, count }) => <p key={level} className="count-row"><span className={`dot level-${level}`} />{level === 1 ? 'Grundlegend' : level === 2 ? 'Fortgeschritten' : 'Vertieft'}<b>{count}</b></p>)}</div></div>
    <div className="panel"><h3>Detailprofil aller 22 Unterkompetenzen</h3><HeatmapOverview cards={cards} /></div>
  </section>;
}
