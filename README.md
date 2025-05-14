# Comparatore Frigoriferi per Ufficio

Un'applicazione web interattiva per confrontare vari modelli di frigoriferi adatti a un ufficio di 10 persone. Questa applicazione permette di filtrare, confrontare e analizzare 20 diversi modelli di frigoriferi disponibili su Amazon Italia.

![Screenshot dell'applicazione](https://via.placeholder.com/800x400?text=Screenshot+Comparatore+Frigoriferi)

## 🌟 Funzionalità

- Visualizzazione di 20 modelli di frigoriferi con specifiche dettagliate
- Filtri per capacità, classe energetica e fascia di prezzo
- Ricerca per marca e modello
- Calcolo del costo annuale di energia in base al consumo
- Confronto delle caratteristiche positive e negative di ciascun modello
- Visualizzazione dettagliata di ogni frigorifero
- Interfaccia responsive per desktop e mobile
- Collegamenti diretti per l'acquisto su Amazon

## 🚀 Demo

L'applicazione è disponibile online all'indirizzo: [https://smi-enrerm.github.io/frigoriferi-smi-udine](https://smi-enrerm.github.io/frigoriferi-smi-udine)

## 💻 Tecnologie utilizzate

- React.js
- Tailwind CSS
- Lucide React per le icone
- GitHub Pages per l'hosting

## 📋 Prerequisiti

- Node.js (versione 14.0.0 o superiore)
- npm (versione 6.0.0 o superiore)

## ⚙️ Installazione e setup locale

1. Clona il repository:
   ```bash
   git clone https://github.com/smi-enrerm/frigoriferi-smi-udine.git
   cd frigoriferi-smi-udine
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia l'applicazione in modalità sviluppo:
   ```bash
   npm start
   ```

4. L'applicazione sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000)

## 🔄 Deployment su GitHub Pages

1. Modifica il campo `homepage` nel file `package.json`:
   ```json
   "homepage": "https://smi-enrerm.github.io/frigoriferi-smi-udine"
   ```

2. Esegui il comando di deploy:
   ```bash
   npm run deploy
   ```

3. Controlla che nelle impostazioni del repository GitHub, la fonte per GitHub Pages sia impostata sul branch `gh-pages`.

## 🔧 Personalizzazione

### Modifica dei dati dei frigoriferi

Per aggiungere, rimuovere o modificare i modelli di frigorifero, modifica l'array `frigoriferi` nel file `src/App.js`:

```javascript
const [frigoriferi, setFrigoriferi] = useState([
  {
    id: 1,
    marca: "NuovoMarchio",
    modello: "NuovoModello",
    capacita: 300,
    tipologia: "Combinato",
    dimensioni: "180x60x65",
    classe: "A",
    prezzo: 599.99,
    consumo: 180,
    caratteristichePositive: [
      "Caratteristica positiva 1",
      "Caratteristica positiva 2"
    ],
    caratteristicheNegative: [
      "Caratteristica negativa 1"
    ],
    immagine: "https://via.placeholder.com/400x300?text=NuovoMarchio+NuovoModello",
    urlAcquisto: "https://www.amazon.it/..."
  },
  // Altri frigoriferi...
]);
```

### Modifica del costo dell'energia

Per aggiornare il costo dell'energia elettrica (attualmente impostato a 0,09€/kWh per Udine), modifica la costante `costoEnergiaKwh`:

```javascript
const costoEnergiaKwh = 0.10; // Nuovo valore
```

### Modifica dei filtri

I filtri sono definiti nella funzione `applyFilters`. Puoi modificare le soglie per i vari filtri:

```javascript
// Esempio: modifica delle soglie per il filtro di capacità
if (filtriAttivi.capacita === 'small') {
  matchesCapacity = frigo.capacita < 150; // Cambiato da 200 a 150
} else if (filtriAttivi.capacita === 'medium') {
  matchesCapacity = frigo.capacita >= 150 && frigo.capacita < 300; // Cambiato da 200-350 a 150-300
} else if (filtriAttivi.capacita === 'large') {
  matchesCapacity = frigo.capacita >= 300; // Cambiato da 350 a 300
}
```

## 📝 Licenza

Questo progetto è distribuito con licenza MIT.

## 👥 Contatti

Per domande o suggerimenti, contatta:
- Email: enrico.ermacora@sanmarcoinformatica.it
- GitHub: [smi-enrerm](https://github.com/smi-enrerm)