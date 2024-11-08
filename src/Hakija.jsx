import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Hakija({ hakijat }) {
    const { id } = useParams(); // Hakee hakijan ID:n URL-osoitteesta
    const hakija = hakijat.find(h => h.id === parseInt(id)); // Hakee hakijan ID:n perusteella

    // Tarkista, löytyikö hakija annetulla ID:llä
    if (!hakija) {
        return <p>Hakijaa ei löytynyt.</p>;
    }

    return (
        <div>
            <h2>{hakija.name}</h2>
            <p>Ammattinimike: {hakija.ammattinimike}</p>
            <p>Työkokemus: {hakija.työkokemus} vuotta</p>
            <p>Kielet: {hakija.kielet.join(', ')}</p>
            <p>Sertifikaatit: {hakija.sertifikaatit.join(', ')}</p>
            {/* Lisää muut halutut tiedot */}
        </div>
    );
}

Hakija.propTypes = {
    hakijat: PropTypes.array.isRequired // Validoi hakijat-prop
};

export default Hakija


