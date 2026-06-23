import { useMemo, useState } from 'react';
import { cards as baseCards } from './data/cards.js';
import CardOverview from './components/CardOverview.jsx';
import CardDetail from './components/CardDetail.jsx';
import ResultsDashboard from './components/ResultsDashboard.jsx';
import ExportButtons from './components/ExportButtons.jsx';

const STORAGE_KEY = 'ki-kompetenzen-reflexionskarten-v1';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {}; } catch { return {}; }
}

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [activeId, setActiveId] = useState(baseCards[0]?.id);

  const cards = useMemo(() => baseCards.map((card) => ({ ...card, ...(progress[card.id] ?? {}) })), [progress]);
  const activeCard = cards.find((card) => card.id === activeId) ?? cards[0];

  function updateCard(id, patch) {
    setProgress((current) => {
      const next = { ...current, [id]: { ...(current[id] ?? {}), ...patch } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function reset() {
    if (!confirm('Alle lokalen Eingaben wirklich löschen?')) return;
    localStorage.removeItem(STORAGE_KEY);
    setProgress({});
  }

return <div className="app-shell">

  <header className="hero">
    <p className="eyebrow">KMK-Unterstützungsangebot: Reflexionsanlässe</p>
    <h1>Kompetenzen in der digitalen Welt im Kontext Künstlicher Intelligenz</h1>
    <p>22 Reflexionskarten zur Standortbestimmung, Reflexion, Vereinbarung gemeinsamer Schritte und Profilbildung</p>
    <ExportButtons cards={cards} onReset={reset} />
  </header>
  <main className="layout">

      <CardOverview cards={cards} activeId={activeCard.id} onSelect={setActiveId} />
      <section className="workspace">
        <CardDetail card={activeCard} onUpdate={(patch) => updateCard(activeCard.id, patch)} />
        <ResultsDashboard cards={cards} />
      </section>
    </main>
  </div>;
}
