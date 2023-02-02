import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';

import './Modal.scss';

function Modal({ children, isOpen, closeModal }) {
    return (
        <article className={`modal ${isOpen && 'is-open'}`}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3>titulo</h3>
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
};

export default Modal;
