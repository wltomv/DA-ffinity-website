import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FormBox.scss';

function FormBox({ children, footerMessage, linkMessage, link }) {
    return (
        <div className="container">
            <div className="container-logo">
                <h2>DAFFI</h2>
            </div>
            <div className="container-form">{children}</div>
            <span>
                {footerMessage}
                <Link to={link}>{linkMessage}</Link>
            </span>
        </div>
    );
}

FormBox.propTypes = {
    children: PropTypes.node.isRequired,
    footerMessage: PropTypes.string,
    linkMessage: PropTypes.string,
    link: PropTypes.string,
};

FormBox.defaultProps = {
    footerMessage: '',
    linkMessage: '',
    link: '',
};

export default FormBox;
