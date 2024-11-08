
// Button.jsx
// Button.jsx
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
}

// Määritellään prop-tyypit ja niiden pakollisuus
Button.propTypes = {
    label: PropTypes.string.isRequired,   // 'label' on pakollinen ja tyyppiä string
    onClick: PropTypes.func               // 'onClick' voi olla funktio
};

// Oletuspropit, jos 'label' tai 'onClick' puuttuvat
Button.defaultProps = {
    label: "Click me",                    // Oletusteksti
    onClick: () => {}                     // Tyhjä funktio oletustoiminnoksi
};

export default Button;


