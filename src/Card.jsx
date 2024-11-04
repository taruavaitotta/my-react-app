
import Button from './Button.jsx';
import Hakijaprofiilit from './Hakijaprofiilit.jsx';
import testikuva from './assets/testikuva.jpg'
import PropTypes from 'prop-types';

function Card({ ammattinimike, työkokemus, onKiinnostunut }){
    return(
        <div className="card">
            <img className="card-image" src={testikuva} alt="profile picture"></img>
            <h2 className="card-title">Profiili</h2>
            <Hakijaprofiilit
                ammattinimike={ammattinimike}
                työkokemus={työkokemus}
                onKiinnostunut={onKiinnostunut}
      />
            <Button />

        </div>
    );

}
Card.propTypes = {
    ammattinimike: PropTypes.string.isRequired, // Vaatimus: string ja pakollinen
    työkokemus: PropTypes.number.isRequired, // Vaatimus: number ja pakollinen
    onKiinnostunut: PropTypes.bool.isRequired // Vaatimus: boolean ja pakollinen
  };
export default Card
//// Card.jsx
