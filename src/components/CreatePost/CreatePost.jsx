import { useState } from 'react';
import { FaImages } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';
import images from '../../constants/images';
import Avatar from '../Avatar/Avatar';
import './CreatePost.scss';

function CreatePost() {
    const [containsImages, setContainsImages] = useState(false);

    return (
        <div className="create__post">
            <div className="create__post-options">
                <div className="autor">
                    <Avatar imgSrc={images.userImg} />
                    <span>autor</span>
                </div>
                <button
                    type="button"
                    onClick={() => setContainsImages((value) => !value)}
                >
                    <FaImages size={32} />
                </button>
            </div>
            <div className="create__post-content" contentEditable>
                Contenido de la publicación...
            </div>
            {containsImages && (
                <div className="create__post-media">
                    <div className="create__post-media_grid" />
                    <div className="create__post-media_add">
                        <BiImageAdd size={32} className="icon" />
                    </div>
                </div>
            )}

            <div className="create__post-submit">
                <button type="button">Publicar</button>
            </div>
        </div>
    );
}

export default CreatePost;
