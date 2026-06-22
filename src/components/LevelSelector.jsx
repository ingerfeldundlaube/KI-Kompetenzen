import { LEVELS } from '../data/cards.js';
export default function LevelSelector({ value, onChange }) {
  return <div className="level-selector" role="radiogroup" aria-label="Standortbestimmung">{LEVELS.map((level) => <button key={level.value} className={value === level.value ? 'selected' : ''} onClick={() => onChange(level.value)}>{level.label}<small>{level.value}</small></button>)}</div>;
}
