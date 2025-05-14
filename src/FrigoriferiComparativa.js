import React, { useState } from 'react';
import { Filter, Square, ChevronDown, ChevronUp, Search, X, Thermometer, LayoutGrid, Gauge, Zap, Star, Heart, AlertCircle, ShoppingCart } from 'lucide-react';

// Dati dei frigoriferi
const frigoriferi = [
  {
    id: 1,
    nome: "PremierTech PT-F60B",
    categoria: "Mini",
    capacita: 58,
    prezzo: 139,
    dimensioni: "Compatto (su mobile o ripiano)",
    caratteristiche: ["Porta reversibile", "Classe energetica E", "Bassa rumorosità", "Portabottiglie per 1.5/2/0.75L", "Scomparto per ghiaccio"],
    adattoPer: "Piccoli uffici, frigorifero supplementare",
    immagine: "mini-frigo",
    amazonUrl: "https://www.amazon.it/PremierTech-PT-F60B-frigorifero-Libera-installazione/dp/B07L5MNJMR",
    valutazione: 4.2,
    recensioni: 280,
    pro: ["Ottimo rapporto qualità/prezzo", "Potenza refrigerante efficace", "Silenzioso", "Leggero e trasportabile", "Consumo energetico ridotto"],
    contro: ["Manca illuminazione interna", "Non adatto all'incasso", "Spazio limitato"],
    consumoAnnuo: 105,
    costoAnnuo: 9.45
  },
  {
    id: 2,
    nome: "PremierTech PT-F47B",
    categoria: "Mini",
    capacita: 45,
    prezzo: 104,
    dimensioni: "Compatto (su mobile o ripiano)",
    caratteristiche: ["Porta reversibile", "Classe energetica E", "Silenzioso"],
    adattoPer: "Spazi molto limitati, uso sporadico",
    immagine: "mini-frigo",
    amazonUrl: "https://www.amazon.it/Mini-Frigo-Litri-Ufficio-Camera/dp/B07GT71R6Z",
    valutazione: 4.0,
    recensioni: 200,
    pro: ["Molto compatto", "Risparmio energetico", "Refrigerazione veloce", "Porta bottiglie stabile", "Termostato regolabile"],
    contro: ["Capienza limitata", "Ripiano non regolabile", "Congelatore piccolo"],
    consumoAnnuo: 95,
    costoAnnuo: 8.55
  },
  {
    id: 3,
    nome: "COMFEE' RCD115WH2",
    categoria: "Mini",
    capacita: 92,
    prezzo: 201,
    dimensioni: "47,5 x 44,5 x 84,5 cm (L x P x A)",
    caratteristiche: ["Porta reversibile", "Termostato regolabile", "Illuminazione LED", "Silenzioso", "Frigorifero 80L + Congelatore 12L"],
    adattoPer: "Piccoli uffici con necessità di congelatore",
    immagine: "frigo-piccolo",
    amazonUrl: "https://www.amazon.it/COMFEE-RCD115WH2-Congelatore-Frigorifero-Temperatura/dp/B0CB6564W8",
    valutazione: 4.1,
    recensioni: 150,
    pro: ["Buona costruzione", "Silenzioso", "Porta reversibile", "Illuminazione LED", "Ottimo rapporto qualità/prezzo"],
    contro: ["Manca cassetto per frutta/verdura", "Spazio interno non ottimizzato"],
    consumoAnnuo: 130,
    costoAnnuo: 11.70
  },
  {
    id: 4,
    nome: "Hisense RR220D4BDE",
    categoria: "Medio",
    capacita: 165,
    prezzo: 280,
    dimensioni: "51,5 x 51,4 x 126,5 cm",
    caratteristiche: ["Classe energetica E", "Design retrò", "Porta reversibile", "Portabottiglie", "Illuminazione LED", "Frigorifero 150L + Congelatore 15L"],
    adattoPer: "Uffici di medie dimensioni, 5-7 persone",
    immagine: "frigo-medio",
    amazonUrl: "https://www.amazon.it/Hisense-RR220D4BDE-monoporta-conservazione-controllo/dp/B091GWQ9QQ",
    valutazione: 4.3,
    recensioni: 320,
    pro: ["Capienza adeguata", "Design elegante", "Raffreddamento veloce", "Silenzioso", "Facile da pulire"],
    contro: ["Prezzo elevato", "Peso considerevole"],
    consumoAnnuo: 141,
    costoAnnuo: 12.69
  },
  {
    id: 5,
    nome: "Hisense RR220D4ERE",
    categoria: "Medio",
    capacita: 165,
    prezzo: 290,
    dimensioni: "51,5 x 51,4 x 126,5 cm",
    caratteristiche: ["Versione rossa", "Classe energetica E", "Design retrò", "Porta reversibile", "Portabottiglie", "Illuminazione LED", "Frigorifero 150L + Congelatore 15L"],
    adattoPer: "Uffici di medie dimensioni, 5-7 persone",
    immagine: "frigo-medio",
    amazonUrl: "https://www.amazon.it/Hisense-Frigorifero-Monoporta-RR220D4ERE-Energetica/dp/B0D6GJH4C8",
    valutazione: 4.3,
    recensioni: 270,
    pro: ["Design colorato", "Buona capacità", "Raffreddamento efficiente", "Organizzazione interna", "Bassa rumorosità"],
    contro: ["Prezzo maggiorato per il colore", "Dimensioni importanti"],
    consumoAnnuo: 141,
    costoAnnuo: 12.69
  },
  {
    id: 6,
    nome: "Bomann VS 7316.1",
    categoria: "Grande",
    capacita: 242,
    prezzo: 350,
    dimensioni: "Grande (versioni bianco o inox)",
    caratteristiche: ["Illuminazione LED", "Porta reversibile", "5 ripiani in vetro", "4 balconcini porta", "Cassetto verdure trasparente"],
    adattoPer: "Uffici con 8-10 persone",
    immagine: "frigo-grande",
    amazonUrl: "https://www.amazon.it/Bomann-7316-Frigorifero-Illuminazione-Apertura-sostituibile/dp/B083KT8M13",
    valutazione: 4.0,
    recensioni: 150,
    pro: ["Grande capacità", "Efficienza energetica", "Organizzazione interna", "Silenzioso", "Sistema di sbrinamento automatico"],
    contro: ["Prezzo elevato", "Dimensioni importanti", "Alcuni problemi di consegna segnalati"],
    consumoAnnuo: 101,
    costoAnnuo: 9.09
  },
  {
    id: 7,
    nome: "BEKO RCSA330K30WN",
    categoria: "Grande",
    capacita: 295,
    prezzo: 400,
    dimensioni: "Grande, combinato",
    caratteristiche: ["Combinato", "Classe F", "Colore bianco"],
    adattoPer: "Uffici grandi, 10+ persone",
    immagine: "frigo-grande",
    amazonUrl: "https://www.amazon.it/s?k=BEKO+RCSA330K30WN",
    valutazione: 4.1,
    recensioni: 180,
    pro: ["Ampia capacità", "Buona organizzazione interna", "Facile da pulire", "Design sobrio"],
    contro: ["Classe energetica F (consumi più alti)", "Dimensioni ingombranti"],
    consumoAnnuo: 195,
    costoAnnuo: 17.55
  },
  {
    id: 8,
    nome: "BEKO B5RMLNE444HX",
    categoria: "Grande",
    capacita: 381,
    prezzo: 450,
    dimensioni: "Grande, monoporta",
    caratteristiche: ["Monoporta", "Total NO FROST", "Classe E", "Display touch", "AeroFlow", "Porta bottiglie", "Colore inox"],
    adattoPer: "Uffici grandi, 10+ persone",
    immagine: "frigo-grande-premium",
    amazonUrl: "https://www.amazon.it/s?k=BEKO+B5RMLNE444HX",
    valutazione: 4.4,
    recensioni: 210,
    pro: ["Capacità molto grande", "No Frost (senza formazione di ghiaccio)", "Tecnologie avanzate", "Design premium", "Display touch"],
    contro: ["Prezzo elevato", "Ingombro considerevole", "Consumi superiori"],
    consumoAnnuo: 180,
    costoAnnuo: 16.20
  }
];

// Componente per il disegno stilizzato del frigorifero
const FrigoIcon = ({ tipo }) => {
  switch (tipo) {
    case 'mini-frigo':
      return (
        <div className="w-16 h-24 bg-gray-100 rounded border-2 border-gray-300 flex flex-col items-center justify-center relative">
          <div className="w-12 h-1 bg-gray-400 absolute top-6"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full absolute bottom-2 right-2"></div>
        </div>
      );
    case 'frigo-piccolo':
      return (
        <div className="w-16 h-28 bg-gray-100 rounded border-2 border-gray-300 flex flex-col items-center justify-center relative">
          <div className="w-12 h-1 bg-gray-400 absolute top-5"></div>
          <div className="w-12 h-1 bg-gray-400 absolute top-10"></div>
          <div className="w-12 h-1 bg-gray-400 absolute top-16"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full absolute bottom-2 right-2"></div>
        </div>
      );
    case 'frigo-medio':
      return (
        <div className="w-16 h-36 bg-gray-100 rounded border-2 border-gray-300 flex flex-col items-center justify-center relative">
          <div className="w-12 h-1 bg-gray-400 absolute top-6"></div>
          <div className="w-12 h-1 bg-gray-400 absolute top-14"></div>
          <div className="w-12 h-1 bg-gray-400 absolute top-22"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full absolute bottom-2 right-2"></div>
        </div>
      );
    case 'frigo-grande':
      return (
        <div className="w-18 h-44 bg-gray-100 rounded border-2 border-gray-300 flex flex-col items-center justify-center relative">
          <div className="w-14 h-1 bg-gray-400 absolute top-7"></div>
          <div className="w-14 h-1 bg-gray-400 absolute top-16"></div>
          <div className="w-14 h-1 bg-gray-400 absolute top-25"></div>
          <div className="w-14 h-1 bg-gray-400 absolute top-34"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full absolute bottom-2 right-2"></div>
        </div>
      );
    case 'frigo-grande-premium':
      return (
        <div className="w-20 h-48 bg-gray-100 rounded border-2 border-gray-300 flex flex-col items-center justify-center relative">
          <div className="w-16 h-1 bg-gray-400 absolute top-8"></div>
          <div className="w-16 h-1 bg-gray-400 absolute top-18"></div>
          <div className="w-16 h-1 bg-gray-400 absolute top-28"></div>
          <div className="w-16 h-1 bg-gray-400 absolute top-38"></div>
          <div className="w-4 h-4 bg-gray-400 rounded absolute top-2 right-2"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full absolute bottom-2 right-2"></div>
        </div>
      );
    default:
      return (
        <div className="w-16 h-24 bg-gray-100 rounded border-2 border-gray-300"></div>
      );
  }
};

// Componente principale
const FrigoriferiComparativa = () => {
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [ordinamento, setOrdinamento] = useState({ campo: '', direzione: 'asc' });
  const [expandedCard, setExpandedCard] = useState(null);

  // Gestisce l'ordinamento
  const handleOrdinamento = (campo) => {
    if (ordinamento.campo === campo) {
      setOrdinamento({
        campo,
        direzione: ordinamento.direzione === 'asc' ? 'desc' : 'asc'
      });
    } else {
      setOrdinamento({ campo, direzione: 'asc' });
    }
  };

  // Filtra e ordina i frigoriferi
  const frigorifieriFiltrati = frigoriferi
    .filter(frigo => {
      const matchNome = frigo.nome.toLowerCase().includes(filtro.toLowerCase());
      const matchCategoria = categoriaFiltro === '' || frigo.categoria === categoriaFiltro;
      return matchNome && matchCategoria;
    })
    .sort((a, b) => {
      if (!ordinamento.campo) return 0;
      
      const valA = a[ordinamento.campo];
      const valB = b[ordinamento.campo];
      
      if (typeof valA === 'string') {
        return ordinamento.direzione === 'asc' 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      } else {
        return ordinamento.direzione === 'asc' 
          ? valA - valB 
          : valB - valA;
      }
    });

  // Genera la freccia per l'ordinamento
  const renderSortArrow = (campo) => {
    if (ordinamento.campo !== campo) return null;
    return ordinamento.direzione === 'asc' 
      ? <ChevronUp className="inline w-4 h-4" /> 
      : <ChevronDown className="inline w-4 h-4" />;
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Comparativa Frigoriferi per Ufficio SMI Udine</h1>
      
      {/* Filtri */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cerca per nome..."
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {filtro && (
            <button 
              onClick={() => setFiltro('')}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            value={categoriaFiltro}
            onChange={e => setCategoriaFiltro(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tutte le categorie</option>
            <option value="Mini">Mini</option>
            <option value="Medio">Medio</option>
            <option value="Grande">Grande</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
      
      {/* Opzioni di ordinamento */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="font-medium text-gray-700">Ordina per:</span>
        <button 
          onClick={() => handleOrdinamento('capacita')}
          className={`px-3 py-1 text-sm rounded-full border ${ordinamento.campo === 'capacita' ? 'bg-blue-100 border-blue-300' : 'border-gray-300'}`}
        >
          Capacità {renderSortArrow('capacita')}
        </button>
        <button 
          onClick={() => handleOrdinamento('prezzo')}
          className={`px-3 py-1 text-sm rounded-full border ${ordinamento.campo === 'prezzo' ? 'bg-blue-100 border-blue-300' : 'border-gray-300'}`}
        >
          Prezzo {renderSortArrow('prezzo')}
        </button>
        <button 
          onClick={() => handleOrdinamento('categoria')}
          className={`px-3 py-1 text-sm rounded-full border ${ordinamento.campo === 'categoria' ? 'bg-blue-100 border-blue-300' : 'border-gray-300'}`}
        >
          Categoria {renderSortArrow('categoria')}
        </button>
        <button 
          onClick={() => handleOrdinamento('valutazione')}
          className={`px-3 py-1 text-sm rounded-full border ${ordinamento.campo === 'valutazione' ? 'bg-blue-100 border-blue-300' : 'border-gray-300'}`}
        >
          Valutazione {renderSortArrow('valutazione')}
        </button>
        <button 
          onClick={() => handleOrdinamento('consumoAnnuo')}
          className={`px-3 py-1 text-sm rounded-full border ${ordinamento.campo === 'consumoAnnuo' ? 'bg-blue-100 border-blue-300' : 'border-gray-300'}`}
        >
          Consumo {renderSortArrow('consumoAnnuo')}
        </button>
      </div>
      
      {/* Risultati */}
      {frigorifieriFiltrati.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Nessun frigorifero corrisponde ai criteri di ricerca.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frigorifieriFiltrati.map(frigo => (
            <div 
              key={frigo.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedCard === frigo.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            >
              {/* Header */}
              <div className="p-5 bg-gray-50 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{frigo.nome}</h2>
                    <div className="mt-1 flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        frigo.categoria === 'Mini' ? 'bg-yellow-100 text-yellow-800' :
                        frigo.categoria === 'Medio' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {frigo.categoria}
                      </span>
                    </div>
                  </div>
                  <FrigoIcon tipo={frigo.immagine} />
                </div>
              </div>
              
              {/* Specifiche principali */}
              <div className="p-5">
                <div className="flex justify-between mb-3">
                  <div className="flex items-center">
                    <LayoutGrid className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="text-sm font-medium">{frigo.capacita} Litri</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-amber-600" />
                    <span className="text-sm font-medium">{frigo.prezzo} €</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm ml-1 font-medium">{frigo.valutazione}/5</span>
                    <span className="text-xs ml-2 text-gray-500">({frigo.recensioni} recensioni)</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-sm">
                  <Gauge className="w-4 h-4 mr-2 text-green-600" />
                  <span>Consumo: {frigo.consumoAnnuo} kWh/anno ({frigo.costoAnnuo} €/anno)</span>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">{frigo.dimensioni}</p>
                
                {/* Bottone per espandere/collassare i dettagli */}
                <button
                  onClick={() => setExpandedCard(expandedCard === frigo.id ? null : frigo.id)}
                  className="w-full text-left flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {expandedCard === frigo.id ? 'Nascondi dettagli' : 'Mostra dettagli'}
                  {expandedCard === frigo.id ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
                
                {/* Dettagli espandibili */}
                {expandedCard === frigo.id && (
                  <div className="mt-4 text-sm text-gray-700 border-t pt-4">
                    <h3 className="font-medium mb-2">Caratteristiche:</h3>
                    <ul className="list-disc list-inside mb-3 space-y-1">
                      {frigo.caratteristiche.map((car, index) => (
                        <li key={index}>{car}</li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <h3 className="font-medium flex items-center mb-2 text-green-700">
                          <Heart className="w-4 h-4 mr-1" /> Pro:
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-green-800">
                          {frigo.pro.slice(0, 3).map((item, index) => (
                            <li key={index} className="text-xs">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium flex items-center mb-2 text-red-700">
                          <AlertCircle className="w-4 h-4 mr-1" /> Contro:
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-red-800">
                          {frigo.contro.slice(0, 3).map((item, index) => (
                            <li key={index} className="text-xs">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="font-medium mb-2">Adatto per:</h3>
                    <p className="mb-4">{frigo.adattoPer}</p>
                    
                    <a 
                      href={frigo.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Acquista su Amazon
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Info finale */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p className="mb-2">Comparativa realizzata per SMI Udine. Prezzi e caratteristiche aggiornati a maggio 2025.</p>
        <p className="mb-2">Il costo energetico annuo è calcolato con una tariffa media di 0,090 €/kWh (Udine, maggio 2025).</p>
        <p>Clicca su "Mostra dettagli" per vedere tutte le caratteristiche, pro e contro, e il link per l'acquisto su Amazon.</p>
      </div>
    </div>
  );
};

export default FrigoriferiComparativa;