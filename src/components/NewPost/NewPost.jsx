import React from 'react';
import { FaImages } from 'react-icons/fa';
import images from '../../constants/images';
import Avatar from '../Avatar/Avatar';
import './NewPost.scss';

function NewPost() {
    return (
        <div className="new__post">
            <Avatar imgSrc={images.userImg} />
            <div className="new__post__container">
                <input type="text" placeholder="Nueva publicación" />
                <div className="new__post__container-media">
                    <div>
                        <FaImages />
                        <span>Foto</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPost;
