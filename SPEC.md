# Swiss Guessr

## Idee
Ein Spiel: Man sieht einen Ortsnamen und klickt auf der Schweizer Karte, wo der Ort liegt.

## Für wen
Für mich und meine Freunde – zum Spass und um die Schweiz besser kennenzulernen.

## User Stories
- Als Spieler möchte ich einen Ort sehen und auf die Karte klicken, damit ich rate, wo er liegt.
- Als Spieler möchte ich sehen, wie viele Kilometer ich daneben war, damit ich weiss, wie gut ich war.
- Als Spieler möchte ich nach 5 Runden meine Punkte sehen, damit ich mich verbessern kann.

## Datenmodell
```
// Objekt: Ort · Zweck: Frage im Spiel
// Koordinaten in LV95 (Schweizer Koordinatensystem, Meter)
{
  name: "Locarno",   // Text
  e: 2705100,        // Zahl (Ost-Koordinate)
  n: 1114180         // Zahl (Nord-Koordinate)
}
```

## Datenkarte
| Frage | Meine App |
| --- | --- |
| Welche Daten gibt es? | Eine Liste mit Schweizer Orten (Name und LV95-Koordinaten) |
| Welche Eingaben braucht es? | Klick auf die Karte, Knopf «Raten», Knopf «Nächste Runde» |
| Welche Entscheidungen werden getroffen? | Wie viele Punkte gibt es? (Je näher, desto mehr Punkte) |
| Was wird wiederholt? | 5 Runden pro Spiel |
| Was ist der Zustand? | Aktuelle Runde und Punktestand |
| Welche Ausgabe entsteht? | Richtiger Ort auf der Karte, Distanz in km, Punkte, Endstand |

## Offene Fragen
### Meine Fragen
- Wie viele Punkte gibt es für wie viele Kilometer?
  → Max. 5000 Punkte pro Runde. Je weiter weg, desto weniger Punkte. Die genaue Formel teste ich beim Programmieren.
- Darf ich die swisstopo-Karte (Orthofoto) verwenden?
  → Ja, swisstopo-Daten sind frei nutzbar. Ich gebe die Quelle «© swisstopo» an.

### Fragen aus dem KI-Sparring (Copilot, Modus Ask)
1. Welche Orte sollen vorkommen, und wie viele braucht es mindestens?
   → Bekannte Städte, Berge und Seen der Schweiz. Mindestens 30 Orte.
2. Kann ein Ort in einem Spiel mehrfach vorkommen?
   → Nein. Jede Runde zeigt einen anderen Ort.
3. Was zählt als gültiger Tipp, und was passiert ohne Klick?
   → Man darf überall auf die Karte klicken. Ohne Klick kann man nicht auf «Raten» drücken.
4. Wie wird die Distanz berechnet und angezeigt?
   → Mit LV95-Koordinaten und Pythagoras. Anzeige in km.
5. Wie werden km in Punkte umgerechnet, und wie sieht der Endstand aus?
   → Je näher, desto mehr Punkte (max. 5000). Am Ende: Total von max. 25 000 Punkten.

## Nicht im Umfang
- Kein Login und keine Online-Rangliste
- Kein Spiel gegen andere (kein Multiplayer)
