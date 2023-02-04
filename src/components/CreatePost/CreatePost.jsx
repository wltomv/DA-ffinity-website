import { useState } from 'react';
import { FaImages } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import images from '../../constants/images';
import Avatar from '../Avatar/Avatar';
import './CreatePost.scss';

function CreatePost() {
    const [addMedia, setAddMedia] = useState(false);
    const [media, setMedia] = useState({});

    const readfile = (e) => {
        const { files } = e.currentTarget;
        const file = files[0];
        const url = URL.createObjectURL(file);
        return { name: file.name, url, file };
    };

    const changeInput = (e) => {
        const newImage = readfile(e);
        setMedia(newImage);
    };

    const deleteImage = () => {
        setMedia({});
        setAddMedia(false);
    };

    return (
        <div className="create__post">
            <div className="create__post-options">
                <div className="autor">
                    <Avatar imgSrc={images.userImg} />
                    <span>autor</span>
                </div>
                {!addMedia && (
                    <button type="button" onClick={() => setAddMedia(true)}>
                        <FaImages size={32} />
                    </button>
                )}
            </div>
            <div
                contentEditable="true"
                className="create__post-content"
                placeholder="Contenido de la publicación..."
            />
            {addMedia && (
                <div className="create__post-media">
                    <button type="button">
                        <AiOutlineCloseCircle
                            size={32}
                            onClick={() => deleteImage()}
                        />
                    </button>

                    {media.file ? (
                        <div className="create__post-media_img">
                            <img src={media.url} alt="new-content" />
                        </div>
                    ) : (
                        <div className="create__post-media_add">
                            <label htmlFor="add">
                                <BiImageAdd size={32} className="icon" />
                                <input
                                    id="add"
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    multiple
                                    onChange={changeInput}
                                />
                            </label>
                        </div>
                    )}
                </div>
            )}

            <div className="create__post-submit">
                <button type="button">Publicar</button>
            </div>
        </div>
    );
}

export default CreatePost;
