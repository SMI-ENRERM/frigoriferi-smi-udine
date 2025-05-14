import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Search, Info, X, ArrowUpRight, Euro } from 'lucide-react';

// Utilizza nomi di modelli come testo per le immagini placeholder
const getPlaceholderImage = (brand, model) => {
  return `https://via.placeholder.com/400x300?text=${encodeURIComponent(brand + ' ' + model)}`;
};

const App = () => {
  // Database dei frigoriferi con immagini placeholder
  const [frigoriferi, setFrigoriferi] = useState([
    {
      id: 1,
      marca: "LG",
      modello: "GBV3100CPY",
      capacita: 344,
      tipologia: "Combinato",
      dimensioni: "186x60x68.2",
      classe: "C",
      prezzo: 649.99,
      consumo: 282, // kWh/anno
      caratteristichePositive: [
        "Tecnologia Door & Linear Cooling",
        "Fresh Converter per conservazione ottimale",
        "No Frost, sbrinamento non necessario",
        "Wine Rack (portabottiglie)"
      ],
      caratteristicheNegative: [
        "Prezzo più alto della media",
        "Non è Wi-Fi"
      ],
      immagine: "https://via.placeholder.com/400x300?text=LG+GBV3100CPY",
      urlAcquisto: "https://www.amazon.it/LG-GBV3100CPY-Frigorifero-Tecnologia-Compressore/dp/B0C9JWVYZJ"
    },
    {
      id: 2,
      marca: "Beko",
      modello: "B5RMLNE444HX",
      capacita: 381,
      tipologia: "Monoporta",
      dimensioni: "186.5x60x71",
      classe: "E",
      prezzo: 465.36,
      consumo: 143, // kWh/anno
      caratteristichePositive: [
        "Grande capacità (381 litri)",
        "Total NO FROST",
        "Display Touch",
        "Sistema AeroFlow per distribuzione ottimale dell'aria"
      ],
      caratteristicheNegative: [
        "Classe energetica E",
        "Occupazione spazio maggiore in profondità"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Beko+B5RMLNE444HX",
      urlAcquisto: "https://www.amazon.it/BEKO-B5RMLNE444HX-Frigorifero-Monoporta-Dimensioni/dp/B0BRL81ZFP"
    },
    {
      id: 3,
      marca: "Samsung",
      modello: "RS70F65KEFEF",
      capacita: 640,
      tipologia: "Side by Side",
      dimensioni: "178.4x91.2x72.6",
      classe: "D",
      prezzo: 1399.99,
      consumo: 350, // kWh/anno
      caratteristichePositive: [
        "Grande capacità (640 litri)",
        "SpaceMax Technology per maggiore spazio interno",
        "All-Around Cooling per temperatura uniforme",
        "Dispenser acqua/ghiaccio"
      ],
      caratteristicheNegative: [
        "Dimensioni notevoli, richiede molto spazio",
        "Consumo energetico elevato",
        "Prezzo alto"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Samsung+RS70F65KEFEF",
      urlAcquisto: "https://www.amazon.it/s?k=Samsung+RS70F65KEFEF"
    },
    {
      id: 4,
      marca: "Hisense",
      modello: "RB440N4BCE",
      capacita: 336,
      tipologia: "Combinato",
      dimensioni: "200x60x59",
      classe: "E",
      prezzo: 419.99,
      consumo: 256, // kWh/anno
      caratteristichePositive: [
        "No Frost, sbrinamento automatico",
        "Multi Air Flow per distribuzione uniforme dell'aria",
        "Super Freeze per congelamento rapido",
        "Silenzioso (39 dB)"
      ],
      caratteristicheNegative: [
        "Classe energetica E",
        "Consumo energetico medio-alto"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Hisense+RB440N4BCE",
      urlAcquisto: "https://www.amazon.it/Hisense-RB440N4BCE-Frigorifero-Portabottiglie-Reversibile/dp/B0BWH2VGG2"
    },
    {
      id: 5,
      marca: "Candy",
      modello: "CHCS 514EW",
      capacita: 207,
      tipologia: "Combinato",
      dimensioni: "151x55x58",
      classe: "E",
      prezzo: 279.99,
      consumo: 225, // kWh/anno
      caratteristichePositive: [
        "Dimensioni compatte, ideale per spazi ridotti",
        "Prezzo economico",
        "Cassetto Crisper per frutta e verdura",
        "Silenzioso (40 dB)"
      ],
      caratteristicheNegative: [
        "Capacità ridotta rispetto ad altri modelli",
        "Classe energetica E"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Candy+CHCS+514EW",
      urlAcquisto: "https://www.amazon.it/CHCS-514EWN-Frigorifero-Combinato-Classe/dp/B09PGK4JC2"
    },
    {
      id: 6,
      marca: "LG",
      modello: "GBB62PZFGN",
      capacita: 384,
      tipologia: "Combinato",
      dimensioni: "203x60x66",
      classe: "D",
      prezzo: 799.99,
      consumo: 250, // kWh/anno
      caratteristichePositive: [
        "Total No Frost, mai più sbrinamento",
        "Door Cooling per raffredamento uniforme",
        "Fresh Converter per conservazione ottimale",
        "Wi-Fi integrato per controllo remoto"
      ],
      caratteristicheNegative: [
        "Prezzo elevato",
        "Dimensioni imponenti"
      ],
      immagine: "https://via.placeholder.com/400x300?text=LG+GBB62PZFGN",
      urlAcquisto: "https://www.amazon.it/LG-GBB62PZFGN-Frigorifero-Compressore-Reversibili/dp/B0BPDBPTLG"
    },
    {
      id: 7,
      marca: "Hisense",
      modello: "RB390N4AW2",
      capacita: 300,
      tipologia: "Combinato",
      dimensioni: "185x60x67",
      classe: "E",
      prezzo: 399.99,
      consumo: 245, // kWh/anno
      caratteristichePositive: [
        "No Frost, sbrinamento automatico",
        "Capacità adeguata per ufficio",
        "Prezzo nella media",
        "Design moderno"
      ],
      caratteristicheNegative: [
        "Classe energetica E",
        "Consumo medio-alto"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Hisense+RB390N4AW2",
      urlAcquisto: "https://www.amazon.it/s?k=Hisense+RB390N4AW2"
    },
    {
      id: 8,
      marca: "Samsung",
      modello: "RB34C775CS9",
      capacita: 344,
      tipologia: "Combinato",
      dimensioni: "185.3x59.5x65.8",
      classe: "C",
      prezzo: 699.99,
      consumo: 200, // kWh/anno
      caratteristichePositive: [
        "Classe energetica C, risparmio energetico",
        "Total No Frost, mai più sbrinamento",
        "All Around Cooling per temperatura uniforme",
        "SpaceMax Technology per spazio interno ottimizzato"
      ],
      caratteristicheNegative: [
        "Prezzo medio-alto",
        "Dimensioni imponenti"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Samsung+RB34C775CS9",
      urlAcquisto: "https://www.amazon.it/Samsung-RB34C775CS9-EF-Frigorifero-Combinato/dp/B0BKJL3R7Z"
    },
    {
      id: 9,
      marca: "Bomann",
      modello: "VS 7316.1",
      capacita: 242,
      tipologia: "Monoporta",
      dimensioni: "170x55x58",
      classe: "F",
      prezzo: 329.99,
      consumo: 280, // kWh/anno
      caratteristichePositive: [
        "Illuminazione LED interna",
        "Prezzo competitivo",
        "Design inox elegante",
        "Porta reversibile"
      ],
      caratteristicheNegative: [
        "Classe energetica F (alto consumo)",
        "Capacità media"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Bomann+VS+7316.1",
      urlAcquisto: "https://www.amazon.it/Bomann-frigorifero-autoportante-illuminazione-sostituibile/dp/B097CWZTFM"
    },
    {
      id: 10,
      marca: "COMFEE'",
      modello: "RCD115WH2",
      capacita: 80,
      tipologia: "Monoporta con congelatore",
      dimensioni: "85x48x50",
      classe: "F",
      prezzo: 159.99,
      consumo: 185, // kWh/anno
      caratteristichePositive: [
        "Compatto, ideale per spazi ridotti",
        "Prezzo molto basso",
        "Silenzioso",
        "Temperatura regolabile"
      ],
      caratteristicheNegative: [
        "Capacità molto ridotta (inadeguata per 10 persone)",
        "Classe energetica F (alto consumo)"
      ],
      immagine: "https://via.placeholder.com/400x300?text=COMFEE+RCD115WH2",
      urlAcquisto: "https://www.amazon.it/COMFEE-RCD115WH2-Frigorifero-Congelatore-Regolabile/dp/B085JLSMV5"
    },
    {
      id: 11,
      marca: "Beko",
      modello: "RSSE265K40WN",
      capacita: 252,
      tipologia: "Monoporta",
      dimensioni: "146x54x58",
      classe: "E",
      prezzo: 299.99,
      consumo: 200, // kWh/anno
      caratteristichePositive: [
        "Capacità sufficiente per ufficio medio",
        "Prezzo competitivo",
        "Porta reversibile",
        "Design compatto"
      ],
      caratteristicheNegative: [
        "Classe energetica E",
        "Finitura base"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Beko+RSSE265K40WN",
      urlAcquisto: "https://www.amazon.it/Beko-RSSE265K40WN-Frigorifero-Installazione-energetica/dp/B0CSKFV1ML"
    },
    {
      id: 12,
      marca: "Hisense",
      modello: "RR220D4ERE",
      capacita: 165,
      tipologia: "Monoporta",
      dimensioni: "128x52x51.4",
      classe: "E",
      prezzo: 249.99,
      consumo: 178, // kWh/anno
      caratteristichePositive: [
        "Design elegante in rosso",
        "Prezzo contenuto",
        "Dimensioni compatte",
        "Rumorosità ridotta (37 dB)"
      ],
      caratteristicheNegative: [
        "Capacità insufficiente per 10 persone",
        "Classe energetica E"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Hisense+RR220D4ERE",
      urlAcquisto: "https://www.amazon.it/Hisense-Frigorifero-Monoporta-RR220D4ERE-Energetica/dp/B0D6GJH4C8"
    },
    {
      id: 13,
      marca: "Hisense",
      modello: "RB440N4ACA",
      capacita: 335,
      tipologia: "Combinato",
      dimensioni: "200x60x59",
      classe: "A",
      prezzo: 699.99,
      consumo: 110, // kWh/anno
      caratteristichePositive: [
        "Classe energetica A, consumo minimo",
        "Total No Frost, sbrinamento non necessario",
        "Bassa rumorosità (35dB)",
        "Motore inverter efficiente"
      ],
      caratteristicheNegative: [
        "Prezzo elevato",
        "Altezza considerevole"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Hisense+RB440N4ACA",
      urlAcquisto: "https://www.amazon.it/Hisense-raffreddamento-congelamento-illuminazione-inossidabile/dp/B0CKJ9KHVQ"
    },
    {
      id: 14,
      marca: "Candy",
      modello: "CHCS 514EX",
      capacita: 207,
      tipologia: "Combinato",
      dimensioni: "151x55x58",
      classe: "E",
      prezzo: 297.97,
      consumo: 230, // kWh/anno
      caratteristichePositive: [
        "Design in acciaio inossidabile",
        "Dimensioni compatte, ideale per spazi ridotti",
        "Luce LED interna",
        "Cassetto Crisper per frutta e verdura"
      ],
      caratteristicheNegative: [
        "Capacità ridotta rispetto ad altri modelli",
        "Classe energetica E"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Candy+CHCS+514EX",
      urlAcquisto: "https://www.amazon.it/Candy-CHCS-514EX-Frigorifero-Combinato/dp/B09GVSN2T5"
    },
    {
      id: 15,
      marca: "LG",
      modello: "GBV3200CPY",
      capacita: 387,
      tipologia: "Combinato",
      dimensioni: "201x60x68",
      classe: "C",
      prezzo: 749.99,
      consumo: 290, // kWh/anno
      caratteristichePositive: [
        "Grande capacità (387 litri)",
        "Door & Linear Cooling per temperatura uniforme",
        "Fresh Converter per conservazione ottimale",
        "Wine Rack (portabottiglie)"
      ],
      caratteristicheNegative: [
        "Prezzo elevato",
        "Dimensioni imponenti"
      ],
      immagine: "https://via.placeholder.com/400x300?text=LG+GBV3200CPY",
      urlAcquisto: "https://www.amazon.it/s?k=LG+GBV3200CPY"
    },
    {
      id: 16,
      marca: "Samsung",
      modello: "RS62DG5003M9EF",
      capacita: 652,
      tipologia: "Side by Side",
      dimensioni: "178x91.2x71.6",
      classe: "E",
      prezzo: 999.99,
      consumo: 370, // kWh/anno
      caratteristichePositive: [
        "Enorme capacità (652 litri)",
        "SmartThings Energy per monitoraggio consumi",
        "All-around Cooling per temperatura uniforme",
        "Power Cool/Freeze per raffreddamento rapido"
      ],
      caratteristicheNegative: [
        "Prezzo elevato",
        "Dimensioni notevoli, richiede molto spazio",
        "Consumo energetico alto"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Samsung+RS62DG5003M9EF",
      urlAcquisto: "https://www.amazon.it/s?k=Samsung+RS62DG5003M9EF"
    },
    {
      id: 17,
      marca: "PremierTech",
      modello: "PT-F60B",
      capacita: 58,
      tipologia: "Mini Frigo",
      dimensioni: "85x44x48",
      classe: "F",
      prezzo: 129.90,
      consumo: 100, // kWh/anno stimato
      caratteristichePositive: [
        "Compatto, facile da posizionare",
        "Prezzo molto basso",
        "Ideale come frigorifero aggiuntivo",
        "Silenzioso"
      ],
      caratteristicheNegative: [
        "Capacità molto ridotta (insufficiente da solo)",
        "Classe energetica F"
      ],
      immagine: "https://via.placeholder.com/400x300?text=PremierTech+PT-F60B",
      urlAcquisto: "https://www.amazon.it/s?k=PremierTech+PT-F60B"
    },
    {
      id: 18,
      marca: "Hisense",
      modello: "MUR48092E",
      capacita: 94,
      tipologia: "Monoporta",
      dimensioni: "85x48x45",
      classe: "E",
      prezzo: 179.99,
      consumo: 120, // kWh/anno stimato
      caratteristichePositive: [
        "Compatto, ideale per spazi ridotti",
        "Prezzo basso",
        "Zona freezer inclusa",
        "Silenzioso"
      ],
      caratteristicheNegative: [
        "Capacità molto ridotta (insufficiente da solo)",
        "Classe energetica E"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Hisense+MUR48092E",
      urlAcquisto: "https://www.amazon.it/s?k=Hisense+MUR48092E"
    },
    {
      id: 19,
      marca: "Samsung",
      modello: "RS65DG54M3B1EF",
      capacita: 635,
      tipologia: "Side by Side",
      dimensioni: "178x91x72",
      classe: "E",
      prezzo: 1199.99,
      consumo: 380, // kWh/anno stimato
      caratteristichePositive: [
        "Grande capacità (635 litri)",
        "Design elegante in antracite",
        "No Frost, sbrinamento non necessario",
        "Dispenser acqua/ghiaccio"
      ],
      caratteristicheNegative: [
        "Prezzo elevato",
        "Dimensioni notevoli, richiede molto spazio",
        "Classe energetica E (consumo alto)"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Samsung+RS65DG54M3B1EF",
      urlAcquisto: "https://www.amazon.it/Samsung-RS65DG54M3B1EF-Frigorifero-Antracite-energetica/dp/B0D42B5T11"
    },
    {
      id: 20,
      marca: "Midea",
      modello: "MERB276FGE02A",
      capacita: 270,
      tipologia: "Combinato",
      dimensioni: "170x54x58",
      classe: "E",
      prezzo: 449.99,
      consumo: 219, // kWh/anno
      caratteristichePositive: [
        "No Frost, sbrinamento automatico",
        "Capacità adeguata per ufficio piccolo",
        "Termostato regolabile",
        "Design in acciaio inox"
      ],
      caratteristicheNegative: [
        "Classe energetica E",
        "Meno funzionalità avanzate rispetto ad altri modelli"
      ],
      immagine: "https://via.placeholder.com/400x300?text=Midea+MERB276FGE02A",
      urlAcquisto: "https://www.amazon.it/s?k=Midea+MERB276FGE02A"
    }
  ]);

  // Costo energia per kWh a Udine (in euro)
  const costoEnergiaKwh = 0.09;

  // Stato per la ricerca e filtri
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFrigo, setCurrentFrigo] = useState(null);
  const [filtriAttivi, setFiltriAttivi] = useState({
    capacita: null,
    classe: null,
    budget: null
  });
  
  // Funzione per applicare i filtri
  const applyFilters = (frigoriferi) => {
    return frigoriferi.filter(frigo => {
      let matchesSearch = true;
      
      // Filtro per termine di ricerca
      if (searchTerm) {
        matchesSearch = 
          frigo.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
          frigo.modello.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${frigo.marca} ${frigo.modello}`.toLowerCase().includes(searchTerm.toLowerCase());
      }
      
      // Filtro per capacità
      let matchesCapacity = true;
      if (filtriAttivi.capacita) {
        if (filtriAttivi.capacita === 'small') {
          matchesCapacity = frigo.capacita < 200;
        } else if (filtriAttivi.capacita === 'medium') {
          matchesCapacity = frigo.capacita >= 200 && frigo.capacita < 350;
        } else if (filtriAttivi.capacita === 'large') {
          matchesCapacity = frigo.capacita >= 350;
        }
      }
      
      // Filtro per classe energetica
      let matchesClass = true;
      if (filtriAttivi.classe) {
        matchesClass = frigo.classe === filtriAttivi.classe;
      }
      
      // Filtro per budget
      let matchesBudget = true;
      if (filtriAttivi.budget) {
        if (filtriAttivi.budget === 'low') {
          matchesBudget = frigo.prezzo < 300;
        } else if (filtriAttivi.budget === 'medium') {
          matchesBudget = frigo.prezzo >= 300 && frigo.prezzo < 600;
        } else if (filtriAttivi.budget === 'high') {
          matchesBudget = frigo.prezzo >= 600;
        }
      }
      
      return matchesSearch && matchesCapacity && matchesClass && matchesBudget;
    });
  };
  
  // Frigoriferi filtrati
  const [frigoriferiFiltrati, setFrigoriferiFiltrati] = useState(frigoriferi);
  
  // Applicare i filtri quando cambiano
  useEffect(() => {
    setFrigoriferiFiltrati(applyFilters(frigoriferi));
  }, [searchTerm, filtriAttivi, frigoriferi]);
  
  // Calcola il consumo annuale in euro
  const calcolaConsumoAnnuale = (consumo) => {
    return (consumo * costoEnergiaKwh).toFixed(2);
  };
  
  // Calcola il costo al litro
  const calcolaCostoAlLitro = (prezzo, capacita) => {
    return (prezzo / capacita).toFixed(2);
  };
  
  // Formato euro
  const formatoEuro = (valore) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(valore);
  };
  
  // Determinare la classe di colore per l'efficienza energetica
  const getClassColor = (classe) => {
    switch (classe) {
      case 'A': return 'bg-green-500';
      case 'B': return 'bg-green-400';
      case 'C': return 'bg-green-300';
      case 'D': return 'bg-yellow-400';
      case 'E': return 'bg-yellow-500';
      case 'F': return 'bg-orange-500';
      case 'G': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };
  
  // Gestire il click su un frigorifero
  const handleFrigoClick = (frigo) => {
    setCurrentFrigo(frigo);
  };
  
  // Resettare i filtri
  const resetFiltri = () => {
    setSearchTerm('');
    setFiltriAttivi({
      capacita: null,
      classe: null,
      budget: null
    });
  };
  
  // Slider delle card
  const sliderRef = useRef(null);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Aggiunta di un effetto visivo quando il componente viene montato
  // Questo crea una leggera animazione di fade-in per l'intera applicazione
  useEffect(() => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.opacity = 1;
      document.body.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-2xl font-bold mb-2 md:mb-0">Comparatore Frigoriferi per Ufficio</h1>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Cerca per marca o modello..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              {searchTerm && (
                <button 
                  className="absolute right-3 top-2.5"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Filtri */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <label className="text-sm font-medium mr-2">Capacità:</label>
              <select 
                className="p-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filtriAttivi.capacita || ''}
                onChange={(e) => setFiltriAttivi({...filtriAttivi, capacita: e.target.value || null})}
              >
                <option value="">Tutte</option>
                <option value="small">Piccola (&lt; 200L)</option>
                <option value="medium">Media (200-350L)</option>
                <option value="large">Grande (&gt; 350L)</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <label className="text-sm font-medium mr-2">Classe energetica:</label>
              <select 
                className="p-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filtriAttivi.classe || ''}
                onChange={(e) => setFiltriAttivi({...filtriAttivi, classe: e.target.value || null})}
              >
                <option value="">Tutte</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <label className="text-sm font-medium mr-2">Budget:</label>
              <select 
                className="p-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filtriAttivi.budget || ''}
                onChange={(e) => setFiltriAttivi({...filtriAttivi, budget: e.target.value || null})}
              >
                <option value="">Tutti</option>
                <option value="low">Economico (&lt; 300€)</option>
                <option value="medium">Medio (300-600€)</option>
                <option value="high">Alto (&gt; 600€)</option>
              </select>
            </div>
            
            <button 
              className="ml-auto px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
              onClick={resetFiltri}
            >
              Resetta filtri
            </button>
          </div>
        </div>
      </div>

      {/* Risultati */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {frigoriferiFiltrati.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Nessun frigorifero trovato</h2>
            <p>Prova a modificare i filtri o a cercare un altro modello.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              onClick={resetFiltri}
            >
              Resetta filtri
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                {frigoriferiFiltrati.length} frigoriferi trovati
              </h2>
              <div className="flex space-x-2">
                <button 
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={scrollLeft}
                  aria-label="Scorri a sinistra"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={scrollRight}
                  aria-label="Scorri a destra"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div 
              ref={sliderRef}
              className="flex space-x-4 py-2 overflow-x-auto pb-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {frigoriferiFiltrati.map((frigo) => (
                <div 
                  key={frigo.id}
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform duration-200"
                  onClick={() => handleFrigoClick(frigo)}
                >
                  <div className="h-48 bg-blue-50 border-b flex items-center justify-center p-4">
                    <img 
                      src={frigo.immagine || "https://via.placeholder.com/200"}
                      alt={`${frigo.marca} ${frigo.modello}`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/200?text=Immagine+non+disponibile";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold">{frigo.marca}</h3>
                        <p className="text-sm text-gray-600">{frigo.modello}</p>
                      </div>
                      <div className={`${getClassColor(frigo.classe)} text-white font-bold rounded-full w-7 h-7 flex items-center justify-center`}>
                        {frigo.classe}
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <p className="flex justify-between">
                        <span className="text-gray-600">Capacità:</span>
                        <span className="font-medium">{frigo.capacita} litri</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Consumo:</span>
                        <span className="font-medium">{frigo.consumo} kWh/anno</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Costo annuo:</span>
                        <span className="font-medium">{formatoEuro(calcolaConsumoAnnuale(frigo.consumo))}</span>
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="text-xl font-bold text-right">
                        {formatoEuro(frigo.prezzo)}
                      </div>
                      <div className="text-xs text-right text-gray-500">
                        {formatoEuro(calcolaCostoAlLitro(frigo.prezzo, frigo.capacita))} /litro
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Dettaglio frigorifero */}
        {currentFrigo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center shadow-sm">
                <h2 className="text-xl font-bold">{currentFrigo.marca} {currentFrigo.modello}</h2>
                <button 
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => setCurrentFrigo(null)}
                  aria-label="Chiudi dettaglio"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center bg-blue-50 p-6 rounded-lg">
                    <img 
                      src={currentFrigo.immagine || "https://via.placeholder.com/400"}
                      alt={`${currentFrigo.marca} ${currentFrigo.modello}`}
                      className="max-w-full max-h-64 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400?text=Immagine+non+disponibile";
                      }}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{currentFrigo.marca} {currentFrigo.modello}</h3>
                        <p className="text-gray-600">{currentFrigo.tipologia}</p>
                      </div>
                      <div className={`${getClassColor(currentFrigo.classe)} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl`}>
                        {currentFrigo.classe}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                      <div>
                        <p className="text-gray-600 text-sm">Capacità</p>
                        <p className="font-medium">{currentFrigo.capacita} litri</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Dimensioni (cm)</p>
                        <p className="font-medium">{currentFrigo.dimensioni}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Consumo annuo</p>
                        <p className="font-medium">{currentFrigo.consumo} kWh/anno</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Costo annuo energia</p>
                        <p className="font-medium">{formatoEuro(calcolaConsumoAnnuale(currentFrigo.consumo))}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {formatoEuro(currentFrigo.prezzo)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Euro className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{formatoEuro(calcolaCostoAlLitro(currentFrigo.prezzo, currentFrigo.capacita))} per litro</span>
                      </div>
                    </div>
                    
                    <a 
                      href={currentFrigo.urlAcquisto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Acquista su Amazon
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center mr-2">+</span>
                      Caratteristiche positive
                    </h3>
                    <ul className="space-y-2">
                      {currentFrigo.caratteristichePositive.map((caratteristica, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-4 h-4 rounded-full bg-green-500 mt-1 mr-2"></span>
                          <span>{caratteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="inline-block w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center mr-2">-</span>
                      Caratteristiche negative
                    </h3>
                    <ul className="space-y-2">
                      {currentFrigo.caratteristicheNegative.map((caratteristica, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-4 h-4 rounded-full bg-red-500 mt-1 mr-2"></span>
                          <span>{caratteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      Le stime di consumo energetico sono calcolate utilizzando un costo medio dell'energia elettrica di {formatoEuro(costoEnergiaKwh)} per kWh a Udine. I consumi effettivi possono variare in base all'utilizzo e alle condizioni ambientali.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>Prezzi e disponibilità aggiornati a maggio 2025. Le immagini sono puramente illustrative.</p>
          <p className="mt-1">Costo medio energia elettrica a Udine: {formatoEuro(costoEnergiaKwh)} per kWh.</p>
          <p className="mt-3">
            <a 
              href="https://github.com/smi-enrerm/frigoriferi-smi-udine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center justify-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Codice sorgente su GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;