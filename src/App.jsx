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

  //return button
  return(
    <>
      <Ilmoitus items={ohjelmointikielet} category={"Ohjelmointikielet"}/>
      <Ilmoitus items={tietokannat} category={"Tietokannat"}/>
      <Ilmoitus items={pilvipalvelut} category={"Pilvipalvelut"}/>
      <Ilmoitus items={tiimityotaidot} category={"Tiimityötaidot"}/>
      <Ilmoitus items={sertifikaatit} category={"Sertifikaatit"}/>
      <Card ammattinimike="Ohjelmistokehittäjä" työkokemus={5} onKiinnostunut={true} />
      <Card ammattinimike="Markkinoinnin asiantuntija" työkokemus={10} onKiinnostunut={false} />
      <Card ammattinimike="Suunnittelija" työkokemus={4} onKiinnostunut={true} />
      <Card ammattinimike="Asiantuntija" työkokemus={2} onKiinnostunut={true} />
      <Button />
      
    </>
  );
    
}

export default App




//import Hakijaprofiilit from './Hakijaprofiilit';

