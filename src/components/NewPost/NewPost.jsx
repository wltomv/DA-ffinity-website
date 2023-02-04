import React from 'react';
import { FaImages } from 'react-icons/fa';
import images from '../../constants/images';
import Avatar from '../Avatar/Avatar';
import Modal from '../../containers/Modal/Modal';
import useModal from '../../hooks/useModal';
import CreatePost from '../CreatePost/CreatePost';

import './NewPost.scss';

function NewPost() {
    const [isOpen, openModal, closeModal] = useModal(false);

    return (
        <div className="new__post">
            <Avatar imgSrc={images.userImg} />
            <div className="new__post__container">
                <input
                    type="text"
                    placeholder="Nueva publicación"
                    onClick={openModal}
                />
                <div className="new__post__container-media">
                    <button type="button" onClick={openModal}>
                        <FaImages />
                        <span>Foto</span>
                    </button>
                </div>
            </div>

            <Modal
                title="Crear Publicación"
                isOpen={isOpen}
                closeModal={closeModal}
            >
                <CreatePost />
            </Modal>
        </div>
    );
}

export default NewPost;
