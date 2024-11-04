import { useState } from 'react';
import PropTypes from 'prop-types';

function Ilmoitus({ hakijat, setMatchedHakijat }) {
    const [valitutKielet, setValitutKielet] = useState([]);
    const [valitutTietokannat, setValitutTietokannat] = useState([]);
    const [valitutPilvipalvelut, setValitutPilvipalvelut] = useState([]);
    const [valitutTiimityötaidot, setValitutTiimityötaidot] = useState([]);
    const [valitutSertifikaatit, setValitutSertifikaatit] = useState([]); // Uusi tila sertifikaateille

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

    const handleKieliChange = (e) => {
        const value = e.target.value;
        setValitutKielet(prev => prev.includes(value) ? prev.filter(k => k !== value) : [...prev, value]);
    };

    const handleTietokantaChange = (e) => {
        const value = e.target.value;
        setValitutTietokannat(prev => prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]);
    };

    const handlePilvipalveluChange = (e) => {
        const value = e.target.value;
        setValitutPilvipalvelut(prev => prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]);
    };

    const handleTiimityötaitoChange = (e) => {
        const value = e.target.value;
        setValitutTiimityötaidot(prev => prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]);
    };

    // Uusi käsittelijä sertifikaateille
    const handleSertifikaattiChange = (e) => {
        const value = e.target.value;
        setValitutSertifikaatit(prev => prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]);
    };

    const handleSearch = () => {
        const matches = hakijat.filter(hakija => 
            (valitutKielet.length === 0 || valitutKielet.some(k => hakija.kielet.includes(k))) &&
            (valitutTietokannat.length === 0 || valitutTietokannat.some(t => hakija.tietokannat.includes(t))) &&
            (valitutPilvipalvelut.length === 0 || valitutPilvipalvelut.some(p => hakija.pilvipalvelut.includes(p))) &&
            (valitutTiimityötaidot.length === 0 || valitutTiimityötaidot.some(t => hakija.tiimityotaidot.includes(t))) &&
            (valitutSertifikaatit.length === 0 || valitutSertifikaatit.some(s => hakija.sertifikaatit.includes(s))) // Lisätään sertifikaatit
        );
        setMatchedHakijat(matches);
    };

    return (
        <div>
            <h3>Valitse kriteerit</h3>
            <h4>Ohjelmointikielet</h4>
            {ohjelmointikielet.map(kieli => (
                <div key={kieli.id}>
                    <input type="checkbox" value={kieli.name} onChange={handleKieliChange} />
                    {kieli.name}
                </div>
            ))}

            <h4>Tietokannat</h4>
            {tietokannat.map(tietokanta => (
                <div key={tietokanta.id}>
                    <input type="checkbox" value={tietokanta.name} onChange={handleTietokantaChange} />
                    {tietokanta.name}
                </div>
            ))}

            <h4>Pilvipalvelut</h4>
            {pilvipalvelut.map(pilvipalvelu => (
                <div key={pilvipalvelu.id}>
                    <input type="checkbox" value={pilvipalvelu.name} onChange={handlePilvipalveluChange} />
                    {pilvipalvelu.name}
                </div>
            ))}

            <h4>Tiimityötaidot</h4>
            {tiimityotaidot.map(taito => (
                <div key={taito.id}>
                    <input type="checkbox" value={taito.name} onChange={handleTiimityötaitoChange} />
                    {taito.name}
                </div>
            ))}

            <h4>Sertifikaatit</h4>
            {sertifikaatit.map(sertifikaatti => (
                <div key={sertifikaatti.id}>
                    <input type="checkbox" value={sertifikaatti.name} onChange={handleSertifikaattiChange} />
                    {sertifikaatti.name}
                </div>
            ))}

            <button onClick={handleSearch}>Etsi hakijat</button>
        </div>
    );
}

Ilmoitus.propTypes = {
    hakijat: PropTypes.array.isRequired,
    setMatchedHakijat: PropTypes.func.isRequired
};

export default Ilmoitus

