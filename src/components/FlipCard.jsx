import { useState } from 'react';

export default function FlipCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  if (!card) {
    return <p>Keine Karte vorhanden.</p>;
  }

  return (
    <article className="flip-card">
      <button
        type="button"
        onClick={() => setFlipped(!flipped)}
      >
        {flipped ? 'Vorderseite anzeigen' : 'Karte wenden'}
      </button>

      {!flipped ? (
        <div className="face front">
          <p>Reflexionskarte {card.id}</p>
          <h2>{card.titel}</h2>
          <p>{card.kompetenzbereich}</p>

          <h3>Kurzbeschreibung</h3>
          <p>{card.kurzbeschreibung}</p>

          <h3>Warum ist das wichtig?</h3>
          <p>{card.warumWichtig}</p>

          <h3>Reflexionsfrage</h3>
          <p>{card.reflexionsfrage}</p>
        </div>
      ) : (
        <div className="face back">
          <p>Reflexionskarte {card.id}</p>
          <h2>{card.titel}</h2>
          <h3>Rückseite</h3>
          <p>Die Rückseite wird im nächsten Schritt ergänzt.</p>
        </div>
      )}
    </article>
  );
}
