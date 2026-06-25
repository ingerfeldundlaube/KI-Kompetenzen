export const LEVELS = [
{ key: 'Grundlegend', value: 1, label: 'Grundlegend' },
{ key: 'Fortgeschritten', value: 2, label: 'Fortgeschritten' },
{ key: 'Vertieft', value: 3, label: 'Vertieft' },
];

export const perspektiven = [
'Lernende',
'Lehrkräfte',
'Schul- und Unterrichtsentwicklung',
'Prüfungskultur',
];

export const stufen = [
'Grundlegend',
'Fortgeschritten',
'Vertieft',
];

function image(filename) {
  return import.meta.env.BASE_URL + 'cards/' + filename;
}



const cardData = [
  
[
'1.1',
'Suchen und Filtern',
'Suchen, Verarbeiten und Aufbewahren',
'card-1-1-front.webp',
'card-1-1-back.webp',
],
[
'1.2',
'Auswerten und Bewerten',
'Suchen, Verarbeiten und Aufbewahren',
'card-1-2-front.webp',
'card-1-2-back.webp',
],
[
'1.3',
'Speichern und Abrufen',
'Suchen, Verarbeiten und Aufbewahren',
'card-1-3-front.webp',
'card-1-3-back.webp',
],
[
'2.1',
'Interagieren',
'Kommunizieren und Kooperieren',
'card-2-1-front.webp',
'card-2-1-back.webp',
],
[
'2.2',
'Teilen',
'Kommunizieren und Kooperieren',
'card-2-2-front.webp',
'card-2-2-back.webp',
],
[
'2.3',
'Zusammenarbeiten',
'Kommunizieren und Kooperieren',
'card-2-3-front.webp',
'card-2-3-back.webp',
],
[
'2.4',
'Umgangsregeln kennen und einhalten',
'Kommunizieren und Kooperieren',
'card-2-4-front.webp',
'card-2-4-back.webp',
],
[
'2.5',
'An der Gesellschaft aktiv teilhaben',
'Kommunizieren und Kooperieren',
'card-2-5-front.webp',
'card-2-5-back.webp',
],
[
'3.1',
'Entwickeln und Produzieren',
'Produzieren und Präsentieren',
'card-3-1-front.webp',
'card-3-1-back.webp',
],
[
'3.2',
'Weiterverarbeiten und Integrieren',
'Produzieren und Präsentieren',
'card-3-2-front.webp',
'card-3-2-back.webp',
],
[
'3.3',
'Rechtliche Vorgaben beachten',
'Produzieren und Präsentieren',
'card-3-3-front.webp',
'card-3-3-back.webp',
],
[
'4.1',
'Sicher in digitalen Umgebungen agieren',
'Schützen und sicher Agieren',
'card-4-1-front.webp',
'card-4-1-back.webp',
],
[
'4.2',
'Persönliche Daten und Privatsphäre schützen',
'Schützen und sicher Agieren',
'card-4-2-front.webp',
'card-4-2-back.webp',
],
[
'4.3',
'Selbstregulation und soziale Kompetenzen entwickeln',
'Schützen und sicher Agieren',
'card-4-3-front.webp',
'card-4-3-back.webp',
],
[
'4.4',
'Natur und Umwelt schützen',
'Schützen und sicher Agieren',
'card-4-4-front.webp',
'card-4-4-back.webp',
],
[
'5.1',
'Technische Probleme lösen',
'Problemlösen und Handeln',
'card-5-1-front.webp',
'card-5-1-back.webp',
],
[
'5.2',
'Werkzeuge bedarfsgerecht einsetzen',
'Problemlösen und Handeln',
'card-5-2-front.webp',
'card-5-2-back.webp',
],
[
'5.3',
'Eigene Defizite ermitteln und nach Lösungen suchen',
'Problemlösen und Handeln',
'card-5-3-front.webp',
'card-5-3-back.webp',
],
[
'5.4',
'Digitale Werkzeuge und Medien zum Lernen, Arbeiten und Problemlösen nutzen',
'Problemlösen und Handeln',
'card-5-4-front.webp',
'card-5-4-back.webp',
],
[
'5.5',
'Algorithmen erkennen und formulieren',
'Problemlösen und Handeln',
'card-5-5-front.webp',
'card-5-5-back.webp',
],
[
'6.1',
'Medien analysieren und bewerten',
'Analysieren und Reflektieren',
'card-6-1-front.webp',
'card-6-1-back.webp',
],
[
'6.2',
'Medien in der digitalen Welt verstehen und reflektieren',
'Analysieren und Reflektieren',
'card-6-2-front.webp',
'card-6-2-back.webp',
],
];

export const cards = cardData.map(
([id, titel, kompetenzbereich, front, back]) => ({
id,
titel,
kompetenzbereich,
kompetenzbereichNummer: id.split('.')[0],
frontImage: image(front),
backImage: image(back),
notizen: '',
vereinbarungen: '',
selectedLevel: null,
}),
);

export const competenceAreas = [
'Suchen, Verarbeiten und Aufbewahren',
'Kommunizieren und Kooperieren',
'Produzieren und Präsentieren',
'Schützen und sicher Agieren',
'Problemlösen und Handeln',
'Analysieren und Reflektieren',
];
