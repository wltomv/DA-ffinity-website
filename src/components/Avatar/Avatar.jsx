import PropTypes from 'prop-types';
import './Avatar.scss';

function Avatar({ imgSrc }) {
    return (
        <div className="circle">
            <img src={imgSrc} alt="user" />
        </div>
    );
}

Avatar.propTypes = {
    imgSrc: PropTypes.string.isRequired,
};

export default Avatar;
