import PropTypes from 'prop-types'

function Hakijaprofiilit(props) {
    return(
        <div className="hakijaprofiilit">
            <p>Ammattinimike: {props.ammattinimike}</p>
            <p>Työkokemus: {props.työkokemus}</p>
            <p>Kiinnostunut: {props.onKiinnostunut ? "Kyllä" : "Ei"}</p>
        </div>
    )

//


}
Hakijaprofiilit.propTypes = {
    ammattinimike: PropTypes.string,
    työkokemus: PropTypes.number,
    onKiinnostunut: PropTypes.bool,


}
Hakijaprofiilit.defaultProps = {
    ammattinimike: "Määrittämätön",
    työkokemus: 0,
    onKiinnostunut: false, 
}

export default Hakijaprofiilit