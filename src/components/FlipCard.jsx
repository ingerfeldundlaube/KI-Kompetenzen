import { useState } from 'react';
import { perspektiven, stufen } from '../data/cards.js';
import LevelSelector from './LevelSelector.jsx';

export default function FlipCard({ card, onUpdate }) {
  const [flipped, setFlipped] = useState(false);

  if (!card) {
    return <p>Keine Karte verfügbar.</p>;
  }

  return (
    <article className={`flip-card ${flipped ? 'is-flipped' : ''}`}>
      <div className="flip-actions">
        <button
          type="button"
          onClick={() => setFlipped((value) => !value)}
        >
          {flipped ? 'Vorderseite anzeigen' : 'Karte wenden'}
        </button>
      </div>

      {!flipped ? (
        <div className="face front">
          <p className="card-number">Reflexionskarte {card.id}</p>
          <h2>{card.titel}</h2>
          <p className="tag">{card.kompetenzbereich}</p>

          <h3>Kurzbeschreibung</h3>
          <p>{card.kurzbeschreibung}</p>

          <h3>Warum ist das wichtig?</h3>
          <p>{card.warumWichtig}</p>

          <h3>Reflexionsfrage</h3>
          <p>{card.reflexionsfrage}</p>

          <h3>Entwicklungsraster</h3>

          <div className="raster">
            {perspektiven.map((perspektive) => (
              <section key={perspektive}>
                <h4>{perspektive}</h4>

                {stufen.map((stufe) => (
                  <div key={stufe} className="raster-cell">
                    <b>{stufe}</b>
                    <p>
                      {card.entwicklungsraster &&
                      card.entwicklungsraster[perspektive]
                        ? card.entwicklungsraster[perspektive][stufe]
                        : ''}
                    </p>
                  </div>
                ))}
              </section>
            ))}
          </div>

          <h3>Wo stehen wir?</h3>
          <p>Bitte eine Stufe auswählen.</p>

          <LevelSelector
            value={card.selectedLevel}
            onChange={(selectedLevel) =>
              onUpdate({ selectedLevel })
            }
          />
        </div>
      ) : (
        <div className="face back">
          <p className="card-number">Reflexionskarte {card.id}</p>
          <h2>Reflexion: {card.titel}</h2>

          <h3>Reflexionsfragen</h3>

          {card.reflexionsfragenNachPerspektive ? (
            Object.entries(
              card.reflexionsfragenNachPerspektive,
            ).map(([perspektive, fragen]) => (
              <section key={perspektive}>
                <h4>{perspektive}</h4>
                <ul>
                  {Array.isArray(fragen) &&
                    fragen.map((frage) => (
                      <li key={frage}>{frage}</li>
                    ))}
                </ul>
              </section>
            ))
          ) : (
            <p>Keine Reflexionsfragen vorhanden.</p>
          )}

          <h3>Entwicklungsimpulse</h3>
          <ul>
            {(card.entwicklungsimpulse || []).map((impuls) => (
              <li key={impuls}>{impuls}</li>
            ))}
          </ul>

          <h3>Mögliche nächste Schritte</h3>
          {(card.naechsteSchritte || []).map((schritt) => (
            <div key={`${schritt.bereich}-${schritt.text}`}>
              <strong>{schritt.bereich}</strong>
              <p>{schritt.text}</p>
            </div>
          ))}

          <h3>Standortbestimmung</h3>
          <LevelSelector
            value={card.selectedLevel}
            onChange={(selectedLevel) =>
              onUpdate({ selectedLevel })
            }
          />

          <label>
            Notizen
            <textarea
              value={card.notizen || ''}
              onChange={(event) =>
                onUpdate({ notizen: event.target.value })
              }
            />
          </label>

          <label>
            Vereinbarungen
            <textarea
              value={card.vereinbarungen || ''}
              onChange={(event) =>
                onUpdate({
                  vereinbarungen: event.target.value,
                })
              }
            />
          </label>
        </div>
      )}
    </article>
  );
}
