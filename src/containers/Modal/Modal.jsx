import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';

import './Modal.scss';

function Modal({ children, isOpen, closeModal, title }) {
    return (
        <article className={`modal ${isOpen && 'is-open'}`}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3>{title}</h3>
                </div>
                <button
                    type="button"
                    className="modal-close"
                    onClick={closeModal}
                >
                    <AiFillCloseCircle size={32} />
                </button>
                {children}
            </div>
        </article>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string,
};

Modal.defaultProps = { title: '' };

export default Modal;
