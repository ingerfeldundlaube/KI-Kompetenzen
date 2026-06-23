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

export const cards = [
{
id: '1.1',
titel: 'Suchen und Filtern',
kompetenzbereich: 'Suchen, Verarbeiten und Aufbewahren',
kompetenzbereichNummer: '1',

```
kurzbeschreibung:
  'Schülerinnen und Schüler klären ihren Informationsbedarf, entwickeln und verfeinern Suchstrategien und nutzen geeignete Quellen und KI-Anwendungen, um relevante Informationen zu finden.',

warumWichtig:
  'KI kann Suchprozesse unterstützen und beschleunigen. Gleichzeitig verändert sich die Recherche: Gute Ergebnisse hängen zunehmend davon ab, Suchanliegen präzise zu formulieren, Quellen gezielt einzubeziehen und Ergebnisse kritisch einzuordnen.',

reflexionsfrage:
  'Wie nutzen Lernende KI, um Informationsbedarfe zu klären, Suchwege zu planen und Ergebnisse gezielt einzugrenzen?',

leitfrage:
  'Wie nutzen Lernende KI, um Informationsbedarfe zu klären, Suchwege zu planen und Ergebnisse gezielt einzugrenzen?',

kiFokus:
  'KI kann Suchprozesse unterstützen und beschleunigen. Gleichzeitig verändert sich die Recherche: Gute Ergebnisse hängen zunehmend davon ab, Suchanliegen präzise zu formulieren, Quellen gezielt einzubeziehen und Ergebnisse kritisch einzuordnen.',

entwicklungsraster: {
  Lernende: {
    Grundlegend:
      'Lernende formulieren einfache Suchanfragen und nutzen KI-Anwendungen punktuell zur Informationssuche.',

    Fortgeschritten:
      'Lernende verfeinern Suchanfragen und vergleichen Ergebnisse aus KI-Anwendungen mit weiteren Quellen.',

    Vertieft:
      'Lernende planen Suchstrategien systematisch, dokumentieren ihr Vorgehen und begründen die Auswahl von Quellen und KI-Anwendungen.',
  },

  Lehrkräfte: {
    Grundlegend:
      'Lehrkräfte setzen KI-Anwendungen punktuell zur Unterstützung von Rechercheaufgaben ein.',

    Fortgeschritten:
      'Lehrkräfte gestalten Aufgaben, in denen Lernende Suchanfragen variieren, Ergebnisse vergleichen und Suchwege reflektieren.',

    Vertieft:
      'Lehrkräfte verankern systematische Rechercheprozesse mit KI und anderen Quellen in Unterrichtsvorhaben und machen Suchstrategien transparent.',
  },

  'Schul- und Unterrichtsentwicklung': {
    Grundlegend:
      'Einzelne Lehrkräfte erproben KI-gestützte Recherche.',

    Fortgeschritten:
      'Fachschaften entwickeln gemeinsame Kriterien und Aufgabenformate für KI-gestützte Recherche.',

    Vertieft:
      'Die Schule verfügt über abgestimmte Standards und schulweite Vereinbarungen zur Recherche mit KI und anderen Quellen.',
  },

  Prüfungskultur: {
    Grundlegend:
      'Rechercheleistungen werden punktuell in Aufgaben einbezogen.',

    Fortgeschritten:
      'Suchwege, Quellenwahl und Begründungen werden als Teil der Leistung sichtbar gemacht.',

    Vertieft:
      'Prüfungsformate bewerten Rechercheprozesse, Quellenkritik und den reflektierten Einsatz von KI systematisch.',
  },
},

reflexionsfragenNachPerspektive: {
  Lernende: [
    'Wie formulieren Lernende Suchanliegen und Suchanfragen?',
    'Wie gehen sie mit unklaren, widersprüchlichen oder zu umfangreichen Ergebnissen um?',
    'Wie prüfen sie, ob gefundene Informationen relevant und verlässlich sind?',
  ],

  Lehrkräfte: [
    'Welche Rechercheaufgaben setzen wir bereits ein?',
    'Wie unterstützen wir Lernende dabei, Suchanfragen zu präzisieren und Ergebnisse einzugrenzen?',
    'Wie machen wir Suchwege, Auswahlentscheidungen und Quellen sichtbar?',
  ],

  'Schul- und Unterrichtsentwicklung': [
    'Welche gemeinsamen Standards für Recherche und Quellenarbeit bestehen bereits?',
    'Wo gibt es fachübergreifende Anknüpfungspunkte?',
    'Welche Vereinbarungen zur KI-gestützten Recherche brauchen wir?',
  ],

  'Anschluss an die Prüfungskultur': [
    'Welche Rechercheleistungen sollen in Prüfungen sichtbar werden?',
    'Wie können Suchwege, Quellenwahl und Reflexion angemessen dokumentiert und bewertet werden?',
    'Welche Prüfungsformate eignen sich für offene Rechercheprozesse?',
  ],
},

reflexionsfragen: [
  'Wie formulieren Lernende Suchanliegen und Suchanfragen?',
  'Wie gehen sie mit unklaren, widersprüchlichen oder zu umfangreichen Ergebnissen um?',
  'Wie prüfen sie, ob gefundene Informationen relevant und verlässlich sind?',
  'Welche Rechercheaufgaben setzen wir bereits ein?',
  'Wie unterstützen wir Lernende dabei, Suchanfragen zu präzisieren und Ergebnisse einzugrenzen?',
  'Wie machen wir Suchwege, Auswahlentscheidungen und Quellen sichtbar?',
  'Welche gemeinsamen Standards für Recherche und Quellenarbeit bestehen bereits?',
  'Wo gibt es fachübergreifende Anknüpfungspunkte?',
  'Welche Vereinbarungen zur KI-gestützten Recherche brauchen wir?',
  'Welche Rechercheleistungen sollen in Prüfungen sichtbar werden?',
  'Wie können Suchwege, Quellenwahl und Reflexion angemessen dokumentiert und bewertet werden?',
  'Welche Prüfungsformate eignen sich für offene Rechercheprozesse?',
],

entwicklungsimpulse: [
  'Suchprozesse mit KI verändern die Rolle klassischer Internetrecherche.',
  'Nicht das erste Ergebnis, sondern der nachvollziehbare Suchweg wird zentral.',
  'Gute Recherche verbindet KI-Anwendungen, Suchmaschinen, Fachquellen und eigenes Vorwissen.',
  'Suchkompetenz umfasst auch das Begrenzen, Verwerfen und Nachsteuern von Suchprozessen.',
],

naechsteSchritte: [
  {
    bereich: 'Fachschaft',
    text: 'Gemeinsame Kriterien für gute Suchanfragen und Quellenwahl entwickeln.',
  },
  {
    bereich: 'Unterricht',
    text: 'Rechercheaufgaben mit dokumentierten Suchwegen erproben.',
  },
  {
    bereich: 'Kollegium',
    text: 'Beispiele für gute und problematische KI-Suchergebnisse sammeln.',
  },
  {
    bereich: 'Prüfungskultur',
    text: 'Ein Aufgabenformat entwickeln, das Suchprozess und Quellenbegründung sichtbar macht.',
  },
  {
    bereich: 'Schulentwicklung',
    text: 'Mindeststandards für KI-gestützte Recherche vereinbaren.',
  },
],

notizen: '',
vereinbarungen: '',
selectedLevel: null,
```

},

{
id: '1.2',
titel: 'Auswerten und Bewerten',
kompetenzbereich: 'Suchen, Verarbeiten und Aufbewahren',
kompetenzbereichNummer: '1',

```
kurzbeschreibung:
  'Informationen und Daten analysieren, interpretieren und kritisch bewerten, einschließlich der reflektierten Einordnung KI-generierter Ergebnisse sowie möglicher Verzerrungen. Informationsquellen auch im Abgleich mit Primärquellen analysieren und kritisch bewerten.',

warumWichtig:
  'KI-Antworten kritisch einordnen: Fakten prüfen, Quellen vergleichen, Verzerrungen erkennen und fachliche Kriterien anwenden. Die Kompetenz hilft, KI-Unterstützung fachlich sinnvoll, transparent und verantwortungsvoll in Lern- und Arbeitsprozesse einzubinden.',

reflexionsfrage:
  'Wie prüfen Lernende KI-generierte Informationen auf Qualität, Plausibilität, Perspektivität und Quellenbezug?',

leitfrage:
  'Wie prüfen Lernende KI-generierte Informationen auf Qualität, Plausibilität, Perspektivität und Quellenbezug?',

kiFokus:
  'KI-Antworten kritisch einordnen: Fakten prüfen, Quellen vergleichen, Verzerrungen erkennen und fachliche Kriterien anwenden.',

entwicklungsraster: {
  Lernende: {
    Grundlegend:
      'Lernende erkennen, dass KI-Antworten fehlerhaft oder unvollständig sein können.',

    Fortgeschritten:
      'Lernende prüfen Aussagen mit mindestens einer verlässlichen Quelle und nutzen fachliche Kriterien, um KI-Antworten zu bewerten und zu überarbeiten.',

    Vertieft:
      'Lernende analysieren Bias, Perspektiven, Quellenlage und Unsicherheiten systematisch.',
  },

  Lehrkräfte: {
    Grundlegend:
      'Lehrkräfte weisen auf Halluzinationen und fehlende Quellenprüfung hin.',

    Fortgeschritten:
      'Lehrkräfte geben Prüffragen und einfache Kriterienraster vor und integrieren Quellenkritik, Faktencheck und fachliche Begründung in Aufgaben.',

    Vertieft:
      'Lehrkräfte lassen Qualitätsurteile transparent begründen und mit Fachstandards verbinden.',
  },

  'Schul- und Unterrichtsentwicklung': {
    Grundlegend:
      'Die Schule stellt Basishinweise zur kritischen KI-Nutzung bereit.',

    Fortgeschritten:
      'Die Schule entwickelt gemeinsame Kriterien für Quellenprüfung und Plausibilitätscheck und bindet KI-bezogene Informationsbewertung in Medienkonzept und Fachcurricula ein.',

    Vertieft:
      'Die Schule etabliert schulweite Routinen für Faktencheck, Bias-Reflexion und Quellenarbeit.',
  },

  Prüfungskultur: {
    Grundlegend:
      'Prüfungen vermeiden die reine Reproduktion ungeprüfter KI-Antworten.',

    Fortgeschritten:
      'Prüfungen fordern Quellenangaben und kurze Reflexion zur KI-Nutzung ein und bewerten die kritische Prüfung, Auswahl und Überarbeitung von KI-Ergebnissen.',

    Vertieft:
      'Prüfungen werden so gestaltet, dass Urteilskraft und Begründungsfähigkeit sichtbar werden.',
  },
},

reflexionsfragenNachPerspektive: {
  Lernende: [
    'Was gelingt bereits beim Erkennen fehlerhafter oder unvollständiger KI-Antworten?',
    'Woran wird sichtbar, dass Aussagen mit verlässlichen Quellen geprüft werden?',
    'Welche Vereinbarung unterstützt die systematische Analyse von Bias, Perspektiven, Quellenlage und Unsicherheiten?',
  ],

  Lehrkräfte: [
    'Was gelingt bereits beim Thematisieren von Halluzinationen und fehlender Quellenprüfung?',
    'Woran wird sichtbar, dass Prüffragen und Kriterienraster eingesetzt werden?',
    'Welche Vereinbarung unterstützt transparente Qualitätsurteile auf Grundlage von Fachstandards?',
  ],

  'Schul- und Unterrichtsentwicklung': [
    'Welche Basishinweise zur kritischen KI-Nutzung bestehen bereits?',
    'Woran wird sichtbar, dass gemeinsame Kriterien für Quellenprüfung und Plausibilitätscheck entwickelt werden?',
    'Welche Vereinbarung unterstützt schulweite Routinen für Faktencheck, Bias-Reflexion und Quellenarbeit?',
  ],

  'Anschluss an die Prüfungskultur': [
    'Wie vermeiden wir die reine Reproduktion ungeprüfter KI-Antworten?',
    'Wie werden Quellenangaben und die Reflexion zur KI-Nutzung sichtbar?',
    'Welche Prüfungsformate machen Urteilskraft und Begründungsfähigkeit sichtbar?',
  ],
},

reflexionsfragen: [
  'Was gelingt bereits beim Erkennen fehlerhafter oder unvollständiger KI-Antworten?',
  'Woran wird sichtbar, dass Aussagen mit verlässlichen Quellen geprüft werden?',
  'Welche Vereinbarung unterstützt die systematische Analyse von Bias, Perspektiven, Quellenlage und Unsicherheiten?',
  'Was gelingt bereits beim Thematisieren von Halluzinationen und fehlender Quellenprüfung?',
  'Woran wird sichtbar, dass Prüffragen und Kriterienraster eingesetzt werden?',
  'Welche Vereinbarung unterstützt transparente Qualitätsurteile auf Grundlage von Fachstandards?',
  'Welche Basishinweise zur kritischen KI-Nutzung bestehen bereits?',
  'Woran wird sichtbar, dass gemeinsame Kriterien für Quellenprüfung und Plausibilitätscheck entwickelt werden?',
  'Welche Vereinbarung unterstützt schulweite Routinen für Faktencheck, Bias-Reflexion und Quellenarbeit?',
  'Wie vermeiden wir die reine Reproduktion ungeprüfter KI-Antworten?',
  'Wie werden Quellenangaben und die Reflexion zur KI-Nutzung sichtbar?',
  'Welche Prüfungsformate machen Urteilskraft und Begründungsfähigkeit sichtbar?',
],

entwicklungsimpulse: [
  'Prüffragen und einfache Kriterienraster vorgeben.',
  'Quellenkritik, Faktencheck und fachliche Begründung in Aufgaben integrieren.',
  'Qualitätsurteile transparent begründen und mit Fachstandards verbinden.',
  'Gemeinsame Kriterien für Quellenprüfung und Plausibilitätscheck entwickeln.',
  'KI-bezogene Informationsbewertung in Medienkonzept und Fachcurricula einbinden.',
  'Schulweite Routinen für Faktencheck, Bias-Reflexion und Quellenarbeit etablieren.',
],

naechsteSchritte: [
  {
    bereich: 'Lernende',
    text: 'Aussagen mit mindestens einer verlässlichen Quelle prüfen.',
  },
  {
    bereich: 'Lernende',
    text: 'Fachliche Kriterien nutzen, um KI-Antworten zu bewerten und zu überarbeiten.',
  },
  {
    bereich: 'Lehrkräfte',
    text: 'Prüffragen und einfache Kriterienraster vorgeben.',
  },
  {
    bereich: 'Unterricht',
    text: 'Quellenkritik, Faktencheck und fachliche Begründung in Aufgaben integrieren.',
  },
  {
    bereich: 'Schulentwicklung',
    text: 'Gemeinsame Kriterien für Quellenprüfung und Plausibilitätscheck entwickeln.',
  },
  {
    bereich: 'Prüfungskultur',
    text: 'Quellenangaben und eine kurze Reflexion zur KI-Nutzung einfordern.',
  },
],

notizen: '',
vereinbarungen: '',
selectedLevel: null,
```

},

{
id: '1.3',
titel: 'Speichern und Abrufen',
kompetenzbereich: 'Suchen, Verarbeiten und Aufbewahren',
kompetenzbereichNummer: '1',

```
kurzbeschreibung:
  'Informationen und Daten sicher und ethisch verantwortet speichern, wiederfinden und von verschiedenen Orten abrufen, Informationen und Daten zusammenfassen, organisieren und strukturiert aufbewahren sowie Versionsverwaltungspraxis beherrschen.',

warumWichtig:
  'KI-Arbeit dokumentieren: Prompts, Quellen, Versionen, Entscheidungen und Ergebnisse so sichern, dass Lernen und Bewertung nachvollziehbar bleiben. Die Kompetenz hilft, KI-Unterstützung fachlich sinnvoll, transparent und verantwortungsvoll in Lern- und Arbeitsprozesse einzubinden.',

reflexionsfrage:
  'Wie organisieren Lernende KI-gestützte Arbeitsprozesse, Quellen, Prompts und Ergebnisse nachvollziehbar?',

leitfrage:
  'Wie organisieren Lernende KI-gestützte Arbeitsprozesse, Quellen, Prompts und Ergebnisse nachvollziehbar?',

kiFokus:
  'KI-Arbeit dokumentieren: Prompts, Quellen, Versionen, Entscheidungen und Ergebnisse so sichern, dass Lernen und Bewertung nachvollziehbar bleiben.',

entwicklungsraster: {
  Lernende: {
    Grundlegend:
      'Lernende speichern Ergebnisse und genutzte Materialien geordnet ab.',

    Fortgeschritten:
      'Lernende halten verwendete Prompts, Quellen und KI-Hilfen einfach fest und strukturieren Arbeitsstände mit Versionen, Notizen und Begründungen.',

    Vertieft:
      'Lernende führen ein nachvollziehbares Lern- oder Prozessportfolio zur KI-Nutzung.',
  },

  Lehrkräfte: {
    Grundlegend:
      'Lehrkräfte geben einfache Ablage- und Dokumentationsformen vor.',

    Fortgeschritten:
      'Lehrkräfte nutzen Vorlagen für Prompt-, Quellen- und Prozessnotizen und lassen Arbeitsprozesse regelmäßig sichern und reflektieren.',

    Vertieft:
      'Lehrkräfte etablieren Portfolioarbeit zur Verbindung von Produkt, Prozess und Reflexion.',
  },

  'Schul- und Unterrichtsentwicklung': {
    Grundlegend:
      'Die Schule klärt Grundsätze zu Dateiablage, Datenschutz und Dokumentation.',

    Fortgeschritten:
      'Die Schule stellt Vorlagen für KI-Nutzungsnachweise bereit und verankert Prozessdokumentation in Unterrichtsvorhaben und Lernplattformen.',

    Vertieft:
      'Die Schule entwickelt schulweite Standards für transparente digitale Arbeitsprozesse.',
  },

  Prüfungskultur: {
    Grundlegend:
      'Bei KI-Nutzung wird ein einfacher Nutzungsnachweis eingefordert.',

    Fortgeschritten:
      'Arbeitsstände und Quellenübersichten werden bei der Bewertung berücksichtigt; Prozessqualität, Überarbeitung und Nachvollziehbarkeit werden bewertet.',

    Vertieft:
      'Portfolios und Kolloquien werden zur Absicherung eigenständiger Leistung genutzt.',
  },
},

reflexionsfragenNachPerspektive: {
  Lernende: [
    'Was gelingt bereits beim geordneten Speichern von Ergebnissen und genutzten Materialien?',
    'Woran wird sichtbar, dass verwendete Prompts, Quellen und KI-Hilfen festgehalten werden?',
    'Welche Vereinbarung unterstützt ein nachvollziehbares Lern- oder Prozessportfolio zur KI-Nutzung?',
  ],

  Lehrkräfte: [
    'Welche einfachen Ablage- und Dokumentationsformen werden bereits vorgegeben?',
    'Woran wird sichtbar, dass Vorlagen für Prompt-, Quellen- und Prozessnotizen genutzt werden?',
    'Welche Vereinbarung unterstützt Portfolioarbeit zur Verbindung von Produkt, Prozess und Reflexion?',
  ],

  'Schul- und Unterrichtsentwicklung': [
    'Welche Grundsätze zu Dateiablage, Datenschutz und Dokumentation bestehen bereits?',
    'Woran wird sichtbar, dass Vorlagen für KI-Nutzungsnachweise bereitgestellt werden?',
    'Welche Vereinbarung unterstützt schulweite Standards für transparente digitale Arbeitsprozesse?',
  ],

  'Anschluss an die Prüfungskultur': [
    'Wie wird bei KI-Nutzung ein einfacher Nutzungsnachweis eingefordert?',
    'Wie werden Arbeitsstände und Quellenübersichten bei der Bewertung berücksichtigt?',
    'Welche Vereinbarung unterstützt Portfolios und Kolloquien zur Absicherung eigenständiger Leistung?',
  ],
},

reflexionsfragen: [
  'Was gelingt bereits beim geordneten Speichern von Ergebnissen und genutzten Materialien?',
  'Woran wird sichtbar, dass verwendete Prompts, Quellen und KI-Hilfen festgehalten werden?',
  'Welche Vereinbarung unterstützt ein nachvollziehbares Lern- oder Prozessportfolio zur KI-Nutzung?',
  'Welche einfachen Ablage- und Dokumentationsformen werden bereits vorgegeben?',
  'Woran wird sichtbar, dass Vorlagen für Prompt-, Quellen- und Prozessnotizen genutzt werden?',
  'Welche Vereinbarung unterstützt Portfolioarbeit zur Verbindung von Produkt, Prozess und Reflexion?',
  'Welche Grundsätze zu Dateiablage, Datenschutz und Dokumentation bestehen bereits?',
  'Woran wird sichtbar, dass Vorlagen für KI-Nutzungsnachweise bereitgestellt werden?',
  'Welche Vereinbarung unterstützt schulweite Standards für transparente digitale Arbeitsprozesse?',
  'Wie wird bei KI-Nutzung ein einfacher Nutzungsnachweis eingefordert?',
  'Wie werden Arbeitsstände und Quellenübersichten bei der Bewertung berücksichtigt?',
  'Welche Vereinbarung unterstützt Portfolios und Kolloquien zur Absicherung eigenständiger Leistung?',
],

entwicklungsimpulse: [
  'Vorlagen für Prompt-, Quellen- und Prozessnotizen nutzen.',
  'Arbeitsprozesse regelmäßig sichern und reflektieren.',
  'Portfolioarbeit zur Verbindung von Produkt, Prozess und Reflexion etablieren.',
  'Vorlagen für KI-Nutzungsnachweise bereitstellen.',
  'Prozessdokumentation in Unterrichtsvorhaben und Lernplattformen verankern.',
  'Schulweite Standards für transparente digitale Arbeitsprozesse entwickeln.',
],

naechsteSchritte: [
  {
    bereich: 'Lernende',
    text: 'Verwendete Prompts, Quellen und KI-Hilfen festhalten.',
  },
  {
    bereich: 'Lernende',
    text: 'Arbeitsstände mit Versionen, Notizen und Begründungen strukturieren.',
  },
  {
    bereich: 'Lehrkräfte',
    text: 'Vorlagen für Prompt-, Quellen- und Prozessnotizen nutzen.',
  },
  {
    bereich: 'Unterricht',
    text: 'Arbeitsprozesse regelmäßig sichern und reflektieren.',
  },
  {
    bereich: 'Schulentwicklung',
    text: 'Vorlagen für KI-Nutzungsnachweise bereitstellen.',
  },
  {
    bereich: 'Prüfungskultur',
    text: 'Arbeitsstände und Quellenübersichten bei der Bewertung berücksichtigen.',
  },
],

notizen: '',
vereinbarungen: '',
selectedLevel: null,
```

},
];

export const competenceAreas = [
'Suchen, Verarbeiten und Aufbewahren',
];
