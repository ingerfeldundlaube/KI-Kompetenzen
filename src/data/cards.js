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

const images = import.meta.glob('../../*.png', {
eager: true,
query: '?url',
import: 'default',
});

function image(filename) {
return images['../../' + filename];
}

const cardData = [
[
'1.1',
'Suchen und Filtern',
'Suchen, Verarbeiten und Aufbewahren',
'Reflexionskarte 1.1 Vorderseite(1).png',
'Reflexionskarte 1.1 Rückseite(1).png',
],
[
'1.2',
'Auswerten und Bewerten',
'Suchen, Verarbeiten und Aufbewahren',
'Reflexionskarte 1.2 Vorderseite(1).png',
'Reflexionskarte 1.2 Rückseite(1).png',
],
[
'1.3',
'Speichern und Abrufen',
'Suchen, Verarbeiten und Aufbewahren',
'Reflexionskarte 1.3 Vorderseite(1).png',
'Reflexionskarte 1.3 Rückseite.png',
],
[
'2.1',
'Interagieren',
'Kommunizieren und Kooperieren',
'Reflexionskarte 2.1 Voderseite(1).png',
'Reflexionskarte 2.1 Rückseite.png',
],
[
'2.2',
'Teilen',
'Kommunizieren und Kooperieren',
'Reflexionskarte 2.2 Vorderseite(2).png',
'Reflexionskarte 2.2 Rückseite(3).png',
],
[
'2.3',
'Zusammenarbeiten',
'Kommunizieren und Kooperieren',
'Reflexionskarte 2.3 Vorderseite.png',
'Reflexionskarte 2.3 Rückseite.png',
],
[
'2.4',
'Umgangsregeln kennen und einhalten',
'Kommunizieren und Kooperieren',
'Reflexionskarte 2.4 Vorderseite.png',
'Reflexionskarte 2.4 Rückseite.png',
],
[
'2.5',
'An der Gesellschaft aktiv teilhaben',
'Kommunizieren und Kooperieren',
'Reflexionskarte 2.5 Vorderseite.png',
'Reflexionskarte 2.5 Rückseite(1).png',
],
[
'3.1',
'Entwickeln und Produzieren',
'Produzieren und Präsentieren',
'Reflexionskarte 3.1 Vorderseite.png',
'Reflexionskarte 3.1 Rückseite.png',
],
[
'3.2',
'Weiterverarbeiten und Integrieren',
'Produzieren und Präsentieren',
'Reflexionskarte 3.2 Vorderseite.png',
'Reflexionskarte 3.2 Rückseite.png',
],
[
'3.3',
'Rechtliche Vorgaben beachten',
'Produzieren und Präsentieren',
'Reflexionskarte 3.3 Vorderseite.png',
'Reflexionskarte 3.3 Rückseite.png',
],
[
'4.1',
'Sicher in digitalen Umgebungen agieren',
'Schützen und sicher Agieren',
'Reflexionskarte 4.1 Vorderseite.png',
'Reflexionskarte 4.1 Rückseite.png',
],
[
'4.2',
'Persönliche Daten und Privatsphäre schützen',
'Schützen und sicher Agieren',
'Reflexionskarte 4.2 Vorderseite.png',
'Reflexionskarte 4.2 Rückseite.png',
],
[
'4.3',
'Selbstregulation und soziale Kompetenzen entwickeln',
'Schützen und sicher Agieren',
'Reflexionskarte 4.3 Vorderseite.png',
'Reflexionskarte 4.3 Rückseite.png',
],
[
'4.4',
'Natur und Umwelt schützen',
'Schützen und sicher Agieren',
'Reflexionskarte 4.4 Vorderseite.png',
'Reflexionskarte 4.4 Rückseite.png',
],
[
'5.1',
'Technische Probleme lösen',
'Problemlösen und Handeln',
'Reflexionskarte 5.1 Vorderseite.png',
'Reflexionskarte 5.1 Rückseite.png',
],
[
'5.2',
'Werkzeuge bedarfsgerecht einsetzen',
'Problemlösen und Handeln',
'Reflexionskarte 5.2 Vorderseite.png',
'Reflexionskarte 5.2 Rückseite.png',
],
[
'5.3',
'Eigene Defizite ermitteln und nach Lösungen suchen',
'Problemlösen und Handeln',
'Reflexionskarte 5.3 Vorderseite.png',
'Reflexionskarte 5.3 Rückseite.png',
],
[
'5.4',
'Digitale Werkzeuge und Medien zum Lernen, Arbeiten und Problemlösen nutzen',
'Problemlösen und Handeln',
'Reflexionskarte 5.4 Vorderseite.png',
'Reflexionskarte 5.4 Rückseite.png',
],
[
'5.5',
'Algorithmen erkennen und formulieren',
'Problemlösen und Handeln',
'Reflexionskarte 5.5 Vorderseite.png',
'Reflexionskarte 5.5 Rückseite.png',
],
[
'6.1',
'Medien analysieren und bewerten',
'Analysieren und Reflektieren',
'Reflexionskarte 6.1 Vorderseite.png',
'Reflexionskarte 6.1 Rückseite.png',
],
[
'6.2',
'Medien in der digitalen Welt verstehen und reflektieren',
'Analysieren und Reflektieren',
'Reflexionskarte 6.2 Vorderseite.png',
'Reflexionskarte 6.2 Rückseite.png',
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
