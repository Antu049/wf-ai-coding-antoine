// script.js – das Verhalten der Seite

// Zustand (state): Wie oft wurde schon geklickt?
let klicks = 0;

// Elemente aus index.html holen
const knopf = document.getElementById("knopf");
const ausgabe = document.getElementById("ausgabe");

// Wenn der Knopf geklickt wird: Zustand ändern und neu anzeigen
knopf.addEventListener("click", function () {
  klicks = klicks + 1;
  ausgabe.textContent = "Sie haben " + klicks + " Mal geklickt.";
});
