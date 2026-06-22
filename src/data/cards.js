export const LEVELS = [
  { key: 'Grundlegend', value: 1, label: 'Grundlegend' },
  { key: 'Fortgeschritten', value: 2, label: 'Fortgeschritten' },
  { key: 'Vertieft', value: 3, label: 'Vertieft' },
];

const bereiche = [
  ['1', 'Suchen, Verarbeiten und Aufbewahren', ['Informationsrecherche mit KI', 'Quellenkritik und Verifikation', 'Datenorganisation und Dokumentation', 'Datenschutzbewusste Recherche']],
  ['2', 'Kommunizieren und Kooperieren', ['KI-gestützte Kommunikation', 'Kollaboration in digitalen Räumen', 'Netiquette und Teilhabe', 'Feedback- und Beratungskultur']],
  ['3', 'Produzieren und Präsentieren', ['Prompting und Inhaltserstellung', 'Multimediale Lernprodukte', 'Urheberrecht und Kennzeichnung', 'Adressatengerechte Präsentation']],
  ['4', 'Schützen und sicher Agieren', ['Datenschutz und Privatsphäre', 'Bias, Fairness und Diskriminierung', 'Sicherheit im Umgang mit KI', 'Gesundheit und Selbstregulation']],
  ['5', 'Problemlösen und Handeln', ['KI-Werkzeuge auswählen', 'Automatisierung reflektieren', 'Fehleranalyse und Iteration']],
  ['6', 'Analysieren und Reflektieren', ['KI-Systeme verstehen', 'Gesellschaftliche Folgen bewerten', 'Lern- und Prüfungskultur weiterentwickeln']],
];

const perspektiven = ['Lernende', 'Lehrkräfte', 'Schul- und Unterrichtsentwicklung', 'Prüfungskultur'];
const stufen = ['Grundlegend', 'Fortgeschritten', 'Vertieft'];

function raster(titel) {
  return Object.fromEntries(perspektiven.map((p) => [p, {
    Grundlegend: `${p} nutzen KI im Feld „${titel}“ punktuell, angeleitet und mit klaren Regeln.`,
    Fortgeschritten: `${p} wählen passende KI-Strategien im Feld „${titel}“ begründet aus und reflektieren Ergebnisse.`,
    Vertieft: `${p} gestalten im Feld „${titel}“ transparente, verantwortliche und transferfähige Praktiken.`
  }]));
}

export const cards = bereiche.flatMap(([nr, kompetenzbereich, titelListe]) => titelListe.map((titel, idx) => {
  const id = `${nr}.${idx + 1}`;
  return {
    id,
    titel,
    kompetenzbereich,
    leitfrage: `Wie entwickeln wir die Kompetenz „${titel}“ im Kontext KI lernwirksam, kritisch und verantwortungsvoll weiter?`,
    kiFokus: `KI unterstützt hier als Werkzeug für Analyse, Entwurf, Rückmeldung und Reflexion; zugleich werden Grenzen, Transparenz und Verantwortung thematisiert.`,
    entwicklungsraster: raster(titel),
    reflexionsfragen: [
      `Welche konkreten Situationen zeigen bereits eine sichere Praxis zu „${titel}“?`,
      'Welche Risiken, Unsicherheiten oder blinden Flecken müssen wir pädagogisch klären?',
      'Welche nächste Vereinbarung ist realistisch, überprüfbar und für Unterricht bzw. Schule wirksam?'
    ],
    notizen: '',
    vereinbarungen: '',
    selectedLevel: null,
  };
}));

export const competenceAreas = bereiche.map(([, name]) => name);
export { perspektiven, stufen };
