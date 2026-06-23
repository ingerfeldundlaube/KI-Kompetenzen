import { useState } from 'react';
import { perspektiven, stufen } from '../data/cards.js';
import LevelSelector from './LevelSelector.jsx';

const perspektivTitel = {
  Lernende: 'Lernende',
  Lehrkräfte: 'Lehrkräfte',
  'Schul- und Unterrichtsentwicklung':
    'Schul- und Unterrichtsentwicklung',
  Prüfungskultur: 'Anschluss an die Prüfungskultur',
};

export default function FlipCard({ card, onUpdate }) {
  const [flipped, setFlipped] = useState(false);

  const reflexionsfragen =
    card.reflexionsfragenNachPerspektive ?? {};

  return (
    <article className={`flip-card ${flipped ? 'is-flipped' : ''}`}>
      <div className="flip-actions">
        <button
          type="button"
          onClick={() => setFlipped((current) => !current)}
        >
          {flipped ? 'Vorderseite anzeigen' : 'Karte wenden'}
        </button>
      </div>

      {!flipped ? (
        <div className="face front">
          <header className="card-header">
            <div>
              <p className="card-number">
                Reflexionskarte {card.id}
              </p>
              <h2>{card.titel}</h2>
            </div>

            <p className="tag">{card.kompetenzbereich}</p>
          </header>

          {card.kurzbeschreibung && (
            <section className="card-section introduction">
              <h3>Kurzbeschreibung</h3>
              <p>{card.kurzbeschreibung}</p>
            </section>
          )}

          {card.warumWichtig && (
            <section className="card-section importance">
              <h3>Warum ist das wichtig?</h3>
              <p>{card.warumWichtig}</p>
            </section>
          )}

          <section className="card-section reflection-focus">
            <h3>Reflexionsfrage</h3>
            <p>{card.reflexionsfrage ?? card.leitfrage}</p>
          </section>

          <section className="card-section">
            <h3>Entwicklungsraster</h3>

            <div className="raster">
              {perspektiven.map((perspektive) => (
                <section
                  key={perspektive}
                  className="perspective-block"
                >
                  <h4>
                    {perspektivTitel[perspektive] ?? perspektive}
                  </h4>

                  {stufen.map((stufe) => (
                    <div
                      key={stufe}
                      className={`raster-cell stage-${stufe.toLowerCase()}`}
                    >
                      <b>{stufe}</b>
                      <p>
                        {card.entwicklungsraster?.[perspektive]?.[
                          stufe
                        ] ?? ''}
                      </p>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </section>

          <section className="card-section location-section">
            <h3>Wo stehen wir?</h3>
            <p>Bitte eine Stufe auswählen.</p>

            <LevelSelector
              value={card.selectedLevel}
              onChange={(selectedLevel) =>
                onUpdate({ selectedLevel })
              }
            />
          </section>

          <div className="card-bottom-actions">
            <button
              type="button"
              onClick={() => setFlipped(true)}
            >
              Rückseite mit Reflexionsfragen anzeigen
            </button>
          </div>
        </div>
      ) : (
        <div className="face back">
          <header className="card-header">
            <div>
              <p className="card-number">
                Reflexionskarte {card.id}
              </p>
              <h2>{card.titel}</h2>
            </div>

            <p className="tag">Rückseite</p>
          </header>

          <section className="card-section">
            <h3>Reflexionsfragen</h3>

            <div className="reflection-grid">
              {Object.entries(reflexionsfragen).map(
                ([perspektive, fragen]) => (
                  <section
                    key={perspektive}
                    className="reflection-block"
                  >
                    <h4>{perspektive}</h4>

                    <ul>
                      {fragen.map((frage) => (
                        <li key={frage}>{frage}</li>
                      ))}
                    </ul>
                  </section>
                ),
              )}
            </div>
          </section>

          {card.entwicklungsimpulse?.length > 0 && (
            <section className="card-section impulses">
              <h3>Entwicklungsimpulse</h3>

              <ul>
                {card.entwicklungsimpulse.map((impuls) => (
                  <li key={impuls}>{impuls}</li>
                ))}
              </ul>
            </section>
          )}

          {card.naechsteSchritte?.length > 0 && (
            <section className="card-section next-steps">
              <h3>Mögliche nächste Schritte</h3>

              <div className="next-steps-grid">
                {card.naechsteSchritte.map((schritt) => (
                  <div
                    key={`${schritt.bereich}-${schritt.text}`}
                    className="next-step"
                  >
                    <strong>{schritt.bereich}</strong>
                    <p>{schritt.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="card-section location-section">
            <h3>Standortbestimmung</h3>
            <p>Bitte eine Stufe auswählen.</p>

            <LevelSelector
              value={card.selectedLevel}
              onChange={(selectedLevel) =>
                onUpdate({ selectedLevel })
              }
            />
          </section>

          <section className="card-section notes-section">
            <label>
              <span>Notizen</span>
              <textarea
                value={card.notizen ?? ''}
                onChange={(event) =>
                  onUpdate({ notizen: event.target.value })
                }
                placeholder="Beobachtungen, Beispiele und offene Fragen"
              />
            </label>

            <label>
              <span>Vereinbarungen</span>
              <textarea
                value={card.vereinbarungen ?? ''}
                onChange={(event) =>
                  onUpdate({
                    vereinbarungen: event.target.value,
                  })
                }
                placeholder="Was wird vereinbart? Wer übernimmt welchen nächsten Schritt?"
              />
            </label>
          </section>

          <div className="card-bottom-actions">
            <button
              type="button"
              onClick={() => setFlipped(false)}
            >
              Zur Vorderseite
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
