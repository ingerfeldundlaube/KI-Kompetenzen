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
  <div className="face">
    <img
      src={flipped ? card.backImage : card.frontImage}
      alt={
        (flipped ? 'Rückseite ' : 'Vorderseite ') +
        card.id
      }
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: '18px auto 24px',
        borderRadius: '14px',
        boxShadow:
          '0 6px 18px rgba(35, 63, 77, 0.12)',
      }}
    />

    <h3>Standortbestimmung</h3>
    <p>Bitte eine Stufe auswählen.</p>

    <div className="level-selector">
      {LEVELS.map((level) => (
        <button
          type="button"
          key={level.key}
          className={
            card.selectedLevel === level.value
              ? 'selected'
              : ''
          }
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
</article>
```

);
}
