import { useState } from 'react';
import { LEVELS } from '../data/cards.js';

export default function FlipCard({ card, onUpdate = () => {} }) {
const [flipped, setFlipped] = useState(false);

if (!card) {
return <p>Keine Karte vorhanden.</p>;
}

return ( <article className="flip-card">
<button
type="button"
onClick={() => setFlipped(!flipped)}
>
{flipped ? 'Vorderseite anzeigen' : 'Karte wenden'} </button>

```
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

      <h3>Entwicklungsraster</h3>

      {Object.entries(card.entwicklungsraster || {}).map(
        ([perspektive, stufen]) => (
          <section key={perspektive}>
            <h4>{perspektive}</h4>

            {Object.entries(stufen || {}).map(
              ([stufe, beschreibung]) => (
                <div key={stufe}>
                  <strong>{stufe}</strong>
                  <p>{beschreibung}</p>
                </div>
              ),
            )}
          </section>
        ),
      )}

      <h3>Wo stehen wir?</h3>
      <p>Bitte eine Stufe auswählen.</p>

      <div>
        {LEVELS.map((level) => (
          <button
            type="button"
            key={level.key}
            onClick={() =>
              onUpdate({ selectedLevel: level.value })
            }
            aria-pressed={
              card.selectedLevel === level.value
            }
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div className="face back">
      <p>Reflexionskarte {card.id}</p>
      <h2>Reflexion: {card.titel}</h2>

      <h3>Reflexionsfragen</h3>

      {Object.entries(
        card.reflexionsfragenNachPerspektive || {},
      ).map(([perspektive, fragen]) => (
        <section key={perspektive}>
          <h4>{perspektive}</h4>
          <ul>
            {(fragen || []).map((frage) => (
              <li key={frage}>{frage}</li>
            ))}
          </ul>
        </section>
      ))}

      <h3>Entwicklungsimpulse</h3>
      <ul>
        {(card.entwicklungsimpulse || []).map(
          (impuls) => (
            <li key={impuls}>{impuls}</li>
          ),
        )}
      </ul>

      <h3>Mögliche nächste Schritte</h3>

      {(card.naechsteSchritte || []).map((schritt) => (
        <section
          key={schritt.bereich + '-' + schritt.text}
        >
          <h4>{schritt.bereich}</h4>
          <p>{schritt.text}</p>
        </section>
      ))}

      <h3>Standortbestimmung</h3>
      <p>Bitte eine Stufe auswählen.</p>

      <div>
        {LEVELS.map((level) => (
          <button
            type="button"
            key={level.key}
            onClick={() =>
              onUpdate({ selectedLevel: level.value })
            }
            aria-pressed={
              card.selectedLevel === level.value
            }
          >
            {level.label}
          </button>
        ))}
      </div>

      <h3>Notizen</h3>
      <textarea
        value={card.notizen || ''}
        onChange={(event) =>
          onUpdate({ notizen: event.target.value })
        }
      />

      <h3>Vereinbarungen</h3>
      <textarea
        value={card.vereinbarungen || ''}
        onChange={(event) =>
          onUpdate({
            vereinbarungen: event.target.value,
          })
        }
      />
    </div>
  )}
</article>
```

);
}
