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

    kurzbeschreibung:
      'Schülerinnen und Schüler klären ihren Informationsbedarf, entwickeln und verfeinern Suchstrategien und nutzen geeignete Quellen und KI-Anwendungen, um relevante Informationen zu finden.',

    warumWichtig:
      'KI kann Suchprozesse unterstützen und beschleunigen. Gleichzeitig verändert sich die Recherche: Gute Ergebnisse hängen zunehmend davon ab, Suchanliegen präzise zu formulieren, Quellen gezielt einzubeziehen und Ergebnisse kritisch einzuordnen.',

    reflexionsfrage:
      'Wie nutzen Lernende KI, um Informationsbedarfe zu klären, Suchwege zu planen und Ergebnisse gezielt einzugrenzen?',

    /*
     * Diese beiden Felder sichern vorübergehend die Kompatibilität
     * mit der derzeitigen Darstellung in FlipCard.jsx.
     */
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

    /*
     * Diese flache Liste wird momentan noch von FlipCard.jsx verwendet.
     * Später stellen wir sie auf die vier Perspektiven um.
     */
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
  },
];

export const competenceAreas = [
  'Suchen, Verarbeiten und Aufbewahren',
];
