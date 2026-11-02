# WF AI Coding – Starter-Projekt

Ihr Projekt für die vier Kurstage im Wahlfach **«Programmieren lernen mit KI»** (FHNW, HS 2026).
Sie bauen eine kleine Web-App mit HTML, CSS und JavaScript – unterstützt von KI, aber von Ihnen verstanden und geprüft.

## Loslegen

1. Auf GitHub **Use this template → Create a new repository** wählen.
2. Namensmuster **`wf-ai-coding-vorname`**, Sichtbarkeit **Public** (an Tag 4 veröffentlichen wir mit GitHub Pages).
3. Im neuen Repository **Code** → URL kopieren. In VS Code: Explorer → **Clone Repository** → URL einfügen → Ordner wählen → **Open**.
4. «Do you trust the authors?» → **Yes, I trust the authors**.
5. Rechtsklick auf `index.html` → **Show Preview** (Extension *Live Preview* von Microsoft).

**Klappt lokal nicht?** Auf GitHub **Use this template → Open in a codespace** – VS Code im Browser, ohne Installation.

## Hello-Agent-Check

| # | Schritt | Was Sie tun |
| --- | --- | --- |
| 1 | Starter öffnen | Live Preview starten – die Seite erscheint. |
| 2 | Code erklären lassen | Copilot Chat, Modus **Ask**: «Erkläre mir in 3 Sätzen, was script.js macht.» |
| 3 | Kleine Änderung | Modus **Agent**: «Ändere die Überschrift in «Hallo, [Name]!» und färbe sie blau.» Diff lesen – dann bewusst **Keep** oder **Undo**. |
| 4 | Speicherstand | Commit «Setup ok» und Push zu GitHub (Quellcodeverwaltung in VS Code). |
| 5 | Ampel grün | Setup fertig – helfen Sie Ihren Nachbarn. |

## Was ist in diesem Ordner?

| Datei | Wozu |
| --- | --- |
| `index.html` | Struktur der Seite |
| `style.css` | Aussehen |
| `script.js` | Verhalten |
| `SPEC.md` | Projektsteckbrief: Idee, Nutzer:in, User Stories, Datenmodell – wächst ab Tag 1 |
| `PROMPTLOG.md` | Ihr KI-Journal: Ziel, Modus, Ergebnis, eigene Korrektur – jeder KI-Einsatz |
| `AGENTS.md` | Regeln für die KI in diesem Projekt (Lernmodus) – ab Tag 3 ergänzen Sie eigene |
| `CLAUDE.md` | Verweist Claude Code auf AGENTS.md |
| `.github/copilot-instructions.md` | Verweist GitHub Copilot auf AGENTS.md |

## Drei Regeln für KI im Kurs

1. **Erlaubt und erwünscht** – KI-Nutzung ist ausdrücklich erlaubt und wird im Prompt-Log dokumentiert.
2. **Was ich nicht erklären kann, ist nicht meins** – im Erklär-Gespräch an Tag 4 erklären Sie eine Stelle Ihres Codes, die der Dozent auswählt.
3. **Keine sensiblen Daten** – keine Personendaten, Passwörter oder Schlüssel in Prompts oder im Repository. Das Repository ist öffentlich.

## Nachschlagen

- VS Code: https://code.visualstudio.com/docs
- GitHub Copilot: https://docs.github.com/copilot
- MDN Web Docs (HTML, CSS, JavaScript): https://developer.mozilla.org
