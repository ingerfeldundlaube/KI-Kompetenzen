export const LEVELS = [
  { key: 'Grundlegend', value: 1, label: 'Grundlegend' },
  { key: 'Fortgeschritten', value: 2, label: 'Fortgeschritten' },
  { key: 'Vertieft', value: 3, label: 'Vertieft' },
];

export const perspektiven = ['Lernende', 'Lehrkräfte', 'Schul- und Unterrichtsentwicklung', 'Prüfungskultur'];
export const stufen = ['Grundlegend', 'Fortgeschritten', 'Vertieft'];

const KOMPETENZBEREICHE = {
  '1': 'Suchen, Verarbeiten und Aufbewahren',
  '2': 'Kommunizieren und Kooperieren',
  '3': 'Produzieren und Präsentieren',
  '4': 'Schützen und sicher Agieren',
  '5': 'Problemlösen und Handeln',
  '6': 'Analysieren und Reflektieren',
};

function r(lernende, lehrkraefte, schulentwicklung, pruefungskultur) {
  return {
    Lernende: lernende,
    Lehrkräfte: lehrkraefte,
    'Schul- und Unterrichtsentwicklung': schulentwicklung,
    Prüfungskultur: pruefungskultur,
  };
}

export const cards = [
  {
    id: '1.1',
    titel: 'Suchen und Filtern',
    kompetenzbereich: KOMPETENZBEREICHE['1'],
    kiSchwerpunkt: 'Mit KI bewusst umgehen',
    leitfrage: 'Wie nutzen Lernende KI, um Informationsbedarfe zu klären, Suchwege zu planen und Ergebnisse gezielt einzugrenzen?',
    kiFokus: 'KI als Such- und Strukturierungshilfe: Suchanliegen präzisieren, Prompts variieren, Quellen ergänzen und Ergebnisräume bewusst begrenzen.',
    entwicklungsraster: r(
      { Grundlegend: 'formulieren einfache Suchanliegen und erkennen, dass KI-Antworten Ausgangspunkte sind.', Fortgeschritten: 'vergleichen KI-Antworten mit Suchmaschinen, Datenbanken oder bereitgestellten Materialien; entwickeln Suchstrategien mit Prompts, Filterkriterien und Quellenabgleich.', Vertieft: 'planen mehrstufige Recherchen, dokumentieren Suchwege und reflektieren Grenzen generativer KI.' },
      { Grundlegend: 'geben klare Rechercheaufträge und einfache Promptmuster vor.', Fortgeschritten: 'modellieren, wie Suchanliegen präzisiert und Ergebnisse eingegrenzt werden; lassen Suchstrategien begründen, dokumentieren und peer-reviewen.', Vertieft: 'entwickeln Aufgaben, in denen KI-Recherche, Fachquellen und Reflexion systematisch verbunden werden.' },
      { Grundlegend: 'vereinbart erste Hinweise zur zulässigen KI-Nutzung bei Recherchen.', Fortgeschritten: 'sammelt geeignete Quellen, Tools und Promptbeispiele für Fächer; verankert Recherchekompetenz mit KI in schulinternen Curricula.', Vertieft: 'entwickelt gemeinsame Qualitätsstandards für KI-gestützte Informationssuche.' },
      { Grundlegend: 'klärt, ob und wie KI bei Vorrecherchen eingesetzt werden darf.', Fortgeschritten: 'macht Recherchewege und Hilfsmittel als Teil der Leistung sichtbar; bewertet Begründungen, Quellenwahl und Suchstrategie neben dem Ergebnis.', Vertieft: 'nutzt Prüfungsformate, in denen Prozessdokumentation und Reflexion zentral sind.' }
    ),
    reflexionsfragen: ['Wo stehen wir bei KI-gestützter Informationssuche?', 'Welcher nächste Entwicklungsschritt ist realistisch?', 'Welche Konsequenzen ergeben sich für Aufgaben, Unterricht und Prüfungsformate?'],
    notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '1.2', titel: 'Auswerten und Bewerten', kompetenzbereich: KOMPETENZBEREICHE['1'], kiSchwerpunkt: 'Mit KI bewusst umgehen',
    leitfrage: 'Wie prüfen Lernende KI-generierte Informationen auf Qualität, Plausibilität, Perspektivität und Quellenbezug?',
    kiFokus: 'KI-Antworten kritisch einordnen: Fakten prüfen, Quellen vergleichen, Verzerrungen erkennen und fachliche Kriterien anwenden.',
    entwicklungsraster: r(
      { Grundlegend: 'erkennen, dass KI-Antworten fehlerhaft oder unvollständig sein können.', Fortgeschritten: 'prüfen Aussagen mit mindestens einer verlässlichen Quelle; nutzen fachliche Kriterien, um KI-Antworten zu bewerten und zu überarbeiten.', Vertieft: 'analysieren Bias, Perspektiven, Quellenlage und Unsicherheiten systematisch.' },
      { Grundlegend: 'weisen auf Halluzinationen und fehlende Quellenprüfung hin.', Fortgeschritten: 'geben Prüffragen und einfache Kriterienraster vor; integrieren Quellenkritik, Faktencheck und fachliche Begründung in Aufgaben.', Vertieft: 'lassen Qualitätsurteile transparent begründen und mit Fachstandards verbinden.' },
      { Grundlegend: 'stellt Basishinweise zur kritischen KI-Nutzung bereit.', Fortgeschritten: 'entwickelt gemeinsame Kriterien für Quellenprüfung und Plausibilitätscheck; bindet KI-bezogene Informationsbewertung in Medienkonzept und Fachcurricula ein.', Vertieft: 'etabliert schulweite Routinen für Faktencheck, Bias-Reflexion und Quellenarbeit.' },
      { Grundlegend: 'vermeidet reine Reproduktion ungeprüfter KI-Antworten.', Fortgeschritten: 'fordert Quellenangaben und kurze Reflexion zur KI-Nutzung ein; bewertet kritische Prüfung, Auswahl und Überarbeitung von KI-Ergebnissen.', Vertieft: 'gestaltet Prüfungen so, dass Urteilskraft und Begründungsfähigkeit sichtbar werden.' }
    ),
    reflexionsfragen: ['Wie prüfen wir Qualität, Plausibilität und Quellenbezug?', 'Welche Kriterien nutzen Lernende und Lehrkräfte bereits?', 'Wie wird Urteilskraft in Aufgaben und Prüfungen sichtbar?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '1.3', titel: 'Speichern und Abrufen', kompetenzbereich: KOMPETENZBEREICHE['1'], kiSchwerpunkt: 'Mit KI bewusst umgehen',
    leitfrage: 'Wie organisieren Lernende KI-gestützte Arbeitsprozesse, Quellen, Prompts und Ergebnisse nachvollziehbar?',
    kiFokus: 'KI-Arbeit dokumentieren: Prompts, Quellen, Versionen, Entscheidungen und Ergebnisse so sichern, dass Lernen und Bewertung nachvollziehbar bleiben.',
    entwicklungsraster: r(
      { Grundlegend: 'speichern Ergebnisse und genutzte Materialien geordnet ab.', Fortgeschritten: 'halten verwendete Prompts, Quellen und KI-Hilfen einfach fest; strukturieren Arbeitsstände mit Versionen, Notizen und Begründungen.', Vertieft: 'führen ein nachvollziehbares Lern- oder Prozessportfolio zur KI-Nutzung.' },
      { Grundlegend: 'geben einfache Ablage- und Dokumentationsformen vor.', Fortgeschritten: 'nutzen Vorlagen für Prompt-, Quellen- und Prozessnotizen; lassen Arbeitsprozesse regelmäßig sichern und reflektieren.', Vertieft: 'etablieren Portfolioarbeit zur Verbindung von Produkt, Prozess und Reflexion.' },
      { Grundlegend: 'klärt Grundsätze zu Dateiablage, Datenschutz und Dokumentation.', Fortgeschritten: 'stellt Vorlagen für KI-Nutzungsnachweise bereit; verankert Prozessdokumentation in Unterrichtsvorhaben und Lernplattformen.', Vertieft: 'entwickelt schulweite Standards für transparente digitale Arbeitsprozesse.' },
      { Grundlegend: 'fordert bei KI-Nutzung einen einfachen Nutzungsnachweis ein.', Fortgeschritten: 'berücksichtigt Arbeitsstände und Quellenübersicht bei der Bewertung; bewertet Prozessqualität, Überarbeitung und Nachvollziehbarkeit.', Vertieft: 'nutzt Portfolios und Kolloquien zur Absicherung eigenständiger Leistung.' }
    ),
    reflexionsfragen: ['Wie werden Prompts, Quellen und Entscheidungen dokumentiert?', 'Welche Vorlagen oder Routinen braucht es?', 'Wie kann Prozessqualität bewertet werden?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '2.1', titel: 'Interagieren', kompetenzbereich: KOMPETENZBEREICHE['2'], kiSchwerpunkt: 'KI kreativ anwenden und KI gezielt einsetzen',
    leitfrage: 'Wie kommunizieren Lernende mit Menschen und KI-Systemen adressatengerecht, respektvoll und zielorientiert?',
    kiFokus: 'Dialog mit KI als Kommunikationsanlass: Rollen klären, Sprache anpassen, Rückfragen nutzen und Ergebnisse verantwortungsvoll weitergeben.',
    entwicklungsraster: r(
      { Grundlegend: 'nutzen KI für einfache Formulierungshilfen und erkennen den Unterschied zwischen Mensch und Maschine.', Fortgeschritten: 'passen Anrede, Ton und Inhalt mit Unterstützung an Adressaten an; führen dialogische KI-Nutzung mit Rückfragen, Präzisierungen und Rollenklärung.', Vertieft: 'reflektieren Wirkung, Verantwortung und Grenzen KI-gestützter Kommunikation.' },
      { Grundlegend: 'zeigen einfache Regeln für höfliche und klare Prompts.', Fortgeschritten: 'lassen adressatengerechte Varianten vergleichen; nutzen KI-Dialoge zur Vorbereitung von Gesprächen, Erklärungen und Feedback.', Vertieft: 'fördern Metakommunikation über Sprache, Macht, Verantwortung und Authentizität.' },
      { Grundlegend: 'formuliert Basishinweise zu respektvoller digitaler Kommunikation.', Fortgeschritten: 'sammelt Beispiele für KI-gestützte Kommunikationssituationen im Unterricht; entwickelt Leitlinien für KI in schulischer Kommunikation.', Vertieft: 'verknüpft Kommunikationskultur, Demokratiebildung und KI-Literalität.' },
      { Grundlegend: 'macht kenntlich, wann KI Formulierungen unterstützt hat.', Fortgeschritten: 'bewertet adressatengerechte Auswahl und Überarbeitung von Formulierungen; prüft mündlich oder schriftlich, ob Inhalte verstanden und verantwortet werden.', Vertieft: 'nutzt Prüfungsformate mit Reflexion über kommunikative Entscheidungen.' }
    ),
    reflexionsfragen: ['Wie wird mit KI adressatengerecht kommuniziert?', 'Welche Rollen, Regeln und Grenzen werden geklärt?', 'Wie werden kommunikative Entscheidungen reflektiert?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '2.2', titel: 'Teilen', kompetenzbereich: KOMPETENZBEREICHE['2'], kiSchwerpunkt: 'KI kreativ anwenden und KI gezielt einsetzen',
    leitfrage: 'Wie teilen Lernende KI-gestützt erstellte Inhalte verantwortungsvoll und nachvollziehbar?',
    kiFokus: 'Inhalte teilen: Urheberschaft, Transparenz, Datenschutz, Kontext und Adressatenbezug bei KI-Produkten beachten.',
    entwicklungsraster: r(
      { Grundlegend: 'unterscheiden eigene Beiträge von KI-unterstützten Anteilen.', Fortgeschritten: 'geben an, wenn KI bei Texten, Bildern oder Ideen geholfen hat; prüfen vor dem Teilen personenbezogene Daten und Rechte.', Vertieft: 'entscheiden begründet, welche KI-Inhalte in welchem Kontext geteilt werden können.' },
      { Grundlegend: 'geben einfache Kennzeichnungsregeln vor.', Fortgeschritten: 'üben das Teilen mit klaren Angaben zu Quellen und KI-Nutzung; thematisieren Datenschutz, Rechte und Wirkung veröffentlichter Inhalte.', Vertieft: 'entwickeln Aufgaben, in denen Veröffentlichung verantwortungsvoll geplant wird.' },
      { Grundlegend: 'stellt Grundregeln zur Veröffentlichung und Kennzeichnung bereit.', Fortgeschritten: 'klärt schulische Abläufe für Lernprodukte, Plattformen und Einwilligungen; verankert Transparenzregeln in Medienkonzept und Aufgabenformaten.', Vertieft: 'entwickelt eine gemeinsame Kultur verantwortlicher Veröffentlichung.' },
      { Grundlegend: 'fordert transparente Angaben zu KI-Anteilen.', Fortgeschritten: 'unterscheidet Hilfsmittel, Eigenleistung und Veröffentlichungskontext; bewertet Auswahl, Begründung und verantwortliche Weitergabe von Ergebnissen.', Vertieft: 'nutzt Prüfungsprodukte mit Offenlegung, Rechteklärung und Reflexion.' }
    ),
    reflexionsfragen: ['Wie werden KI-Anteile transparent gemacht?', 'Welche Datenschutz- und Rechtefragen müssen geklärt werden?', 'Wie wird verantwortliches Teilen bewertet?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '2.3', titel: 'Zusammenarbeiten', kompetenzbereich: KOMPETENZBEREICHE['2'], kiSchwerpunkt: 'KI kreativ anwenden und KI gezielt einsetzen',
    leitfrage: 'Wie unterstützt KI kollaboratives Lernen, ohne Eigenleistung, Rollen und Verantwortung zu verdecken?',
    kiFokus: 'KI in Gruppenarbeit: Ideen sammeln, Rollen klären, Feedback geben, Ergebnisse strukturieren und Beiträge transparent machen.',
    entwicklungsraster: r(
      { Grundlegend: 'nutzen KI zur Ideensammlung in Gruppen.', Fortgeschritten: 'klären, welche Vorschläge von KI und welche aus der Gruppe stammen; verwenden KI für Struktur, Feedback und Überarbeitung gemeinsamer Produkte.', Vertieft: 'reflektieren Gruppenprozesse, Verantwortung und Beitragstransparenz bei KI-Nutzung.' },
      { Grundlegend: 'geben einfache Gruppenrollen und KI-Regeln vor.', Fortgeschritten: 'lassen KI-Vorschläge gemeinsam prüfen und auswählen; fördern dokumentierte Kollaboration mit klaren Beiträgen.', Vertieft: 'gestalten kooperative Aufgaben, in denen KI als Werkzeug, nicht als Ersatz genutzt wird.' },
      { Grundlegend: 'erprobt KI-gestützte Gruppenarbeitsformate.', Fortgeschritten: 'sammelt Beispiele für Rollenkarten, Protokolle und Reflexionsbögen; verankert kollaborative KI-Nutzung in Unterrichtsentwicklung.', Vertieft: 'entwickelt Standards für faire Beteiligung, Transparenz und Feedbackkultur.' },
      { Grundlegend: 'macht Gruppen- und KI-Anteile unterscheidbar.', Fortgeschritten: 'bewertet individuelle Reflexion neben Gruppenprodukt; nutzt Prozessdokumentation, Peer-Feedback und kurze Kolloquien.', Vertieft: 'entwickelt Prüfungsformate, die Kooperation und individuelle Verantwortung verbinden.' }
    ),
    reflexionsfragen: ['Wie bleiben Eigenleistung und Rollen sichtbar?', 'Wie wird KI in Gruppenprozessen genutzt?', 'Wie lassen sich Gruppenprodukt und individuelle Verantwortung verbinden?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '2.4', titel: 'Umgangsregeln kennen und einhalten', kompetenzbereich: KOMPETENZBEREICHE['2'], kiSchwerpunkt: 'KI kreativ anwenden und KI gezielt einsetzen',
    leitfrage: 'Wie entwickeln Lernende Regeln für einen fairen, sicheren und respektvollen Umgang mit KI?',
    kiFokus: 'Netiquette und KI-Ethik: respektvolle Sprache, Schutz vor Manipulation, verantwortliche Prompts und Grenzen automatisierter Kommunikation.',
    entwicklungsraster: r(
      { Grundlegend: 'kennen einfache Regeln für respektvolle digitale Kommunikation.', Fortgeschritten: 'erkennen unangemessene, verletzende oder manipulative KI-Ausgaben; formulieren Prompts und Beiträge fair, inklusiv und verantwortungsvoll.', Vertieft: 'reflektieren Normen, Machtverhältnisse und gesellschaftliche Folgen automatisierter Kommunikation.' },
      { Grundlegend: 'vereinbaren Klassenregeln zur KI-Nutzung.', Fortgeschritten: 'besprechen Beispiele für problematische KI-Kommunikation; lassen Regeln anwenden, begründen und weiterentwickeln.', Vertieft: 'führen ethische Fallanalysen zu KI-gestützter Kommunikation durch.' },
      { Grundlegend: 'ergänzt Medienregeln um KI-bezogene Aspekte.', Fortgeschritten: 'stellt Orientierung zu respektvoller und sicherer KI-Nutzung bereit; verbindet Prävention, Wertebildung und digitale Kompetenzen.', Vertieft: 'entwickelt ein schulweites Verständnis verantwortungsvoller KI-Kommunikation.' },
      { Grundlegend: 'klärt zulässige und unzulässige Formen KI-gestützter Kommunikation.', Fortgeschritten: 'berücksichtigt Regelkenntnis bei Prozessreflexionen; bewertet verantwortliche Anwendung vereinbarter Regeln.', Vertieft: 'nutzt Dilemma- und Fallaufgaben zur Beurteilung ethischer Urteilskraft.' }
    ),
    reflexionsfragen: ['Welche Regeln für KI-Nutzung gelten bereits?', 'Wie werden problematische KI-Ausgaben besprochen?', 'Wie kann ethische Urteilskraft sichtbar werden?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '2.5', titel: 'An der Gesellschaft aktiv teilhaben', kompetenzbereich: KOMPETENZBEREICHE['2'], kiSchwerpunkt: 'KI kreativ anwenden und KI gezielt einsetzen',
    leitfrage: 'Wie nutzen Lernende KI, um sich informiert, reflektiert und demokratisch an digitalen Öffentlichkeiten zu beteiligen?',
    kiFokus: 'Partizipation mit KI: Meinungsbildung, Argumentation, Barriereabbau, Teilhabechancen und Risiken automatisierter Öffentlichkeit reflektieren.',
    entwicklungsraster: r(
      { Grundlegend: 'nutzen KI, um Informationen oder Argumente verständlicher zu machen.', Fortgeschritten: 'vergleichen KI-generierte Positionen mit eigenen Einschätzungen und Quellen; entwickeln begründete Beiträge zu gesellschaftlichen Fragen mit transparenter KI-Nutzung.', Vertieft: 'analysieren Einfluss von KI auf Öffentlichkeit, Meinungsbildung und Teilhabe.' },
      { Grundlegend: 'nutzen KI als Einstieg in Argumentations- und Beteiligungsaufgaben.', Fortgeschritten: 'lassen Positionen prüfen, ergänzen und adressatengerecht formulieren; gestalten Projekte zu demokratischer Teilhabe und digitaler Öffentlichkeit.', Vertieft: 'fördern kritische Reflexion über Plattformlogiken, KI und gesellschaftliche Verantwortung.' },
      { Grundlegend: 'macht KI als Thema demokratischer Bildung sichtbar.', Fortgeschritten: 'verbindet Partizipationsformate mit Medienbildung; entwickelt schulische Beteiligungsprojekte mit reflektierter KI-Nutzung.', Vertieft: 'verankert KI, Demokratiebildung und Teilhabe in Schulprogrammarbeit.' },
      { Grundlegend: 'bewertet nicht nur Positionen, sondern Begründung und Quellenprüfung.', Fortgeschritten: 'fordert Transparenz über KI-gestützte Argumentationshilfen; nutzt Debatten, Stellungnahmen und Reflexionen als Leistungsformate.', Vertieft: 'prüft demokratische Urteilskraft in offenen, transferorientierten Aufgaben.' }
    ),
    reflexionsfragen: ['Wie unterstützt KI demokratische Teilhabe?', 'Wie werden Quellen, Positionen und Argumente geprüft?', 'Wie kann demokratische Urteilskraft geprüft werden?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '3.1', titel: 'Entwickeln und Produzieren', kompetenzbereich: KOMPETENZBEREICHE['3'], kiSchwerpunkt: 'KI kreativ anwenden und KI aktiv mitgestalten',
    leitfrage: 'Wie entwickeln Lernende mit KI eigene Produkte, ohne Kreativität, Fachlichkeit und Verantwortung aus der Hand zu geben?',
    kiFokus: 'KI als Produktionspartner: Ideen generieren, Entwürfe erstellen, Produkte verbessern und eigene Entscheidungen sichtbar machen.',
    entwicklungsraster: r(
      { Grundlegend: 'nutzen KI für erste Ideen oder Entwürfe.', Fortgeschritten: 'überarbeiten KI-Vorschläge mit eigenen fachlichen Entscheidungen; gestalten Produkte ziel-, adressaten- und kriterienorientiert mit KI-Unterstützung.', Vertieft: 'entwickeln eigenständige Produkte und reflektieren kreative, fachliche und ethische Entscheidungen.' },
      { Grundlegend: 'geben klare Produktziele und einfache KI-Hilfen vor.', Fortgeschritten: 'modellieren Überarbeitung statt bloßer Übernahme; arbeiten mit Kriterienrastern für Qualität, Originalität und Fachlichkeit.', Vertieft: 'entwickeln komplexe Gestaltungsaufgaben mit Prozessreflexion und Variantenvergleich.' },
      { Grundlegend: 'sammelt Beispiele für KI-gestützte Lernprodukte.', Fortgeschritten: 'klärt rechtliche, technische und pädagogische Rahmenbedingungen; verankert produktives Arbeiten mit KI in Fachcurricula.', Vertieft: 'entwickelt eine schulweite Kultur kreativer und verantwortlicher KI-Produktion.' },
      { Grundlegend: 'unterscheidet Produkt, Prozess und Eigenanteil.', Fortgeschritten: 'fordert Dokumentation wichtiger Entscheidungen und KI-Hilfen; bewertet Qualität, Überarbeitung, Begründung und Reflexion.', Vertieft: 'nutzt Präsentation, Portfolio und Verteidigung zur Absicherung eigenständiger Leistung.' }
    ),
    reflexionsfragen: ['Wie bleiben Kreativität, Fachlichkeit und Verantwortung sichtbar?', 'Wie werden KI-Vorschläge überarbeitet?', 'Wie wird Eigenleistung abgesichert?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '3.2', titel: 'Weiterverarbeiten und Integrieren', kompetenzbereich: KOMPETENZBEREICHE['3'], kiSchwerpunkt: 'KI kreativ anwenden und KI aktiv mitgestalten',
    leitfrage: 'Wie integrieren Lernende KI-generierte Inhalte sinnvoll in eigene Arbeiten und bestehende Materialien?',
    kiFokus: 'KI-Inhalte überarbeiten, kombinieren und einbetten: Kohärenz, Quellen, Stil, Fachlichkeit und Eigenleistung sichern.',
    entwicklungsraster: r(
      { Grundlegend: 'fügen KI-Vorschläge nicht ungeprüft ein.', Fortgeschritten: 'passen KI-Inhalte an Aufgabe, Stil und eigene Aussage an; kombinieren eigene Arbeit, Quellen und KI-Ergebnisse kohärent.', Vertieft: 'reflektieren Transformation, Auswahl und Integration als eigene gestalterische Leistung.' },
      { Grundlegend: 'zeigen Beispiele für gute und problematische Integration.', Fortgeschritten: 'geben Überarbeitungsschritte und Kennzeichnung vor; lassen Versionen vergleichen und Entscheidungen begründen.', Vertieft: 'fördern anspruchsvolle Remix-, Adaptions- und Transferaufgaben.' },
      { Grundlegend: 'stellt Vorlagen zur KI-Kennzeichnung bereit.', Fortgeschritten: 'klärt urheberrechtliche und datenschutzbezogene Grundfragen; verankert Überarbeitungskompetenz in Unterrichtsvorhaben.', Vertieft: 'entwickelt gemeinsame Standards für Integration, Quellenarbeit und Eigenanteil.' },
      { Grundlegend: 'bewertet nicht die bloße KI-Ausgabe.', Fortgeschritten: 'fordert nachvollziehbare Überarbeitung und Einbettung; macht Eigenanteil durch Prozessnotizen, Versionen oder Gespräche sichtbar.', Vertieft: 'entwickelt Kriterien für Transformation, Kohärenz und reflektierte Nutzung.' }
    ),
    reflexionsfragen: ['Wie werden KI-Inhalte sinnvoll integriert?', 'Wie sichern wir Kohärenz, Stil und Eigenleistung?', 'Wie werden Transformation und Überarbeitung bewertet?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '3.3', titel: 'Rechtliche Vorgaben beachten', kompetenzbereich: KOMPETENZBEREICHE['3'], kiSchwerpunkt: 'KI kreativ anwenden und KI aktiv mitgestalten',
    leitfrage: 'Wie beachten Lernende bei KI-Produkten Urheberrecht, Datenschutz, Persönlichkeitsrechte und Transparenzpflichten?',
    kiFokus: 'Rechte und Verantwortung: keine geschützten Daten eingeben, KI-Anteile kennzeichnen, Quellen und Nutzungsrechte prüfen.',
    entwicklungsraster: r(
      { Grundlegend: 'wissen, dass persönliche Daten und fremde Werke geschützt sind.', Fortgeschritten: 'kennzeichnen KI-Hilfen und achten auf einfache Quellenangaben; prüfen Nutzungsrechte, Datenschutz und Persönlichkeitsrechte vor Veröffentlichung.', Vertieft: 'wenden rechtliche und ethische Kriterien in komplexen Produktionsprozessen an.' },
      { Grundlegend: 'geben klare Verbote und einfache Kennzeichnungsregeln vor.', Fortgeschritten: 'üben Quellenangaben, Datenschutz und Rechteklärung an Beispielen; integrieren rechtliche Prüfungen in Produktionsaufgaben.', Vertieft: 'lassen rechtliche Abwägungen begründen und auf neue Kontexte übertragen.' },
      { Grundlegend: 'stellt Grundsätze zu Datenschutz, Urheberrecht und KI bereit.', Fortgeschritten: 'erstellt Musterhinweise für Aufgaben und Veröffentlichungen; verankert Rechteklärung in Medienkonzept und schulischen Abläufen.', Vertieft: 'entwickelt verbindliche Standards für transparente, rechtssichere KI-Nutzung.' },
      { Grundlegend: 'macht rechtliche Vorgaben Bestandteil der Aufgabenstellung.', Fortgeschritten: 'fordert Kennzeichnung von Hilfsmitteln und Quellen; berücksichtigt Regelbeachtung und Transparenz in der Bewertung.', Vertieft: 'nutzt Fallbeispiele, um rechtliche Urteilskompetenz zu prüfen.' }
    ),
    reflexionsfragen: ['Welche rechtlichen Vorgaben müssen Lernende beachten?', 'Wie werden KI-Hilfen und Quellen gekennzeichnet?', 'Wie wird rechtliche Urteilskompetenz geprüft?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '4.1', titel: 'Sicher in digitalen Umgebungen agieren', kompetenzbereich: KOMPETENZBEREICHE['4'], kiSchwerpunkt: 'Mit KI bewusst umgehen und KI gezielt einsetzen',
    leitfrage: 'Wie handeln Lernende sicher, wenn KI-Systeme Empfehlungen geben, Daten erheben oder Entscheidungen vorbereiten?',
    kiFokus: 'Sicherheit bei KI: Risiken erkennen, Systeme einschätzen, sensible Eingaben vermeiden und Schutzmaßnahmen anwenden.',
    entwicklungsraster: r(
      { Grundlegend: 'wissen, dass KI-Systeme Daten verarbeiten können.', Fortgeschritten: 'vermeiden sensible Eingaben und prüfen unbekannte Tools kritisch; wenden Sicherheitsregeln bei Accounts, Uploads und KI-Diensten an.', Vertieft: 'bewerten Risiken automatisierter Systeme und treffen begründete Schutzentscheidungen.' },
      { Grundlegend: 'geben sichere Nutzungsregeln und zugelassene Umgebungen vor.', Fortgeschritten: 'thematisieren Risiken bei Uploads, Accounts und Toolauswahl; üben Risikoabwägung anhand schulischer Fallbeispiele.', Vertieft: 'entwickeln Lernarrangements zur kritischen Bewertung von KI-Systemen.' },
      { Grundlegend: 'klärt sichere, schulisch verantwortbare KI-Nutzungsräume.', Fortgeschritten: 'stellt Hinweise zu Datenschutz, Zugang und Aufsicht bereit; verknüpft IT-Sicherheit, Datenschutz und Medienbildung.', Vertieft: 'entwickelt ein schulweites Risikomanagement für KI-Anwendungen.' },
      { Grundlegend: 'nutzt nur zugelassene, sichere Umgebungen.', Fortgeschritten: 'klärt vorab erlaubte Tools und Eingaben; bewertet verantwortlichen Umgang mit Daten und Systemen.', Vertieft: 'gestaltet Prüfungen so, dass Sicherheit und Eigenleistung gewährleistet sind.' }
    ),
    reflexionsfragen: ['Welche sicheren KI-Nutzungsräume gibt es?', 'Wie werden Risiken bei Daten, Uploads und Accounts bearbeitet?', 'Wie sichern Prüfungen Sicherheit und Eigenleistung?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '4.2', titel: 'Persönliche Daten und Privatsphäre schützen', kompetenzbereich: KOMPETENZBEREICHE['4'], kiSchwerpunkt: 'Mit KI bewusst umgehen und KI gezielt einsetzen',
    leitfrage: 'Wie schützen Lernende eigene und fremde Daten bei der Nutzung von KI?',
    kiFokus: 'Datenschutz praktisch anwenden: personenbezogene Daten erkennen, anonymisieren, Eingaben vermeiden und Privatsphäre anderer achten.',
    entwicklungsraster: r(
      { Grundlegend: 'erkennen einfache personenbezogene Daten.', Fortgeschritten: 'geben keine sensiblen Daten in KI-Systeme ein; anonymisieren Beispiele und prüfen, ob Daten anderer betroffen sind.', Vertieft: 'beurteilen Datenschutzrisiken auch bei scheinbar harmlosen KI-Anwendungen.' },
      { Grundlegend: 'formulieren klare Datenschutzregeln für KI-Aufgaben.', Fortgeschritten: 'zeigen, wie Aufgaben ohne personenbezogene Daten bearbeitet werden; lassen Anonymisierung und Datensparsamkeit praktisch üben.', Vertieft: 'entwickeln datenschutzsensible Aufgabenformate und Reflexionsanlässe.' },
      { Grundlegend: 'stellt verbindliche Hinweise zur Datensparsamkeit bereit.', Fortgeschritten: 'klärt, welche KI-Angebote schulisch genutzt werden dürfen; verankert Datenschutz in KI-Leitlinien und Fortbildung.', Vertieft: 'prüft Prozesse regelmäßig und entwickelt sichere Alternativen.' },
      { Grundlegend: 'schließt personenbezogene oder geschützte Daten in KI-Eingaben aus.', Fortgeschritten: 'legt zugelassene Materialien und Tools transparent fest; bewertet Datenschutzbewusstsein bei Prozessaufgaben.', Vertieft: 'nutzt Prüfungssettings, die Datenschutz und Chancengleichheit sichern.' }
    ),
    reflexionsfragen: ['Wie schützen Lernende eigene und fremde Daten?', 'Welche KI-Angebote sind schulisch zugelassen?', 'Wie werden Datenschutz und Chancengleichheit in Prüfungen gesichert?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '4.3', titel: 'Selbstregulation und soziale Kompetenzen entwickeln', kompetenzbereich: KOMPETENZBEREICHE['4'], kiSchwerpunkt: 'Mit KI bewusst umgehen und KI gezielt einsetzen',
    leitfrage: 'Wie nutzen Lernende KI so, dass Konzentration, Wohlbefinden, Selbstwirksamkeit und soziale Beziehungen gestärkt werden?',
    kiFokus: 'Gesundheit und Balance: Abhängigkeiten vermeiden, kognitive Entlastung reflektieren, Arbeitsrhythmen gestalten und soziale Lernprozesse erhalten.',
    entwicklungsraster: r(
      { Grundlegend: 'nehmen wahr, dass KI Nutzung erleichtern, aber auch überfordern kann.', Fortgeschritten: 'achten auf Pausen, Konzentration und eigene Lernaktivität; reflektieren, wann KI hilft und wann sie eigenes Denken ersetzt.', Vertieft: 'entwickeln selbstregulierte Strategien für gesunde, wirksame KI-Nutzung.' },
      { Grundlegend: 'setzen kurze, klare KI-Phasen ein.', Fortgeschritten: 'thematisieren Überforderung, Abhängigkeit und Konzentration; fördern Balance zwischen KI-Unterstützung, Eigenarbeit und Austausch.', Vertieft: 'entwickeln Lernsettings, die Selbstwirksamkeit und metakognitive Kontrolle stärken.' },
      { Grundlegend: 'nimmt Gesundheit als Aspekt digitaler Bildung auf.', Fortgeschritten: 'vereinbart einfache Regeln zu Bildschirmzeit und KI-Phasen; verknüpft Medienbildung, Prävention und Lernkultur.', Vertieft: 'entwickelt Konzepte für gesunde digitale Schul- und Unterrichtsroutinen.' },
      { Grundlegend: 'vermeidet Prüfungsformate, die dauerhafte Toolabhängigkeit erzeugen.', Fortgeschritten: 'achtet auf transparente, entlastende Rahmenbedingungen; bewertet Reflexion über Lernstrategien und KI-Unterstützung.', Vertieft: 'stärkt Formate, die Selbstständigkeit, Resilienz und Lernprozess sichtbar machen.' }
    ),
    reflexionsfragen: ['Wie wird gesunde KI-Nutzung thematisiert?', 'Wie bleibt eigenes Denken erhalten?', 'Wie werden Selbstständigkeit und Lernprozess sichtbar?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '4.4', titel: 'Natur und Umwelt schützen', kompetenzbereich: KOMPETENZBEREICHE['4'], kiSchwerpunkt: 'Mit KI bewusst umgehen und KI gezielt einsetzen',
    leitfrage: 'Wie reflektieren Lernende ökologische Auswirkungen von KI und digitaler Infrastruktur?',
    kiFokus: 'Nachhaltigkeit: Energieverbrauch, Ressourcen, Nutzen-Abwägung und verantwortliche Toolauswahl thematisieren.',
    entwicklungsraster: r(
      { Grundlegend: 'wissen, dass digitale Dienste Ressourcen verbrauchen.', Fortgeschritten: 'überlegen, ob KI für eine Aufgabe wirklich nötig ist; wägen Nutzen, Aufwand und ökologische Folgen einfacher KI-Nutzung ab.', Vertieft: 'analysieren ökologische, soziale und ökonomische Folgen von KI-Systemen.' },
      { Grundlegend: 'machen Ressourcenverbrauch digitaler Systeme sichtbar.', Fortgeschritten: 'fragen nach angemessener Toolwahl statt automatischer KI-Nutzung; integrieren Nachhaltigkeit in KI-Aufgaben und Reflexionen.', Vertieft: 'gestalten fächerübergreifende Projekte zu KI, Ressourcen und Verantwortung.' },
      { Grundlegend: 'nimmt Nachhaltigkeit in digitale Leitlinien auf.', Fortgeschritten: 'sensibilisiert für angemessene und sparsame KI-Nutzung; verbindet Medienkonzept, Bildung für nachhaltige Entwicklung und KI.', Vertieft: 'entwickelt Kriterien für nachhaltige digitale Schulentwicklung.' },
      { Grundlegend: 'fragt nach begründetem Einsatz statt bloßer Toolnutzung.', Fortgeschritten: 'berücksichtigt nachhaltige Arbeitsentscheidungen in Reflexionen; nutzt Aufgaben zu Nutzen-Risiko- und Ressourcenabwägung.', Vertieft: 'prüft systemisches Denken zu KI, Umwelt und gesellschaftlicher Verantwortung.' }
    ),
    reflexionsfragen: ['Wann ist KI-Einsatz fachlich und ökologisch sinnvoll?', 'Wie werden Ressourcen und Nutzen abgewogen?', 'Wie wird nachhaltige digitale Schulentwicklung sichtbar?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '5.1', titel: 'Technische Probleme lösen', kompetenzbereich: KOMPETENZBEREICHE['5'], kiSchwerpunkt: 'KI gezielt einsetzen und KI aktiv mitgestalten',
    leitfrage: 'Wie gehen Lernende mit Fehlern, Grenzen und Störungen bei KI-Systemen produktiv um?',
    kiFokus: 'Problemlösen mit KI: Fehlermeldungen verstehen, Prompts anpassen, Alternativen wählen und Ergebnisse trotz technischer Grenzen sichern.',
    entwicklungsraster: r(
      { Grundlegend: 'erkennen einfache technische Probleme oder unpassende Antworten.', Fortgeschritten: 'versuchen naheliegende Lösungen wie Neuformulieren, Prüfen oder Wechseln des Weges; analysieren Fehlerquellen und wählen geeignete Alternativen.', Vertieft: 'entwickeln robuste Strategien für Arbeiten mit unsicheren oder begrenzten KI-Systemen.' },
      { Grundlegend: 'planen einfache Ausweichwege ein.', Fortgeschritten: 'zeigen, wie Prompts und Eingaben bei Problemen angepasst werden; lassen technische und inhaltliche Fehler unterscheiden.', Vertieft: 'fördern Fehlertoleranz, Debugging und strategisches Problemlösen.' },
      { Grundlegend: 'stellt Supportwege und einfache Handreichungen bereit.', Fortgeschritten: 'sammelt typische Probleme und Lösungen für zugelassene Tools; verankert Fehlerkultur und technische Grundkompetenz im Kollegium.', Vertieft: 'entwickelt verlässliche Strukturen für KI-Einsatz, Support und Fortbildung.' },
      { Grundlegend: 'legt fest, wie technische Störungen behandelt werden.', Fortgeschritten: 'bietet gleichwertige Alternativen bei Toolausfall; bewertet Problemlösestrategien und nicht nur Toolergebnisse.', Vertieft: 'sichert faire Prüfungsbedingungen durch klare Notfall- und Dokumentationsregeln.' }
    ),
    reflexionsfragen: ['Wie gehen Lernende mit Fehlern und Störungen um?', 'Welche Ausweichwege und Supportstrukturen gibt es?', 'Wie werden faire Bedingungen bei Toolausfall gesichert?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '5.2', titel: 'Werkzeuge bedarfsgerecht einsetzen', kompetenzbereich: KOMPETENZBEREICHE['5'], kiSchwerpunkt: 'KI gezielt einsetzen und KI aktiv mitgestalten',
    leitfrage: 'Wie wählen Lernende passende KI- und Nicht-KI-Werkzeuge für konkrete Aufgaben aus?',
    kiFokus: 'Werkzeugwahl: Aufgabe analysieren, Nutzen prüfen, Grenzen erkennen und KI nur dort einsetzen, wo sie fachlich sinnvoll ist.',
    entwicklungsraster: r(
      { Grundlegend: 'probieren einfache KI-Hilfen für klar begrenzte Aufgaben aus.', Fortgeschritten: 'entscheiden mit Unterstützung, ob KI oder ein anderes Werkzeug passt; begründen Toolwahl anhand von Ziel, Qualität, Aufwand und Risiken.', Vertieft: 'entwickeln flexible Werkzeugstrategien für komplexe Problemstellungen.' },
      { Grundlegend: 'geben geeignete und ungeeignete Einsatzbeispiele vor.', Fortgeschritten: 'modellieren Kriterien für die Werkzeugauswahl; lassen Lernende Toolentscheidungen vergleichen und begründen.', Vertieft: 'gestalten offene Aufgaben mit reflektierter, eigenständiger Werkzeugwahl.' },
      { Grundlegend: 'stellt eine Orientierung zu zugelassenen Tools bereit.', Fortgeschritten: 'sammelt fachbezogene Einsatzszenarien; verankert Werkzeugkompetenz in Fach- und Mediencurricula.', Vertieft: 'entwickelt Standards für pädagogisch begründete KI-Auswahl.' },
      { Grundlegend: 'klärt, welche Werkzeuge erlaubt sind.', Fortgeschritten: 'fordert Begründung der Werkzeugwahl bei offenen Aufgaben; bewertet Passung, Zweckmäßigkeit und verantwortliche Nutzung.', Vertieft: 'entwickelt Prüfungsformate, die reflektierte Toolkompetenz sichtbar machen.' }
    ),
    reflexionsfragen: ['Wie wird passende Werkzeugwahl begründet?', 'Welche Tools sind wofür geeignet oder ungeeignet?', 'Wie wird reflektierte Toolkompetenz sichtbar?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '5.3', titel: 'Eigene Stärken und Entwicklungsbereiche ermitteln und gezielt Strategien entwickeln', kompetenzbereich: KOMPETENZBEREICHE['5'], kiSchwerpunkt: 'KI gezielt einsetzen und KI aktiv mitgestalten',
    leitfrage: 'Wie nutzen Lernende KI, um Lernstände zu erkennen, Unterstützung zu erhalten und nächste Lernschritte zu planen?',
    kiFokus: 'KI als Lernbegleitung: Verständnis prüfen, Fehlvorstellungen erkennen, Erklärungen einholen und Lernstrategien entwickeln.',
    entwicklungsraster: r(
      { Grundlegend: 'fragen KI nach einfachen Erklärungen oder Übungsaufgaben.', Fortgeschritten: 'nutzen Rückmeldungen, um eigene Lücken zu erkennen; planen mit Unterstützung gezielte nächste Lernschritte.', Vertieft: 'reflektieren Lernfortschritt, Qualität der Hilfe und eigene Verantwortung.' },
      { Grundlegend: 'zeigen sichere Formen von KI als Lernhilfe.', Fortgeschritten: 'geben Prompts zur Selbsteinschätzung und Fehleranalyse vor; verknüpfen KI-Rückmeldungen mit fachlichem Feedback.', Vertieft: 'entwickeln personalisierte Lernwege mit Reflexion und pädagogischer Begleitung.' },
      { Grundlegend: 'erprobt KI-gestützte Lernhilfen in geschützten Settings.', Fortgeschritten: 'stellt Vorlagen für Lernstandsreflexion bereit; verankert adaptive Unterstützung in Förder- und Unterrichtskonzepten.', Vertieft: 'entwickelt Konzepte für faire, transparente und datensensible Lernbegleitung.' },
      { Grundlegend: 'trennt Übungs- und Bewertungssituationen klar.', Fortgeschritten: 'nutzt KI-gestützte Selbsteinschätzung formativ; bewertet Lernprozess, Fehleranalyse und nächste Schritte.', Vertieft: 'stärkt Prüfungsvorbereitung durch reflektierte Lernportfolios statt reiner Ergebnisabgabe.' }
    ),
    reflexionsfragen: ['Wie unterstützt KI Lernstand, Übung und nächste Schritte?', 'Wie bleiben formative Nutzung und Bewertung getrennt?', 'Wie wird Lernprozess sichtbar?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '5.4', titel: 'Digitale Werkzeuge und Medien zum Lernen, Arbeiten und Problemlösen nutzen', kompetenzbereich: KOMPETENZBEREICHE['5'], kiSchwerpunkt: 'KI gezielt einsetzen und KI aktiv mitgestalten',
    leitfrage: 'Wie setzen Lernende KI produktiv ein, um Probleme zu strukturieren, Lösungswege zu entwickeln und Ergebnisse zu prüfen?',
    kiFokus: 'KI als Denk- und Arbeitswerkzeug: Probleme zerlegen, Varianten entwickeln, Feedback nutzen und Entscheidungen fachlich begründen.',
    entwicklungsraster: r(
      { Grundlegend: 'nutzen KI, um Aufgaben besser zu verstehen.', Fortgeschritten: 'lassen sich Lösungswege vorschlagen und prüfen sie mit Unterstützung; entwickeln, vergleichen und überarbeiten Lösungsstrategien mit KI.', Vertieft: 'nutzen KI metakognitiv: planen, prüfen, verwerfen, begründen und transferieren.' },
      { Grundlegend: 'geben strukturierende KI-Hilfen für komplexe Aufgaben vor.', Fortgeschritten: 'lassen Lösungsvorschläge prüfen statt übernehmen; fördern Strategievergleich, Fehleranalyse und Reflexion.', Vertieft: 'gestalten problemlöseorientierten Unterricht mit KI als kontrolliertem Werkzeug.' },
      { Grundlegend: 'sammelt Beispiele für KI-gestütztes Problemlösen.', Fortgeschritten: 'entwickelt fachbezogene Einsatzszenarien für Lern- und Arbeitsprozesse; verankert Problemlösekompetenz mit KI in Unterrichtsentwicklung.', Vertieft: 'entwickelt gemeinsame Standards für kognitive Aktivierung trotz KI-Unterstützung.' },
      { Grundlegend: 'bewertet Lösungsweg und Begründung stärker als bloßes Ergebnis.', Fortgeschritten: 'fordert Sichtbarkeit von Strategie, Prüfung und Überarbeitung; nutzt Aufgaben mit Transfer, Variantenvergleich und Reflexion.', Vertieft: 'entwickelt Prüfungsformate, in denen KI kognitive Leistung nicht verdeckt.' }
    ),
    reflexionsfragen: ['Wie unterstützt KI Problemlösen ohne kognitive Leistung zu verdecken?', 'Wie werden Strategien geprüft und überarbeitet?', 'Wie wird kognitive Aktivierung gesichert?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '5.5', titel: 'Algorithmen erkennen und formulieren', kompetenzbereich: KOMPETENZBEREICHE['5'], kiSchwerpunkt: 'KI gezielt einsetzen und KI aktiv mitgestalten',
    leitfrage: 'Wie verstehen Lernende algorithmische Logiken und deren Bedeutung für KI-Systeme?',
    kiFokus: 'Algorithmisches Denken: Muster, Regeln, Trainingsdaten, Wahrscheinlichkeiten und Automatisierung als Grundlage von KI reflektieren.',
    entwicklungsraster: r(
      { Grundlegend: 'erkennen, dass KI nach Mustern und Regeln arbeitet.', Fortgeschritten: 'beschreiben einfache Abläufe oder Entscheidungsregeln; unterscheiden regelbasierte Abläufe, Datenmuster und probabilistische KI-Ausgaben.', Vertieft: 'analysieren algorithmische Entscheidungen, Trainingsdaten und gesellschaftliche Folgen.' },
      { Grundlegend: 'nutzen einfache Beispiele für Muster und Regeln.', Fortgeschritten: 'lassen Abläufe als Schrittfolgen oder Wenn-dann-Regeln formulieren; verbinden algorithmisches Denken mit KI-Beispielen aus dem Alltag.', Vertieft: 'gestalten Aufgaben zu Daten, Modellen, Automatisierung und Verantwortung.' },
      { Grundlegend: 'macht algorithmisches Denken als Querschnitt sichtbar.', Fortgeschritten: 'sammelt fachübergreifende Beispiele zu KI und Automatisierung; verankert Grundlagen von Algorithmen und KI in Curricula.', Vertieft: 'entwickelt ein abgestimmtes Konzept zu AI Literacy und informatischer Bildung.' },
      { Grundlegend: 'prüft grundlegendes Verständnis statt Toolbedienung allein.', Fortgeschritten: 'nutzt einfache Erklär- und Analyseaufgaben zu Algorithmen; bewertet Modellverständnis, Fehlereinschätzung und Transfer.', Vertieft: 'entwickelt Aufgaben zu algorithmischer Verantwortung und gesellschaftlicher Wirkung.' }
    ),
    reflexionsfragen: ['Wie wird algorithmisches Denken sichtbar?', 'Wie werden Datenmuster, Regeln und KI-Ausgaben unterschieden?', 'Wie wird gesellschaftliche Verantwortung thematisiert?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '6.1', titel: 'Digitale Medien und Medienlogiken analysieren und bewerten', kompetenzbereich: KOMPETENZBEREICHE['6'], kiSchwerpunkt: 'Mit KI bewusst umgehen und KI aktiv mitgestalten',
    leitfrage: 'Wie analysieren Lernende KI-generierte Medien, Desinformation, Deepfakes und automatisierte Empfehlungen?',
    kiFokus: 'Medienkritik mit KI: Authentizität prüfen, Manipulation erkennen, Empfehlungssysteme verstehen und Bewertungskriterien anwenden.',
    entwicklungsraster: r(
      { Grundlegend: 'wissen, dass Texte, Bilder, Audios und Videos KI-generiert sein können.', Fortgeschritten: 'prüfen einfache Hinweise auf Manipulation oder fehlende Plausibilität; analysieren KI-Medien mit Kriterien zu Quelle, Kontext, Absicht und Wirkung.', Vertieft: 'bewerten komplexe Medienphänomene wie Deepfakes, Desinformation und algorithmische Öffentlichkeit.' },
      { Grundlegend: 'zeigen altersangemessene Beispiele KI-generierter Medien.', Fortgeschritten: 'üben Quellen-, Kontext- und Plausibilitätsprüfung; integrieren Medienanalyse in fachliche Aufgaben und Projekte.', Vertieft: 'fördern kritische Urteilsbildung zu KI, Öffentlichkeit und Manipulation.' },
      { Grundlegend: 'nimmt KI-generierte Medien in Medienbildung auf.', Fortgeschritten: 'stellt Materialien zu Desinformation, Deepfakes und Quellenprüfung bereit; verankert Medienkritik in Fachcurricula und Präventionsarbeit.', Vertieft: 'entwickelt schulweite Strategien gegen Desinformation und manipulative KI-Nutzung.' },
      { Grundlegend: 'prüft Analyse- und Bewertungskompetenz an konkreten Materialien.', Fortgeschritten: 'fordert Begründungen statt bloßer Erkennung; nutzt Aufgaben zu Quellenkritik, Wirkung und Manipulation.', Vertieft: 'entwickelt komplexe Prüfungsformate zu Medienkritik und demokratischer Urteilsfähigkeit.' }
    ),
    reflexionsfragen: ['Wie werden KI-generierte Medien erkannt und bewertet?', 'Wie werden Quelle, Kontext, Absicht und Wirkung geprüft?', 'Wie wird demokratische Urteilsfähigkeit sichtbar?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
  {
    id: '6.2', titel: 'Gesellschaftliche Wirkungen digitaler Medien verstehen und reflektieren', kompetenzbereich: KOMPETENZBEREICHE['6'], kiSchwerpunkt: 'Mit KI bewusst umgehen und KI aktiv mitgestalten',
    leitfrage: 'Wie reflektieren Lernende die Rolle von KI für Lernen, Arbeit, Gesellschaft, Kultur und Bildung?',
    kiFokus: 'Systemische Reflexion: KI als gesellschaftliche Technologie verstehen, Chancen und Risiken abwägen und eigenes Handeln verantworten.',
    entwicklungsraster: r(
      { Grundlegend: 'benennen Chancen und Risiken von KI im Alltag.', Fortgeschritten: 'beschreiben, wie KI Lernen, Kommunikation oder Arbeit beeinflusst; reflektieren eigene KI-Nutzung anhand fachlicher, ethischer und sozialer Kriterien.', Vertieft: 'analysieren KI als Teil gesellschaftlicher Veränderung und entwickeln begründete Haltungen.' },
      { Grundlegend: 'schaffen Gesprächsanlässe zu Alltagserfahrungen mit KI.', Fortgeschritten: 'nutzen Fallbeispiele zu Chancen, Risiken und Verantwortung; verknüpfen KI-Reflexion mit Fachinhalten und Medienbildung.', Vertieft: 'fördern multiperspektivische Urteilsbildung und Zukunftskompetenz.' },
      { Grundlegend: 'macht KI als Schulentwicklungsthema sichtbar.', Fortgeschritten: 'organisiert Austausch, Fortbildung und gemeinsame Leitfragen; verankert KI-Reflexion im Medienkonzept und Schulprogramm.', Vertieft: 'entwickelt eine reflektierte Strategie zu Lernen, Lehren, Prüfen und Schulkultur mit KI.' },
      { Grundlegend: 'nimmt KI als Reflexionsgegenstand in Aufgaben auf.', Fortgeschritten: 'fordert begründete Positionen mit Beispielen und Quellen; bewertet Urteilsfähigkeit, Abwägung und Transfer.', Vertieft: 'entwickelt Prüfungsformate, die Zukunftsfragen, Ethik und Fachlichkeit verbinden.' }
    ),
    reflexionsfragen: ['Wie wird KI als gesellschaftliche Technologie reflektiert?', 'Wie werden Chancen, Risiken und Verantwortung abgewogen?', 'Wie werden Zukunftsfragen, Ethik und Fachlichkeit verbunden?'], notizen: '', vereinbarungen: '', selectedLevel: null,
  },
];

export const competenceAreas = Object.values(KOMPETENZBEREICHE);
