export default function ExportButtons({ cards, onReset }) {
  function exportJson() {
    const payload = { exportedAt: new Date().toISOString(), cards: cards.filter((c) => c.selectedLevel || c.notizen || c.vereinbarungen) };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = 'ki-kompetenzen-ergebnisse.json'; a.click(); URL.revokeObjectURL(url);
  }
  return <div className="export-buttons"><button onClick={exportJson}>JSON exportieren</button><button onClick={() => window.print()}>PDF/Bericht drucken</button><button className="ghost" onClick={onReset}>Reset</button></div>;
}
