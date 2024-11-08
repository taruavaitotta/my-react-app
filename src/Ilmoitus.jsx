import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Ilmoitus({ hakijat, setMatchedHakijat }) {
    const [valitutKielet, setValitutKielet] = useState([]);
    const [valitutTietokannat, setValitutTietokannat] = useState([]);
    const [valitutPilvipalvelut, setValitutPilvipalvelut] = useState([]);
    const [valitutTiimityötaidot, setValitutTiimityötaidot] = useState([]);
    const [valitutSertifikaatit, setValitutSertifikaatit] = useState([]);
    const [valitutYmpäristöarvot, setValitutYmpäristöarvot] = useState([]);
    const [valitutSosiaalinenVastuullisuus, setValitutSosiaalinenVastuullisuus] = useState([]);
    const [valitutEettisyys, setValitutEettisyys] = useState([]);

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

    const handleCheckboxChange = (e, setFunction) => {
        const value = e.target.value;
        setFunction(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const handleSearch = () => {
        const matches = hakijat.filter(hakija => 
            (valitutKielet.length === 0 || valitutKielet.some(k => hakija.kielet.includes(k))) &&
            (valitutTietokannat.length === 0 || valitutTietokannat.some(t => hakija.tietokannat.includes(t))) &&
            (valitutPilvipalvelut.length === 0 || valitutPilvipalvelut.some(p => hakija.pilvipalvelut.includes(p))) &&
            (valitutTiimityötaidot.length === 0 || valitutTiimityötaidot.some(t => hakija.tiimityotaidot.includes(t))) &&
            (valitutSertifikaatit.length === 0 || valitutSertifikaatit.some(s => hakija.sertifikaatit.includes(s))) &&
            (valitutYmpäristöarvot.length === 0 || valitutYmpäristöarvot.some(y => hakija.ympäristöarvot.includes(y))) &&
            (valitutSosiaalinenVastuullisuus.length === 0 || valitutSosiaalinenVastuullisuus.some(s => hakija.sosiaalinenvastuullisuus.includes(s))) &&
            (valitutEettisyys.length === 0 || valitutEettisyys.some(e => hakija.eettisyys.includes(e)))
        );
        setMatchedHakijat(matches);
    };

    return (
        <div>
            <h3>Valitse kriteerit</h3>
            <h4>Ohjelmointikielet</h4>
            {ohjelmointikielet.map(kieli => (
                <div key={kieli.id}>
                    <input type="checkbox" value={kieli.name} onChange={(e) => handleCheckboxChange(e, setValitutKielet, valitutKielet)} />
                    {kieli.name}
                </div>
            ))}

            <h4>Tietokannat</h4>
            {tietokannat.map(tietokanta => (
                <div key={tietokanta.id}>
                    <input type="checkbox" value={tietokanta.name} onChange={(e) => handleCheckboxChange(e, setValitutTietokannat, valitutTietokannat)} />
                    {tietokanta.name}
                </div>
            ))}

            <h4>Pilvipalvelut</h4>
            {pilvipalvelut.map(pilvipalvelu => (
                <div key={pilvipalvelu.id}>
                    <input type="checkbox" value={pilvipalvelu.name} onChange={(e) => handleCheckboxChange(e, setValitutPilvipalvelut, valitutPilvipalvelut)} />
                    {pilvipalvelu.name}
                </div>
            ))}

            <h4>Tiimityötaidot</h4>
            {tiimityotaidot.map(taito => (
                <div key={taito.id}>
                    <input type="checkbox" value={taito.name} onChange={(e) => handleCheckboxChange(e, setValitutTiimityötaidot, valitutTiimityötaidot)} />
                    {taito.name}
                </div>
            ))}

            <h4>Sertifikaatit</h4>
            {sertifikaatit.map(sertifikaatti => (
                <div key={sertifikaatti.id}>
                    <input type="checkbox" value={sertifikaatti.name} onChange={(e) => handleCheckboxChange(e, setValitutSertifikaatit, valitutSertifikaatit)} />
                    {sertifikaatti.name}
                </div>
            ))}

            <h4>Ympäristöarvot</h4>
            {ympäristöarvot.map(arvo => (
                <div key={arvo.id}>
                    <input type="checkbox" value={arvo.name} onChange={(e) => handleCheckboxChange(e, setValitutYmpäristöarvot, valitutYmpäristöarvot)} />
                    {arvo.name}
                </div>
            ))}

            <h4>Sosiaalinen vastuullisuus</h4>
            {sosiaalinenvastuullisuus.map(vastuullisuus => (
                <div key={vastuullisuus.id}>
                    <input type="checkbox" value={vastuullisuus.name} onChange={(e) => handleCheckboxChange(e, setValitutSosiaalinenVastuullisuus, valitutSosiaalinenVastuullisuus)} />
                    {vastuullisuus.name}
                </div>
            ))}

            <h4>Eettisyys</h4>
            {eettisyys.map(eet => (
                <div key={eet.id}>
                    <input type="checkbox" value={eet.name} onChange={(e) => handleCheckboxChange(e, setValitutEettisyys, valitutEettisyys)} />
                    {eet.name}
                </div>
            ))}
            <Button label="Etsi hakijat" onClick={handleSearch} />
        </div>
    );
}

Ilmoitus.propTypes = {
    hakijat: PropTypes.array.isRequired,
    setMatchedHakijat: PropTypes.func.isRequired
};

export default Ilmoitus;

