import Card from './Card.jsx'
import Button from './Button.jsx'
import Ilmoitus from './Ilmoitus'

//import Button

function App() {

  const ohjelmointikielet = [
    { id: 1, name: "Python" },
    { id: 2, name: "Java" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "TypeScript" },
    { id: 5, name: "C#" },
    { id: 6, name: "C++" },
    { id: 7, name: "PHP" },
    { id: 8, name: "Ruby" },
    { id: 9, name: "Go (Golang)" },
    { id: 10, name: "Swift" },
    { id: 11, name: "Kotlin" }
];

const tietokannat = [
    { id: 12, name: "SQL" },
    { id: 13, name: "NoSQL" },
    { id: 14, name: "Mongo" },
    { id: 15, name: "Firebase" }
];

const pilvipalvelut = [
    { id: 16, name: "AWS" },
    { id: 17, name: "Azure" }
];

const tiimityotaidot = [
    { id: 18, name: "Vuorovaikutustaidot" },
    { id: 19, name: "Tiimityötaidot" },
    { id: 20, name: "Ongelmanratkaisutaidot" },
    { id: 21, name: "Luovuus" }
];

const sertifikaatit = [
    { id: 22, name: "Google Marketing" },
    { id: 23, name: "MongoDB" },
    { id: 24, name: "AWS" },
    { id: 25, name: "Microsoft Power Automate" },
    { id: 26, name: "Project management" },
    { id: 27, name: "Linux" },
    { id: 28, name: "Cisco" }
];

const ympäristöarvot = [
    { id: 29, name: "Hiilineutraaliustavoite" },
    { id: 30, name: "Ilmastonmuutoksen torjuminen" },
    { id: 31, name: "Luonnon monimuotoisuuden suojelu" }
];

const sosiaalinenvastuullisuus = [
    { id: 32, name: "Palkkatasa-arvo" },
    { id: 33, name: "Monimuotoisuus" },
    { id: 34, name: "Inklusiivisuus" },
    { id: 35, name: "Joustavat työajat" },
    { id: 36, name: "Etätyömahdollisuus" },
    { id: 37, name: "Kattavat työterveyspalvelut" },
    { id: 38, name: "Osaamisen kehittäminen" }
];

const eettisyys = [
  { id: 39, name: "Vastuulliset hankintaketjut" },
  { id: 40, name: "Avoin päätöksenteko" },
  { id: 41, name: "Eettisyysraportointi" },
  { id: 42, name: "Oikeudenmukaisuus" },
  { id: 43, name: "Lahjoitukset hyväntekeväisyyteen" },
  { id: 44, name: "Toimialan kehittäminen" }
];

const kategoriat = {
  Ohjelmointikielet: ohjelmointikielet,
  Tietokannat: tietokannat,
  Pilvipalvelut: pilvipalvelut,
  Tiimityötaidot: tiimityotaidot,
  Sertifikaatit: sertifikaatit,
  Ympäristöarvot: ympäristöarvot,
  SosiaalinenVastuullisuus: sosiaalinenvastuullisuus,
  eettisyys: eettisyys
};




//
  //return button
  return(
    <>
      <Ilmoitus kategoriat={kategoriat} />
      <Card ammattinimike="Ohjelmistokehittäjä" työkokemus={5} onKiinnostunut={true} />
      <Card ammattinimike="Markkinoinnin asiantuntija" työkokemus={10} onKiinnostunut={false} />
      <Card ammattinimike="Suunnittelija" työkokemus={4} onKiinnostunut={true} />
      <Card ammattinimike="Asiantuntija" työkokemus={2} onKiinnostunut={true} />
      <Button />
      
    </>
  );
    
}

export default App






