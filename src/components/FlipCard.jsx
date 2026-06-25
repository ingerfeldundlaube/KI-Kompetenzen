import { useEffect, useState } from 'react';
import { LEVELS, perspektiven } from '../data/cards.js';
import { reflexionen } from '../data/reflexionen.js';

export default function FlipCard({ card, onUpdate = () => {} }) {
  const [flipped, setFlipped] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setFlipped(false);
    setImageFailed(false);
  }, [card?.id]);

  useEffect(() => {
    setImageFailed(false);
  }, [flipped, card?.frontImage, card?.backImage]);

  if (!card) {
    return <p>Keine Karte vorhanden.</p>;
  }

  const reflexion = reflexionen[card.id];
  const aktivePerspektive = card.ausgewaehltePerspektive || perspektiven[0];
  const perspektivInhalt = reflexion?.perspektiven?.[aktivePerspektive];
  const reflexionsnotizen = card.reflexionsnotizen || {};
  const currentImage = flipped ? card.backImage : card.frontImage;
  const currentSideLabel = flipped ? 'Rückseite' : 'Vorderseite';

  function updateReflexionsnotiz(text) {
    onUpdate({
      reflexionsnotizen: {
        ...reflexionsnotizen,
        [aktivePerspektive]: text,
      },
    });
  }

  return (
    <article className="flip-card">
      <button type="button" onClick={() => setFlipped((current) => !current)}>
        {flipped ? 'Vorderseite anzeigen' : 'Rückseite anzeigen'}
      </button>

      <div className="face">
        <div className="card-image-frame">
          {!imageFailed ? (
            <img
              src={currentImage}
              alt={`${currentSideLabel} ${card.id}: ${card.titel}`}
              className="card-image"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="image-missing" role="status">
              <strong>{currentSideLabel} der Karte {card.id} konnte nicht geladen werden.</strong>
              <span>Erwarteter Pfad: {currentImage}</span>
            </div>
          )}
        </div>

        {!flipped && (
          <>
            <h3>Standortbestimmung</h3>
            <p>Welche Entwicklungsstufe bildet den aktuellen Stand am ehesten ab?</p>

            <div className="level-selector" role="radiogroup" aria-label="Standortbestimmung">
              {LEVELS.map((level) => (
                <button
                  type="button"
                  key={level.key}
                  className={card.selectedLevel === level.value ? 'selected' : ''}
                  onClick={() => onUpdate({ selectedLevel: level.value })}
                  aria-pressed={card.selectedLevel === level.value}
                >
                  {level.label}
                </button>
              ))}
            </div>

            <h3>Begründung der Einschätzung</h3>
            <textarea
              value={card.notizen || ''}
              placeholder="Woran machen Sie diese Einschätzung fest?"
              onChange={(event) => onUpdate({ notizen: event.target.value })}
            />

            <h3>Nächster Entwicklungsschritt</h3>
            <textarea
              value={card.vereinbarungen || ''}
              placeholder="Was soll als Nächstes weiterentwickelt oder vereinbart werden?"
              onChange={(event) => onUpdate({ vereinbarungen: event.target.value })}
            />
          </>
        )}

        {flipped && reflexion && (
          <>
            <h3>Reflexion vertiefen</h3>
            <p className="reflection-question">{reflexion.leitfrage}</p>

            <h4>Ich reflektiere aus Sicht von …</h4>
            <div className="perspective-tabs">
              {perspektiven.map((perspektive) => (
                <button
                  type="button"
                  key={perspektive}
                  className={aktivePerspektive === perspektive ? 'active' : ''}
                  onClick={() => onUpdate({ ausgewaehltePerspektive: perspektive })}
                >
                  {perspektive}
                </button>
              ))}
            </div>

            {perspektivInhalt && (
              <section className="perspective-panel">
                <div className="reflection-level">
                  <strong>Grundlegend</strong>
                  <p>{perspektivInhalt.grundlegend}</p>
                </div>

                <div className="reflection-level">
                  <strong>Fortgeschritten</strong>
                  <p>{perspektivInhalt.fortgeschritten}</p>
                </div>

                <div className="reflection-level">
                  <strong>Vertieft</strong>
                  <p>{perspektivInhalt.vertieft}</p>
                </div>
              </section>
            )}

            <h3>Erkenntnisse aus dieser Perspektive</h3>
            <textarea
              value={reflexionsnotizen[aktivePerspektive] || ''}
              placeholder="Welche Beobachtungen, Beispiele oder Entwicklungsbedarfe werden deutlich?"
              onChange={(event) => updateReflexionsnotiz(event.target.value)}
            />
          </>
        )}

        {flipped && !reflexion && (
          <>
            <h3>Notizen</h3>
            <textarea
              value={card.notizen || ''}
              placeholder="Notizen zur Rückseite"
              onChange={(event) => onUpdate({ notizen: event.target.value })}
            />

            <h3>Vereinbarungen</h3>
            <textarea
              value={card.vereinbarungen || ''}
              placeholder="Vereinbarungen zur Rückseite"
              onChange={(event) => onUpdate({ vereinbarungen: event.target.value })}
            />
          </>
        )}
      </div>
    </article>
  );
}
