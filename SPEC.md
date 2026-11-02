# Projektname

> **SPEC.md – Ihr Projektsteckbrief.** Diese Datei beschreibt, *was* Ihre App können soll.
> Sie wächst über alle vier Kurstage und ist Ihr wichtigster Kontext für die KI.
> Ersetzen Sie die Platzhalter in *kursiv*. Ein Beispiel finden Sie ganz unten.

## Idee
*Was macht die App – in einem Satz?*

## Für wen
*Wer nutzt die App? In welcher Situation?*

## User Stories
*Format: Als … möchte ich …, damit …*

- Als *…* möchte ich *…*, damit *…*.
- Als *…* möchte ich *…*, damit *…*.
- Als *…* möchte ich *…*, damit *…*.

## Datenmodell
*Welche Dinge (Objekte) gibt es, und welche Eigenschaften mit welchem Typ haben sie?*

```
// Objekt: … · Zweck: …
{
  eigenschaft: "Text",
  anzahl: 0,
  erledigt: false
}
```

## Datenkarte
| Frage | Meine App |
| --- | --- |
| Welche Daten gibt es? | |
| Welche Eingaben braucht es? | |
| Welche Entscheidungen werden getroffen? | |
| Was wird wiederholt? | |
| Was ist der Zustand? | |
| Welche Ausgabe entsteht? | |

## Offene Fragen
*Was ist noch unklar? (z. B. Antworten aus dem KI-Sparring an Tag 1)*

- …

## Nicht im Umfang
*Was die App bewusst NICHT kann – hilft gegen ausufernde KI-Vorschläge.*

- …

---

<details>
<summary>Beispiel: SPEC.md v0 «Giess-Planer»</summary>

```
# Giess-Planer

## Idee
Erinnert mich, wann welche Zimmerpflanze Wasser braucht.

## Für wen
Mich und meine WG

## User Stories
- Als Nutzer:in möchte ich Pflanzen erfassen, damit ich den Überblick habe.
- Als Nutzer:in möchte ich sehen, welche Pflanze heute Wasser braucht.
- Als Nutzer:in möchte ich eine Pflanze als gegossen markieren,
  damit der nächste Termin neu berechnet wird.

## Datenmodell
// Objekt: Pflanze · Zweck: Giess-Erinnerung
{
  name: "Monstera",
  intervall_tage: 7,
  zuletzt_gegossen: "2026-11-01"
}
```
</details>
