index.js:

// naimportuju data o počasí

import { predpoved } from './data.js';

const mainElement = document.querySelector('main');
let pocasiHTML = '';

for (const den in predpoved) {
  // Projdi všechny dny v objektu 'predpoved' (pondeli, utery, ...)
  if (predpoved.hasOwnProperty(den)) {
    // Zkontroluj, zda je 'den' vlastnost objektu 'predpoved'
    const dataDne = predpoved[den]; // Získej data o počasí pro daný den
    pocasiHTML += `
      <div class="den-karta">
        <h2>
          <a href="detail.html#${den}">${dataDne.den}</a>
        </h2>
        <p>Teplota: ${dataDne.denni_teplota}°C</p>
        <p>Stav: ${dataDne.stav_pocasi}</p>
      </div>
    `;
  }
}
// Vložíme vygenerovaný HTML kód do elementu <main>
mainElement.innerHTML = pocasiHTML;
detail.js:

// importuju data o počasí
import { predpoved } from './data.js';

// // Získám element <main> z HTML
const mainElement = document.querySelector('main');

// Získáme den z hashe v URL (odstraníme #)
const den = window.location.hash.slice(1);
// console.logy pro debugování protože mi to nefungovalo
console.log('Hodnota den po získání z hashe:', den);
// Získáme data o počasí pro daný den
const dataDne = predpoved[den];
console.log('Hodnota dataDne po získání z predpoved:', dataDne);

if (dataDne) {
  // Pokud existují data pro daný den
  // Vlož HTML kód s detailními informacemi o počasí do
elementu <main>
  mainElement.innerHTML = ` 
    <div class="detail-pocasi">
      <h2>${dataDne.den}</h2>
      <p>Datum: ${dataDne.datum}</p>
      <p>Ranní teplota: ${dataDne.ranni_teplota}°C</p>
      <p>Odpolední teplota: ${dataDne.odpoledni_teplota}°C</p>
      <p>Večerní teplota: ${dataDne.vecerni_teplota}°C</p>
      <p>Stav počasí: ${dataDne.stav_pocasi}</p>
      <p>Tlak: ${dataDne.tlak} hPa</p>
      <p>Rychlost větru: ${dataDne.rychlost_vetru} km/h</p>
      <p>Popis: ${dataDne.popis_pocasi}</p>
    </div>
  `;
} else {
  // Pokud data pro daný den neexistují
  // Zobraz zprávu o chybějících datech
  mainElement.innerHTML =
    '<p>Omlouváme se, data pro tento den nejsou k dispozici.</p>';
}

